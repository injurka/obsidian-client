<script lang="ts" setup>
import type { ContentNavItem } from '~/components/05.modules/content-viewer'
import { useEventListener } from '@vueuse/core'
import { PageLoader } from '~/components/02.shared/page-loader'
import { ContentViewerHeader, ContentViewerNavigation, useContentViewerStore } from '~/components/05.modules/content-viewer'

const contentViewerStore = useContentViewerStore()
const menu = ref(true)
const params = useTypedRouteParams()
const scrollableRef = ref<HTMLElement | null>(null)
const route = useRoute()

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

useEventListener(scrollableRef, 'scroll', handleScroll)

const { data: navItems, status } = await useAsyncData<ContentNavItem[]>(
  `nav-${params.value.vault}`,
  async () => {
    const vault = params.value.vault
    if (!vault)
      return []
    try {
      const { cmsUrl } = useRuntimeConfig().public
      const response = await $fetch<any>(`${cmsUrl}/content/${vault}/nav.json`)
      if (!Array.isArray(response))
        return []
      contentViewerStore.$patch({ navItems: response })
      return response
    }
    catch (e) {
      console.warn(`Failed to fetch navigation for ${vault}:`, e)
      return []
    }
  },
  { watch: [() => params.value.vault] },
)

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

      <main class="main-area">
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
