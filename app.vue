<script lang="ts" setup>
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
})
</script>

<template>
  <NuxtLoadingIndicator color="var(--border-accent-color)" />
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
