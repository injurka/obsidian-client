import type { MessageHandlers } from '../model/types'
import { getCacheInfo } from './utils'

declare let self: ServiceWorkerGlobalScope

export const messageHandlers: MessageHandlers = {
  async SKIP_WAITING() {
    await self.skipWaiting()
  },

  async GET_CACHE_INFO(port) {
    const info = await getCacheInfo()
    port.postMessage({ type: 'CACHE_INFO', payload: info })
  },

  async CLEAR_CACHE(port, payload) {
    if (!payload?.cacheName)
      return
    try {
      const deleted = await caches.delete(payload.cacheName)
      port.postMessage({ type: 'CACHE_CLEARED', payload: { success: deleted, cacheName: payload.cacheName } })
    }
    catch (e) {
      console.error(e)
    }
  },
}
