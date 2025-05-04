<script setup lang="ts">
import { ContentViewer, ContentViewerFooter, useContentViewerStore } from '~/components/modules/content-viewer'

interface RouteParams {
  pwd: string[]
  vault: string
}

const route = useRoute()
const store = useContentViewerStore()
const isOnline = ref(true)

const params = computed(() => {
  const routeParams = route.params as any
  return {
    vault: routeParams.vault,
    pwd: Array.isArray(routeParams.pwd) ? routeParams.pwd : [routeParams.pwd].filter(Boolean),
  } as RouteParams
})

function updateOnlineStatus() {
  isOnline.value = navigator.onLine
}

const { cmsProxyUrl } = useRuntimeConfig().public

const {
  data: contentData,
  refresh: contentRefresh,
  status: contentStatus,
} = useAsyncData(`content-${params.value.vault}-${params.value.pwd}`, () => {
  return $fetch<string>(
    `${cmsProxyUrl}/content/${params.value.vault}/${params.value.pwd.join('/')}.md`,
    { method: 'get', responseType: 'text' },
  )
})

const imageBasePath = computed(() => (`${cmsProxyUrl}/content/${params.value.vault}/_/`))

watch(
  () => params.value.pwd,
  () => {
    contentRefresh()
    if (typeof document !== 'undefined') {
      document.querySelector('.main-content')!.scrollTo(0, 0)
    }
  },
)

onMounted(() => {
  isOnline.value = navigator.onLine
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})

definePageMeta({
  layout: 'nav-content',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="content-wrapper">
    <div v-if="contentStatus === 'pending'" class="loader">
      <v-progress-circular indeterminate size="32" />
    </div>

    <ClientOnly v-else-if="contentData">
      <ContentViewer
        :content="contentData"
        :image-base-path="imageBasePath"
      />
      <ContentViewerFooter
        :vault="params.vault"
        :current-item-path="params.pwd.join('/')"
        :items="store.navItems"
      />
    </ClientOnly>

    <div v-else>
      <!-- Проверяем статус сети -->
      <v-alert
        v-if="!isOnline"
        text="Вы оффлайн, и эта страница не была закэширована для просмотра без интернета."
        title="Страница недоступна оффлайн."
        type="warning"
        variant="tonal"
      />
      <!-- Если онлайн, но данных нет (файл не существует, ошибка сервера и т.д.) -->
      <v-alert
        v-else
        text="Выберите интересующею вас тему."
        title="Ничего не выбрано или страница не найдена."
        type="info"
        variant="tonal"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

.loader {
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-grow: 0;
  font-size: 4rem;
  color: var(--fg-accent-color);
}

.v-alert {
  margin: 20px auto;
  max-width: 800px;
  width: 100%;
}
</style>
