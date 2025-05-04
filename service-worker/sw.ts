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

// Это стандартное сообщение для пропуска состояния ожидания нового SW
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})

// Добавление корневой страницы в кэш при установке SW.
// precacheAndRoute также добавляет '/' если он есть в манифесте,
// но явное добавление может быть полезно для гарантии.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheNames.precache).then((cache) => {
      // Убедитесь, что корневая страница всегда кэшируется
      return cache.add('/')
    }),
  )
})

// self.__WB_MANIFEST инжектируется Workbox во время сборки
// Он содержит список файлов, которые должны быть прекэшированы
const entries = self.__WB_MANIFEST
// В режиме разработки добавляем корень с ревизией для обхода кэша
if (import.meta.env.DEV)
  entries.push({ url: '/', revision: Math.random().toString() })

// Прекэширование всех ресурсов, перечисленных в entries
precacheAndRoute(entries)

// Очистка устаревших кэшей Workbox
cleanupOutdatedCaches()

// Настройки для NavigationRoute (перехват запросов навигации)
let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/] // В DEV разрешаем только корень для навигации SW

let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  // В PROD запрещаем запросы к /api/, sw.js и манифесту
  // Это важно, чтобы навигационные запросы к этим путям не перехватывались NavigationRoute
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
}

// В производственном режиме настраиваем стратегии кэширования
if (import.meta.env.PROD) {
  // Стратегия для манифеста PWA (предпочтительно сеть, но с кэшем как запасным вариантом)
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

  // URL-ы вашего динамического контента теперь идут через прокси /api/cms/
  const contentApiPattern = /\/api\/cms\/.*\.(json|txt|html|md)$/i
  const contentImgPattern = /\/api\/cms\/.*\.(png|jpg|jpeg|svg|gif)$/i

  // Более специфичные правила должны идти перед более общими.

  // Стратегия StaleWhileRevalidate для файлов контента (json, md и т.д.)
  // Пытается отдать из кэша сразу, пока в фоне проверяет сеть на наличие обновления.
  // Идеально для контента, который должен быть доступен оффлайн, но может обновляться.
  registerRoute(
    contentApiPattern,
    new StaleWhileRevalidate({
      cacheName: 'static-content-stale-while-revalidate',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100, // Максимальное количество записей в кэше
          maxAgeSeconds: 7 * 24 * 60 * 60, // Срок жизни записей (7 дней)
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }), // Кэшировать ответы со статусом 200 и 0 (для оффлайн)
      ],
    }),
  )

  // Стратегия StaleWhileRevalidate для изображений контента
  registerRoute(
    contentImgPattern,
    new StaleWhileRevalidate({
      cacheName: 'static-content-images-stale-while-revalidate',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // Кэшировать до 30 дней
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия NetworkOnly для ОБЩИХ запросов к /api/
  // Это правило должно идти ПОСЛЕ всех специфичных правил для /api/ (например, /api/cms/).
  // Оно гарантирует, что если запрос к /api/ не совпал с более специфичным правилом (и, возможно, не должен кэшироваться),
  // то он будет идти только в сеть. В оффлайне такие запросы будут завершаться ошибкой.
  registerRoute(
    /^\/api\//,
    new NetworkOnly(),
  )
}

// Маршрут для обработки навигационных запросов.
// Все запросы, которые не совпадают со статическими файлами и другими маршрутами,
// будут направлены на URL, созданный createHandlerBoundToURL('/').
// Это обычно отдает HTML-оболочку приложения.
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

// Активирует новую версию Service Worker'а сразу после установки,
// пропуская состояние ожидания (waiting state).
self.skipWaiting()
// Захватывает всех активных клиентов (открытые вкладки),
// чтобы новая версия SW начала контролировать их немедленно.
clientsClaim()
