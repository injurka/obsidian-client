/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable regexp/no-unused-capturing-group */
/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { cacheNames, clientsClaim } from 'workbox-core'
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
    caches.open(cacheNames.precache).then((cache) => {
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

let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
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

  // Паттерн для файлов контента (json, txt, html, md) через прокси /api/cms/content/
  const contentApiPattern = /\/api\/cms\/content\/.*\.(json|txt|html|md)$/i
  const contentImgPattern = /\/api\/cms\/content\/.*\.(png|jpg|jpeg|svg|gif)$/i

  // === ВАЖНО: ПОРЯДОК ПРАВИЛ ИМЕЕТ ЗНАЧЕНИЕ ===

  // Стратегия StaleWhileRevalidate для файлов контента (json, md и т.д.)
  // Это правило ДОЛЖНО идти ПЕРЕД более общими правилами для /api/
  registerRoute(
    ({ url, request, event }) => {
      const matches = contentApiPattern.test(url.pathname)
      if (matches) {
        // Логгируем, если паттерн контента совпал
        console.log(`[SW] Matched content API pattern: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'static-content-stale-while-revalidate',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  registerRoute(
    ({ url, request, event }) => {
      const matches = contentImgPattern.test(url.pathname)
      if (matches) {
        // Логгируем, если паттерн изображений совпал
        console.log(`[SW] Matched image pattern: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'content-images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия NetworkOnly для ОБЩИХ запросов к /api/, которые НЕ ДОЛЖНЫ кэшироваться
  // Это правило ДОЛЖНО идти ПОСЛЕ всех специфичных правил для /api/ (например, /api/cms/content/).
  registerRoute(
    ({ url, request, event }) => {
      const matches = /^\/api\//.test(url.pathname)
      if (matches) {
        // Логгируем, если общий API паттерн совпал (это должно происходить только для запросов,
        // не попавших в contentApiPattern или contentImgPattern)
        console.log(`[SW] Matched general API pattern: ${url.pathname}`)
      }
      return matches
    },
    new NetworkOnly(),
  )

  // === КОНЕЦ НАСТРОЙКИ ПРАВИЛ === 
}

registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

self.skipWaiting()
clientsClaim()
