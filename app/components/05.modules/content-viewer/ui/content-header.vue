<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { KitBtn } from '~/components/01.kit'
import ViewerSettingsMenu from './viewer-settings-menu.vue'

const route = useRoute()
const menu = defineModel('menu', { required: true })
const breadcrumbsTrackRef = ref<HTMLElement | null>(null)

const breadcrumbs = computed(() => {
  const vault = route.params.vault as string
  const pwd = (Array.isArray(route.params.pwd) ? route.params.pwd : [route.params.pwd].filter(Boolean)) as string[]

  if (!pwd.length) {
    return [{ title: vault, to: `/${vault}`, disabled: true }]
  }

  let currentPath = `/${vault}`
  const items = [{ title: vault, to: currentPath, disabled: false }]

  pwd.forEach((segment, index) => {
    currentPath += `/${segment}`
    items.push({ title: segment, to: currentPath, disabled: index === pwd.length - 1 })
  })

  return items
})

watch(
  () => route.path,
  async () => {
    await nextTick()
    if (breadcrumbsTrackRef.value) {
      breadcrumbsTrackRef.value.scrollLeft = breadcrumbsTrackRef.value.scrollWidth
    }
  },
  { immediate: true },
)

const currentVault = computed(() => route.params.vault as string)
</script>

<template>
  <header class="content-header">
    <div class="header-left">
      <KitBtn
        v-if="!menu"
        variant="text"
        size="sm"
        icon="mdi:menu"
        class="menu-btn flex-shrink-0"
        @click="menu = true"
      />

      <nav class="breadcrumbs">
        <div ref="breadcrumbsTrackRef" class="breadcrumb-track">
          <template v-for="(item, i) in breadcrumbs" :key="i">
            <Icon v-if="i > 0" icon="mdi:chevron-right" size="14" class="separator" />
            <span
              class="breadcrumb-item"
              :class="{ 'is-active': item.disabled }"
            >
              {{ item.title }}
            </span>
          </template>
        </div>
      </nav>
    </div>

    <div class="header-right flex-shrink-0">
      <ViewerSettingsMenu :vault="currentVault" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  border-bottom: 1px solid var(--border-secondary-color);
  background-color: rgba(var(--bg-header-color), 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.header-right {
  display: flex;
  align-items: center;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.menu-btn {
  margin-right: 0;
}

.breadcrumbs {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  position: relative;

  mask-image: linear-gradient(90deg, black 85%, transparent 100%);
}

.breadcrumb-track {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  padding-right: 20px;
}

.separator {
  color: var(--fg-muted-color);
  margin: 0 4px;
  flex-shrink: 0;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--fg-secondary-color);
  text-decoration: none;
  background-color: transparent;
  transition: all 0.2s ease;
  font-weight: 500;

  flex-shrink: 0;

  &:hover:not(.is-active) {
    background-color: var(--bg-hover-color);
    color: var(--fg-primary-color);
  }

  &.is-active {
    background-color: var(--bg-secondary-color);
    color: var(--fg-primary-color);
    pointer-events: none;
    border: 1px solid var(--border-secondary-color);
  }
}

@include mobile {
  .content-header {
    padding: 0 12px;
    gap: 8px;
  }

  .breadcrumb-item {
    font-size: 0.8rem;
    padding: 2px 6px;
  }
}
</style>
