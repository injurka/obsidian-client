<script lang="ts" setup>
import type { ContentNavItem, VaultMetaSettings } from '~/components/05.modules/content-viewer'
import { useEventListener, useSwipe } from '@vueuse/core'
import { PageLoader } from '~/components/02.shared/page-loader'
import { ContentViewerHeader, ContentViewerNavigation, useContentViewerStore } from '~/components/05.modules/content-viewer'

const params = useTypedRouteParams()
const contentViewerStore = useContentViewerStore()
const route = useRoute()
const { cmsUrl } = useRuntimeConfig().public

const menu = ref(true)
const scrollableRef = ref<HTMLElement | null>(null)
const mainAreaRef = ref<HTMLElement | null>(null)
const isSwipingOnScrollable = ref(false)

const isHeaderVisible = ref(true)
const lastScrollTop = ref(0)
const scrollThreshold = 50

function handleScroll() {
  if (!scrollableRef.value)
    return

  const scrollTop = scrollableRef.value.scrollTop

  if (scrollTop < scrollThreshold) {
    isHeaderVisible.value = true
  }
  else if (scrollTop < lastScrollTop.value) {
    isHeaderVisible.value = true
  }
  else {
    isHeaderVisible.value = false
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop
}

useSwipe(mainAreaRef, {
  passive: true,

  onSwipeStart: (e) => {
    const target = e.target as HTMLElement
    if (target.closest('table')) {
      isSwipingOnScrollable.value = true
    }
    else {
      isSwipingOnScrollable.value = false
    }
  },

  onSwipeEnd: (_, direction) => {
    if (isSwipingOnScrollable.value) {
      return
    }

    if (!menu.value && direction === 'right') {
      menu.value = true
    }
  },
})

useEventListener(scrollableRef, 'scroll', handleScroll)

// --- Загрузка навигации ---
const { data: navItems, status } = await useAsyncData<ContentNavItem[]>(
  `nav-${params.value.vault}`,
  async () => {
    const vault = params.value.vault
    if (!vault)
      return []
    try {
      const response = await $fetch<any>(`${cmsUrl}/content/${vault}/nav.json`)
      if (!Array.isArray(response))
        return []
      return response
    }
    catch (e) {
      console.warn(`Failed to fetch navigation for ${vault}:`, e)
      return []
    }
  },
  { watch: [() => params.value.vault] },
)

// --- Загрузка настроек Vault (Settings) ---
const { data: vaultSettings } = await useAsyncData<VaultMetaSettings | null>(
  `settings-${params.value.vault}`,
  async () => {
    const vault = params.value.vault
    if (!vault)
      return null
    try {
      return await $fetch<VaultMetaSettings>(`${cmsUrl}/meta/${vault}/settings.json`)
    }
    catch {
      // Если файла нет, это нормально
      return null
    }
  },
  { watch: [() => params.value.vault] },
)

// Синхронизация данных со стором
watchEffect(() => {
  contentViewerStore.$patch({
    navItems: navItems.value || [],
    vaultSettings: vaultSettings.value || null,
  })
})

// Применение настроек (Скрипты и Стили) в <head>
useHead(() => {
  if (!vaultSettings.value)
    return {}

  const vault = params.value.vault
  const vaultBaseUrl = `${cmsUrl}/meta/${vault}/`

  const scripts = (vaultSettings.value.scripts || []).map((src) => {
    const isAbsolute = src.startsWith('http') || src.startsWith('//')
    return {
      src: isAbsolute ? src : `${vaultBaseUrl}${src}`,
      defer: true,
      key: `vault-script-${src}`,
    }
  })

  const styles = (vaultSettings.value.styles || []).map((href) => {
    const isAbsolute = href.startsWith('http') || href.startsWith('//')
    return {
      rel: 'stylesheet',
      href: isAbsolute ? href : `${vaultBaseUrl}${href}`,
      key: `vault-style-${href}`,
    }
  })

  return {
    script: scripts,
    link: styles,
  }
})

watch(
  () => route.path,
  () => {
    if (scrollableRef.value) {
      scrollableRef.value.scrollTo({ top: 0, behavior: 'instant' })
    }
  },
)
</script>

<template>
  <div class="layout-container">
    <PageLoader v-if="status === 'pending'" />
    <div v-else class="layout-content">
      <ContentViewerNavigation v-model:menu="menu" :items="navItems ?? []" />

      <main ref="mainAreaRef" class="main-area">
        <ContentViewerHeader
          :menu="menu"
          :visible="isHeaderVisible"
          @update:menu="menu = $event"
        />
        <div
          ref="scrollableRef"
          class="content-scrollable"
          :class="{ borderless: contentViewerStore.borderlessViewEnabled }"
        >
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-primary-color);
  overflow: hidden;
}

.layout-content {
  display: flex;
  height: 100%;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.content-scrollable {
  flex: 1;
  overflow-y: auto;
  padding: 0;

  &.borderless :deep(.content-viewer) {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 40px;
    padding-right: 40px;

    @include mobile {
      padding: 0;
    }
  }
}
</style>
