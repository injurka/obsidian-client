<script setup lang="ts">
const showInstallBanner = ref<boolean>(false)
const showUpdateBanner = ref<boolean>(false)

const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa && $pwa.showInstallPrompt !== undefined) {
    watch(() => $pwa.showInstallPrompt, (newValue) => {
      if (newValue) {
        const dismissedTimestamp = localStorage.getItem('pwa-dismissed-prompt')
        const oneDay = 24 * 60 * 60 * 1000

        if (!dismissedTimestamp || (Date.now() - Number.parseInt(dismissedTimestamp) > oneDay)) {
          showInstallBanner.value = true
        }
      }
      else {
        showInstallBanner.value = false
      }
    }, { immediate: true })
  }

  if ($pwa && $pwa.needRefresh !== undefined) {
    watch(() => $pwa.needRefresh, (newValue) => {
      if (newValue) {
        showUpdateBanner.value = true
      }
      else {
        showUpdateBanner.value = false
      }
    }, { immediate: true })
  }

  if ($pwa?.offlineReady) {
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
  }

  navigator.serviceWorker.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('serviceWorker message:', event.data)
  })
})

function handleInstallClick() {
  if ($pwa && $pwa.install) {
    showInstallBanner.value = false
    $pwa.install()
  }
}

function handleDismissInstallBanner() {
  showInstallBanner.value = false
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('pwa-dismissed-prompt', Date.now().toString())
  }
  if ($pwa && $pwa.cancelInstall) {
    $pwa.cancelInstall()
  }
  // eslint-disable-next-line no-console
  console.log('[PWA] Install prompt banner dismissed by user.')
}

function handleUpdateClick() {
  if ($pwa && $pwa.updateServiceWorker) {
    showUpdateBanner.value = false
    $pwa.updateServiceWorker()
  }
}
</script>

<template>
  <!-- Баннер установки PWA -->
  <div v-if="showInstallBanner" class="pwa-banner install-prompt-banner">
    <div class="banner-content">
      <v-icon icon="mdi-cellphone" class="banner-icon" />
      <span>Установите это приложение для оффлайн доступа и быстрого запуска!</span>
    </div>
    <div class="banner-actions">
      <VBtn
        density="compact"
        variant="flat"
        color="primary"
        @click="handleInstallClick"
      >
        Установить
      </VBtn>
      <VBtn
        density="compact"
        variant="text"
        color="fg-primary-color"
        icon="mdi-close"
        @click="handleDismissInstallBanner"
      />
    </div>
  </div>

  <!-- Баннер обновления контента -->
  <div v-if="showUpdateBanner" class="pwa-banner update-content-banner">
    <div class="banner-content">
      <v-icon icon="mdi-refresh" class="banner-icon" />
      <span>Доступно обновление контента. Нажмите, чтобы обновить.</span>
    </div>
    <div class="banner-actions">
      <VBtn
        density="compact"
        variant="flat"
        color="primary"
        @click="handleUpdateClick"
      >
        Обновить
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.install-prompt-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-secondary-color);
  color: var(--fg-primary-color);
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  flex-wrap: wrap;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  font-size: 0.9rem;
}

.banner-icon {
  color: var(--fg-accent-color);
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

@include mobile {
  .install-prompt-banner {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 15px;
    gap: 10px;
  }
  .banner-content {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 4px;
  }
  .banner-actions {
    width: 100%;
    justify-content: center;
  }
}
</style>
