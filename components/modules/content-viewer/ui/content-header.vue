<script lang="ts" setup>
import type { VBreadcrumbs } from 'vuetify/components'
import { ThemesVariant, useChangeTheme } from '~/shared/composables/change-theme'
import { useContentViewerStore } from '../store'

type VBreadcrumbsItems = NonNullable<InstanceType<typeof VBreadcrumbs>['$props']['items']>

const route = useRoute()
const { setTheme, theme } = useChangeTheme()
const contentViewerStore = useContentViewerStore()
const menu = defineModel('menu', { required: true })

const { $pwa } = useNuxtApp()

function handleSWUpdate() {
  // Этот метод в @vite-pwa/nuxt обычно инициирует обновление SW
  // и перезагружает страницу после активации.
  $pwa?.updateServiceWorker()
}

async function handleForceRefresh() {
  try {
    handleSWUpdate()
    if ('caches' in window) {
      await caches.delete('static-content-stale-while-revalidate')
      await caches.delete('content-images')
      window.location.reload()
    }
  }
  catch {}
}

const needSWRefresh = computed(() => $pwa?.needRefresh) // Отслеживаем состояние необходимости обновления Service Worker'а

const isContentViewing = computed(() => {
  const params = route.params as any
  // Проверяем, что параметр pwd существует и не пустой (для /[vault]/[...pwd].vue)
  return Array.isArray(params.pwd) ? params.pwd.length > 0 : !!params.pwd
})

const controlledTheme = computed({
  get: () => theme.value,
  set: (value: ThemesVariant) => setTheme(value),
})

const themePreset = computed(() => {
  switch (controlledTheme.value) {
    case ThemesVariant.Light:
      return {
        current: ThemesVariant.Light,
        next: ThemesVariant.Dark,
        icon: 'mdi-weather-sunny',
      }
    case ThemesVariant.Dark:
      return {
        current: ThemesVariant.Dark,
        next: ThemesVariant.Rainy,
        icon: 'mdi-weather-night',
      }
    case ThemesVariant.Rainy:
      return {
        current: ThemesVariant.Rainy,
        next: ThemesVariant.Light,
        icon: 'mdi-weather-pouring',
      }
    default:
      return {
        current: ThemesVariant.Light,
        next: ThemesVariant.Dark,
        icon: 'mdi-weather-sunny',
      }
  }
})

const breadcrumbItems = computed<VBreadcrumbsItems>(() => {
  const vault = route.params.vault as string
  const pwd = (Array.isArray(route.params.pwd) ? route.params.pwd : [route.params.pwd].filter(Boolean)) as string[]

  const items = [] as VBreadcrumbsItems

  let currentPath = `/${vault}`
  pwd.forEach((segment, index) => {
    // Для последнего элемента используем маршрут до файла,
    // для директорий - до директории
    const pathToSegment = `${currentPath}/${segment}`
    currentPath = pathToSegment // Обновляем currentPath для следующей итерации

    items.push({
      title: segment,
      to: currentPath,
      disabled: index === pwd.length - 1,
    })
  })

  return items
})
</script>

<template>
  <div class="content-header">
    <VBtn
      icon="mdi-menu"
      variant="text"
      density="compact"
      style="font-size: 0.8rem; height: 30px;"
      :style="{ opacity: menu ? 0 : 1 }"
      @click="menu = true"
    />
    <VBreadcrumbs :items="breadcrumbItems" density="compact" class="content-breadcrumbs">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </VBreadcrumbs>
    <div class="control">
      <VBtn
        v-if="needSWRefresh"
        style="font-size: 0.8rem; margin-right: 12px;"
        icon="mdi-refresh"
        variant="text"
        density="compact"
        title="Доступно обновление приложения"
        color="var(--fg-accent-color)"
        @click="handleSWUpdate"
      />
      <VBtn
        v-if="isContentViewing"
        style="font-size: 0.8rem; margin-right: 12px;"
        icon="mdi-sync"
        variant="text"
        density="compact"
        title="Принудительно обновить контент текущей страницы"
        color="var(--fg-primary-color)"
        @click="handleForceRefresh"
      />

      <VMenu location="bottom end" :close-on-content-click="false">
        <template #activator="{ props }">
          <VBtn
            style="font-size: 0.8rem;"
            v-bind="props"
            icon="mdi-tune-variant"
            variant="text"
            density="compact"
            title="Настройки отображения"
          />
        </template>
        <VList density="compact">
          <VListItem>
            <VCheckbox
              v-model="contentViewerStore.borderlessViewEnabled"
              label="Отображение без границ"
              hide-details density="compact"
            />
          </VListItem>
        </VList>
      </VMenu>
      <VBtn
        style="font-size: 0.8rem; margin-left: 12px;"
        :icon="themePreset.icon"
        variant="text"
        density="compact"
        title="Визуальное оформление"
        @click="controlledTheme = themePreset.next"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 10px;
  border-bottom: 1px solid var(--border-secondary-color);
  flex-shrink: 0;
  min-height: #{$header-height};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  background-color: rgba(var(--bg-header-color), 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.content-breadcrumbs {
  padding: 8px 0;
  flex-grow: 1;
  overflow: hidden;

  :deep(.v-breadcrumbs-item) {
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  :deep(.v-breadcrumbs-item--link) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

@include mobile {
  :deep(.content-breadcrumbs) {
    display: none;
  }
}
</style>
