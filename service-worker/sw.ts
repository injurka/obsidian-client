/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(workbox.core.cacheNames.precache).then((cache) => {
      return cache.add('/')
    }),
  )
})

const entries = self.__WB_MANIFEST
if (import.meta.env.DEV)
  entries.push({ url: '/', revision: Math.random().toString() })

precacheAndRoute(entries)

cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

// deny api and server page calls
let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]

  registerRoute(
    /^\/api\//,
    new NetworkOnly(),
  )
}

if (import.meta.env.PROD) {
  registerRoute(
    ({ request, sameOrigin }) => sameOrigin && request.destination === 'manifest',
    new NetworkFirst({
      cacheName: 'wander-mark-webmanifest',
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({ maxEntries: 100 }),
      ],
    }),
  )

  // URL-ы вашего динамического контента (например, из папки 'content')
  // Убедитесь, что этот паттерн соответствует URL-ам, которые ваше приложение запрашивает
  const contentApiPattern = /\/content\/.*\.(json|txt|html)$/i // Пример паттерна для .json, .txt, .html в папке content
  const contentImgPattern = /\/content\/.*\.(png|jpg|jpeg|svg|gif)$/i // Пример паттерна для img

  // Стратегия для nav.json и других часто обновляемых данных: NetworkFirst
  // Пытается получить с сети, если оффлайн - из кэша.
  // Обеспечивает свежесть при наличии сети.
  registerRoute(
    contentApiPattern,
    new NetworkFirst({
      cacheName: 'static-content-network-first',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100, // Максимальное количество записей в кэше
          maxAgeSeconds: 7 * 24 * 60 * 60, // Кэшировать до 7 дней
        }),
      ],
    }),
  )
  registerRoute(
    contentImgPattern,
    new StaleWhileRevalidate({
      cacheName: 'content-images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // Кэшировать до 30ni  дней
        }),
      ],
    }),
  )
}

registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

self.skipWaiting()
clientsClaim()
