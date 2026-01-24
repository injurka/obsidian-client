import type { ApiCacheRule, ServiceWorkerMessage } from './model/types'
import { clientsClaim } from 'workbox-core'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { messageHandlers } from './lib/message-handlers'
import { AssetAnalyzer, CacheStrategyFactory } from './lib/utils'
import { CACHE_CONFIG } from './model/types'

declare let self: ServiceWorkerGlobalScope

// 1. Активация и очистка
self.skipWaiting()
clientsClaim()
cleanupOutdatedCaches()

// 2. Прекэширование манифеста (генерируется Vite)
const entries = self.__WB_MANIFEST || []
if (import.meta.env.DEV) {
  entries.push({ url: '/', revision: Math.random().toString() })
}
precacheAndRoute(entries)

// 3. Правила для внешних ресурсов и API
const API_RULES: ApiCacheRule[] = [
  // --- КОНТЕНТ (Markdown, JSON) ---
  {
    // Паттерн для файлов контента из CMS
    pattern: /\/static\/wander-mark\/.*\.(json|txt|html|md)$/i,
    cacheName: CACHE_CONFIG.names.contentFiles,
    strategy: 'StaleWhileRevalidate', 
    maxAgeSeconds: CACHE_CONFIG.durations.api,
    maxEntries: CACHE_CONFIG.limits.content,
  },
  // --- КАРТИНКИ КОНТЕНТА ---
  {
    pattern: /\/static\/wander-mark\/.*\.(png|jpg|jpeg|svg|gif|webp)$/i,
    cacheName: CACHE_CONFIG.names.contentImages,
    strategy: 'StaleWhileRevalidate',
    maxAgeSeconds: CACHE_CONFIG.durations.medium,
    maxEntries: CACHE_CONFIG.limits.images,
  },
  // --- ШРИФТЫ ---
  {
    pattern: /\.(woff|woff2|ttf|eot)$/i,
    cacheName: CACHE_CONFIG.names.fonts,
    strategy: 'CacheFirst', // Шрифты меняются редко
    maxAgeSeconds: CACHE_CONFIG.durations.long,
    maxEntries: CACHE_CONFIG.limits.fonts,
  },
  // --- ICONIFY ---
  {
    pattern: /^https:\/\/api\.iconify\.design/i,
    cacheName: CACHE_CONFIG.names.icons,
    strategy: 'StaleWhileRevalidate',
    maxAgeSeconds: CACHE_CONFIG.durations.medium,
    maxEntries: CACHE_CONFIG.limits.icons,
  },
  // --- ИСКЛЮЧЕНИЯ API ---
  {
    // Все остальные запросы к /api/, которые не попали выше
    pattern: /^\/api\//,
    cacheName: 'api-network-only',
    strategy: 'NetworkOnly',
    maxAgeSeconds: 0,
    maxEntries: 0,
  },
]

// Регистрация правил API
API_RULES.forEach((rule) => {
  let strategy
  const opts = { maxEntries: rule.maxEntries, maxAgeSeconds: rule.maxAgeSeconds, statuses: rule.statuses }

  switch (rule.strategy) {
    case 'CacheFirst': strategy = CacheStrategyFactory.createCacheFirst(rule.cacheName, opts); break
    case 'NetworkFirst': strategy = CacheStrategyFactory.createNetworkFirst(rule.cacheName, opts); break
    case 'StaleWhileRevalidate': strategy = CacheStrategyFactory.createStaleWhileRevalidate(rule.cacheName, opts); break
    case 'NetworkOnly': strategy = CacheStrategyFactory.createNetworkOnly(); break
  }

  if (strategy) {
    registerRoute(
      ({ url }) => rule.pattern.test(url.pathname) || rule.pattern.test(url.href),
      strategy,
    )
  }
})

// 4. Статические ассеты (JS/CSS) с умным разделением
function scriptStyleMatch({ request, sameOrigin }: any) {
  return sameOrigin && (request.destination === 'script' || request.destination === 'style')
}

registerRoute(
  opts => scriptStyleMatch(opts) && AssetAnalyzer.getAssetType(opts.url.href) === 'hashed',
  CacheStrategyFactory.createCacheFirst(CACHE_CONFIG.names.hashedAssets, {
    maxEntries: CACHE_CONFIG.limits.static,
    maxAgeSeconds: CACHE_CONFIG.durations.long,
  }),
)

registerRoute(
  opts => scriptStyleMatch(opts) && AssetAnalyzer.getAssetType(opts.url.href) === 'vendor',
  CacheStrategyFactory.createCacheFirst(CACHE_CONFIG.names.vendorAssets, {
    maxEntries: CACHE_CONFIG.limits.static,
    maxAgeSeconds: CACHE_CONFIG.durations.medium,
  }),
)

registerRoute(
  opts => scriptStyleMatch(opts) && AssetAnalyzer.getAssetType(opts.url.href) === 'regular',
  CacheStrategyFactory.createStaleWhileRevalidate(CACHE_CONFIG.names.regularAssets, {
    maxEntries: CACHE_CONFIG.limits.static,
    maxAgeSeconds: CACHE_CONFIG.durations.short,
  }),
)

// 5. SPA Навигация (Fallback)
let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
}

registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

// 6. Обработка сообщений
self.addEventListener('message', async (event) => {
  if (!event.data || !event.ports.length)
    return

  const { type, payload } = event.data as ServiceWorkerMessage
  const port = event.ports[0]
  const handler = messageHandlers[type]

  if (handler) {
    await handler(port, payload)
  }
})
