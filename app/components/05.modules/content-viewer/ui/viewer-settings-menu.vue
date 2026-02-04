<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { KitBtn, KitCheckbox, KitDropdown } from '~/components/01.kit'
import { CACHE_CONFIG } from '~/service-worker/model/types'
import { ThemesVariant, useChangeTheme } from '~/shared/composables/use-change-theme'
import { flattenNavItems } from '../lib/navigation'
import { useContentViewerStore } from '../store'

interface Props {
  vault: string
}

const props = defineProps<Props>()

const { $pwa } = useNuxtApp()
const { setTheme, theme } = useChangeTheme()
const contentViewerStore = useContentViewerStore()
const { cmsUrl } = useRuntimeConfig().public

// --- Theme Logic ---
const currentThemeIcon = computed(() =>
  theme.value === ThemesVariant.Light ? 'mdi:weather-sunny' : 'mdi:weather-night',
)

function toggleTheme() {
  setTheme(theme.value === ThemesVariant.Light ? ThemesVariant.Dark : ThemesVariant.Light)
}

// --- Cache / PWA Logic ---
const isCaching = ref(false)
const cacheProgress = ref(0)
const totalFilesToCache = ref(0)

async function handleForceRefresh() {
  try {
    if ($pwa?.needRefresh)
      await $pwa.updateServiceWorker()

    if ('caches' in window) {
      await caches.delete(CACHE_CONFIG.names.contentFiles)
      await caches.delete(CACHE_CONFIG.names.contentImages)
      window.location.reload()
    }
  }
  catch (e) {
    console.error(e)
  }
}

// Вспомогательная функция для кодирования пути
// Это важно, так как у вас есть иероглифы и эмодзи в путях
function encodePath(path: string): string {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/')
}

async function handleCacheVault() {
  if (isCaching.value || !contentViewerStore.navItems)
    return

  // Проверяем поддержку Cache API
  if (!('caches' in window)) {
    // eslint-disable-next-line no-alert
    alert('Ваш браузер не поддерживает кеширование для офлайна.')
    return
  }

  isCaching.value = true
  cacheProgress.value = 0

  const allFiles = flattenNavItems(contentViewerStore.navItems)
  totalFilesToCache.value = allFiles.length

  if (totalFilesToCache.value === 0) {
    isCaching.value = false
    return
  }

  try {
    const cache = await caches.open(CACHE_CONFIG.names.contentFiles)

    let loaded = 0
    const batchSize = 25

    const processBatch = async (batch: typeof allFiles) => {
      const promises = batch.map(async (file) => {
        try {
          const encodedPath = encodePath(file.path)
          const url = `${cmsUrl}/content/${props.vault}/${encodedPath}.md`

          await cache.add(url)
        }
        catch (e) {
          console.warn(`Failed to cache: ${file.path}`, e)
        }
        finally {
          loaded++
          cacheProgress.value = Math.floor((loaded / totalFilesToCache.value) * 100)
        }
      })
      await Promise.all(promises)
    }

    for (let i = 0; i < allFiles.length; i += batchSize) {
      await processBatch(allFiles.slice(i, i + batchSize))
    }
  }
  catch (error) {
    console.error('Global cache error:', error)
  }
  finally {
    setTimeout(() => {
      isCaching.value = false
      cacheProgress.value = 0
    }, 1000)
  }
}
</script>

<template>
  <KitDropdown :width="280" :close-on-content-click="false">
    <template #activator>
      <KitBtn variant="text" size="sm" icon="mdi:dots-vertical" title="Меню настроек" />
    </template>

    <div class="menu-content">
      <!-- Секция: Внешний вид -->
      <div class="menu-section">
        <div class="section-title">
          Внешний вид
        </div>

        <div class="menu-item" @click="toggleTheme">
          <div class="item-label">
            <Icon :icon="currentThemeIcon" class="item-icon" />
            <span>Тема оформления</span>
          </div>
          <span class="value-text">{{ theme.preference === 'light' ? 'Светлая' : 'Темная' }}</span>
        </div>

        <div class="divider" />

        <div class="settings-group">
          <KitCheckbox v-model="contentViewerStore.borderlessViewEnabled" label="Широкий просмотр" />
          <KitCheckbox v-model="contentViewerStore.coloredFoldersEnabled" label="Цветные папки" />
          <KitCheckbox v-model="contentViewerStore.showIconsEnabled" label="Иконки в меню" />
          <KitCheckbox v-model="contentViewerStore.showOutlineEnabled" label="Линии структуры" />
        </div>
      </div>

      <!-- Секция: Данные -->
      <div class="menu-section">
        <div class="section-title">
          Данные и хранилище
        </div>

        <KitBtn
          variant="text"
          class="menu-action-btn"
          @click="handleForceRefresh"
        >
          <Icon icon="mdi:cloud-refresh" class="btn-icon" />
          <span>Обновить контент</span>
        </KitBtn>

        <div class="cache-control">
          <KitBtn
            variant="tonal"
            color="primary"
            class="menu-action-btn"
            :disabled="isCaching"
            @click="handleCacheVault"
          >
            <Icon :icon="isCaching ? 'svg-spinners:ring-resize' : 'mdi:folder-download'" class="btn-icon" />
            <span>{{ isCaching ? `Загрузка ${cacheProgress}%` : 'Скачать всё хранилище' }}</span>
          </KitBtn>

          <div v-if="isCaching" class="progress-bar">
            <div class="progress-fill" :style="{ width: `${cacheProgress}%` }" />
          </div>
          <p class="hint-text">
            Сохраняет все файлы текущего раздела для доступа без интернета.
          </p>
        </div>
      </div>

      <div v-if="$pwa?.needRefresh" class="menu-section highlight">
        <div class="menu-item" @click="$pwa?.updateServiceWorker()">
          <div class="item-label">
            <Icon icon="mdi:alert-circle-outline" class="item-icon warning" />
            <span>Доступно обновление приложения</span>
          </div>
        </div>
      </div>
    </div>
  </KitDropdown>
</template>

<style lang="scss" scoped>
.menu-content {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.menu-section {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &.highlight {
    background-color: rgba(var(--bg-warning-color-rgb), 0.1);
    border-radius: 6px;
    padding: 4px;
    margin-top: 4px;

    .warning {
      color: var(--fg-warning-color);
    }
  }
}

.section-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--fg-muted-color);
  font-weight: 600;
  padding: 0 8px 4px;
  letter-spacing: 0.5px;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: var(--bg-hover-color);
  }
}

.item-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--fg-primary-color);
}

.item-icon {
  font-size: 1.1rem;
  color: var(--fg-secondary-color);
}

.value-text {
  font-size: 0.8rem;
  color: var(--fg-secondary-color);
}

.divider {
  height: 1px;
  background-color: var(--border-secondary-color);
  margin: 4px 0;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 4px;
}

.menu-action-btn {
  justify-content: flex-start !important;
  width: 100%;
  padding-left: 8px;
  font-weight: 500;

  .btn-icon {
    margin-right: 8px;
    font-size: 1.1rem;
  }
}

.cache-control {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
}

.progress-bar {
  height: 4px;
  background-color: var(--bg-tertiary-color);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 4px;
}

.progress-fill {
  height: 100%;
  background-color: var(--fg-accent-color);
  transition: width 0.3s ease;
}

.hint-text {
  font-size: 0.75rem;
  color: var(--fg-muted-color);
  padding: 0 4px;
  line-height: 1.3;
}
</style>
