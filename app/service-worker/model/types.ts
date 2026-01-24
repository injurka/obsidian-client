/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

export type AssetType = 'hashed' | 'vendor' | 'regular'

export interface ServiceWorkerMessage {
  type: 'SKIP_WAITING' | 'GET_CACHE_INFO' | 'CLEAR_CACHE'
  payload?: {
    cacheName?: string
  }
}

export interface CacheInfo {
  name: string
  size: number
  urls: string[]
  totalSize?: number
}

// Конфигурация для WanderingMark
export const CACHE_CONFIG = {
  names: {
    // Основные ассеты
    webmanifest: 'wm-webmanifest',
    fonts: 'wm-fonts', // Для Maple Mono CN
    icons: 'wm-icons', // Iconify

    // Статика приложения
    hashedAssets: 'wm-hashed-assets',
    vendorAssets: 'wm-vendor-assets',
    regularAssets: 'wm-regular-assets',

    // Контент (CMS)
    contentFiles: 'wm-content-files', // .md, .json
    contentImages: 'wm-content-images', // Картинки внутри статей
  },
  durations: {
    long: 365 * 24 * 60 * 60, // Год (шрифты, хешированные файлы)
    medium: 30 * 24 * 60 * 60, // Месяц (картинки)
    short: 7 * 24 * 60 * 60, // Неделя (манифест)
    api: 7 * 24 * 60 * 60, // API контент (обновляется через SWR)
  },
  limits: {
    fonts: 10,
    images: 200, // Лимит картинок контента
    icons: 100,
    static: 100,
    content: 500, // Много мелких md/json файлов
  },
} as const

export interface ApiCacheRule {
  pattern: RegExp
  cacheName: string
  strategy: 'CacheFirst' | 'NetworkFirst' | 'StaleWhileRevalidate' | 'NetworkOnly'
  maxAgeSeconds: number
  maxEntries: number
  statuses?: number[]
}

export interface MessageHandlers {
  SKIP_WAITING: () => Promise<void>
  GET_CACHE_INFO: (port: MessagePort) => Promise<void>
  CLEAR_CACHE: (port: MessagePort, payload?: { cacheName?: string }) => Promise<void>
}
