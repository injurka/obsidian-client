import type { WorkboxPlugin } from 'workbox-core'
import type { AssetType, CacheInfo } from '../model/types'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheFirst, NetworkFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

export class AssetAnalyzer {
  private static cache = new Map<string, AssetType>()

  static HASH_PATTERNS = [
    /\.[a-f0-9]{8,}\.(js|css|mjs)$/i, // Vite хеши
    /\.[a-f0-9]{6,12}\.(js|css|mjs)$/i,
    /assets\/.*\.[a-f0-9]{8,}\./i,
    /\?v=[a-f0-9]{8,}/i,
  ]

  static VENDOR_PATTERNS = [
    /node_modules/i,
    /vendor/i,
    /_nuxt\/.*\.(js|mjs)$/i, // Nuxt vendor chunks часто попадают сюда
  ]

  static getAssetType(url: string): AssetType {
    if (this.cache.has(url))
      return this.cache.get(url)!

    let type: AssetType = 'regular'
    if (this.HASH_PATTERNS.some(p => p.test(url)))
      type = 'hashed'
    else if (this.VENDOR_PATTERNS.some(p => p.test(url)))
      type = 'vendor'

    if (this.cache.size > 1000)
      this.cache.clear()
    this.cache.set(url, type)
    return type
  }
}

export class CacheStrategyFactory {
  // Общие плагины
  private static getPlugins(cacheName: string, options: { maxEntries?: number, maxAgeSeconds?: number, statuses?: number[] }) {
    const plugins: WorkboxPlugin[] = [
      new CacheableResponsePlugin({
        statuses: options.statuses || [0, 200],
      }),
    ]

    if (options.maxEntries || options.maxAgeSeconds) {
      plugins.push(new ExpirationPlugin({
        maxEntries: options.maxEntries,
        maxAgeSeconds: options.maxAgeSeconds,
        purgeOnQuotaError: true,
      }))
    }

    // Логирование в DEV режиме
    if (import.meta.env.DEV) {
      plugins.push({
        cachedResponseWillBeUsed: async ({ cachedResponse }) => {
          if (cachedResponse)
            console.log(`[SW-HIT] ${cacheName}`)
          return cachedResponse
        },
      })
    }

    return plugins
  }

  static createNetworkFirst(cacheName: string, options: any) {
    return new NetworkFirst({
      cacheName,
      plugins: this.getPlugins(cacheName, options),
    })
  }

  static createCacheFirst(cacheName: string, options: any) {
    return new CacheFirst({
      cacheName,
      plugins: this.getPlugins(cacheName, options),
    })
  }

  static createStaleWhileRevalidate(cacheName: string, options: any) {
    return new StaleWhileRevalidate({
      cacheName,
      plugins: this.getPlugins(cacheName, options),
    })
  }

  static createNetworkOnly() {
    return new NetworkOnly()
  }
}

export async function getCacheInfo(): Promise<CacheInfo[]> {
  try {
    const cacheNames = await caches.keys()
    return Promise.all(
      cacheNames.map(async (name) => {
        const cache = await caches.open(name)
        const keys = await cache.keys()
        return { name, size: keys.length, urls: keys.slice(0, 5).map(r => r.url) }
      }),
    )
  }
  catch {
    return []
  }
}
