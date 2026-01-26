<script setup lang="ts">
import { ContentViewer, ContentViewerFooter, useContentViewerStore } from '~/components/05.modules/content-viewer'

const store = useContentViewerStore()
const params = useTypedRouteParams()

const { cmsUrl } = useRuntimeConfig().public
const imageBasePath = computed(() => (`${cmsUrl}/content/${params.value.vault}/_/`))

const { data: contentData, status } = useAsyncData(
  () => `content-${params.value.vault}-${params.value.pwd.join('/')}`,
  () => {
    const path = params.value.pwd.map(segment => encodeURIComponent(segment)).join('/')
    
    return $fetch<string>(
      `${cmsUrl}/content/${params.value.vault}/${path}.md`,
      { responseType: 'text' },
    )
  },
  {
    watch: [params], 
  },
)

definePageMeta({
  layout: 'nav-content',
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div class="page-wrapper">
    <div v-if="status === 'pending'" class="loading-state">
      <div class="loading-text">
        Загрузка...
      </div>
    </div>

    <ClientOnly v-else-if="contentData">
      <ContentViewer
        :content="contentData ?? ''"
        :image-base-path="imageBasePath"
      />
      <ContentViewerFooter
        :vault="params.vault"
        :current-item-path="params.pwd.join('/')"
        :items="store.navItems"
      />
    </ClientOnly>

    <div v-else class="empty-state">
      <div class="alert">
        <h3>Страница не найдена или недоступна</h3>
        <p>Пожалуйста, выберите другой раздел в меню.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper { width: 100%; }
.loading-state { text-align: center; padding: 40px; color: var(--fg-muted-color); }
.empty-state { padding: 40px; display: flex; justify-content: center; }
.alert {
  background: var(--bg-secondary-color);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--fg-accent-color);
}
</style>
