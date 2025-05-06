<script lang="ts" setup>
import { InstallPromptBanner } from '~/components/shared/install-prompt-banner'
import { useChangeTheme } from '~/shared/composables/change-theme'

const app = useAppConfig()
const { $pwa } = useNuxtApp()
const { theme, getHeadThemeColor } = useChangeTheme()

useHead({
  ...app,
  htmlAttrs: {
    lang: 'ru',
  },
  meta: [
    { name: 'theme-color', content: getHeadThemeColor() },
  ],
})

watch(
  () => theme.value,
  () => {
    useHead({
      ...app,
      meta: [
        { name: 'theme-color', content: getHeadThemeColor() },
      ],
    })
  },
)

onMounted(() => {
  if ($pwa?.offlineReady) {
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
  }

  navigator.serviceWorker.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('serviceWorker:', event)
  })
})
</script>

<template>
  <NuxtLoadingIndicator color="var(--border-accent-color)" />
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <InstallPromptBanner />
</template>
