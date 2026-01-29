<script lang="ts" setup>
import type { BacklinksMap, ContentNavItem, SearchIndexItem, VaultMetaSettings } from '~/components/05.modules/content-viewer'
import { useEventListener, useSwipe } from '@vueuse/core'
import { PageLoader } from '~/components/02.shared/page-loader'
import { ContentViewerHeader, ContentViewerNavigation, useContentViewerStore } from '~/components/05.modules/content-viewer'
import SearchModal from '~/components/05.modules/content-viewer/ui/search-modal.vue'

const params = useTypedRouteParams()
const contentViewerStore = useContentViewerStore()
const route = useRoute()
const { cmsUrl } = useRuntimeConfig().public

const menu = ref(true)
const searchOpen = ref(false)
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
    if (isSwipingOnScrollable.value)
      return
    if (!menu.value && direction === 'right') {
      menu.value = true
    }
  },
})

useEventListener(scrollableRef, 'scroll', handleScroll)

// --- Загрузка данных (Nav, Settings, Backlinks) ---
const { data, status } = await useAsyncData(
  `vault-data-${params.value.vault}`,
  async () => {
    const vault = params.value.vault
    if (!vault)
      return { nav: [], settings: null, backlinks: null }

    const [nav, settings, backlinks, searchIndex] = await Promise.all([
      // 1. Navigation
      $fetch<ContentNavItem[]>(`${cmsUrl}/content/${vault}/nav.json`).catch(() => []),
      // 2. Settings
      $fetch<VaultMetaSettings>(`${cmsUrl}/meta/${vault}/settings.json`).catch(() => null),
      // 3. Backlinks
      $fetch<BacklinksMap>(`${cmsUrl}/meta/${vault}/backlinks.json`).catch(() => null),
      // 4. Search
      $fetch<SearchIndexItem[]>(`${cmsUrl}/meta/${vault}/search.json`).catch(() => []),
    ])

    return { nav, settings, backlinks, searchIndex }
  },
  { watch: [() => params.value.vault] },
)

// Синхронизация данных со стором
watchEffect(() => {
  if (data.value) {
    contentViewerStore.$patch({
      navItems: data.value.nav || [],
      vaultSettings: data.value.settings || null,
      backlinks: data.value.backlinks || null,
      searchIndex: data.value.searchIndex || [],
    })
  }
})

// Применение настроек (Скрипты и Стили) в <head>
useHead(() => {
  const settings = data.value?.settings
  if (!settings)
    return {}

  const vault = params.value.vault
  const vaultBaseUrl = `${cmsUrl}/meta/${vault}/`

  const scripts = (settings.scripts || []).map((src) => {
    const isAbsolute = src.startsWith('http') || src.startsWith('//')
    return {
      src: isAbsolute ? src : `${vaultBaseUrl}${src}`,
      defer: true,
      key: `vault-script-${src}`,
    }
  })

  const styles = (settings.styles || []).map((href) => {
    const isAbsolute = href.startsWith('http') || href.startsWith('//')
    return {
      rel: 'stylesheet',
      href: isAbsolute ? href : `${vaultBaseUrl}${href}`,
      key: `vault-style-${href}`,
    }
  })

  return { script: scripts, link: styles }
})

watch(() => route.path, () => {
  if (scrollableRef.value) {
    scrollableRef.value.scrollTo({ top: 0, behavior: 'instant' })
  }
})
</script>

<template>
  <div class="layout-container">
    <PageLoader v-if="status === 'pending'" />
    <div v-else class="layout-content">
      <ContentViewerNavigation v-model:menu="menu" :items="data?.nav ?? []" />

      <main ref="mainAreaRef" class="main-area">
        <ContentViewerHeader
          :menu="menu"
          :visible="isHeaderVisible"
          @update:menu="menu = $event"
          @open-search="searchOpen = true"
        />
        <div
          ref="scrollableRef"
          class="content-scrollable"
          :class="{ borderless: contentViewerStore.borderlessViewEnabled }"
        >
          <slot />
        </div>
      </main>

      <SearchModal v-model="searchOpen" />
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
  position: relative;
}

.content-scrollable {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 50px 0 0 0;

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
