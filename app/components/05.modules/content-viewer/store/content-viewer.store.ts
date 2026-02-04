import type { BacklinkItem, BacklinksMap, ContentNavItem, SearchIndexItem, VaultMetaSettings } from '../models'
import { useCookie } from '#app'
import { defineStore } from 'pinia'
import { findItemByPath } from '../lib/navigation'

const COOKIE_BORDERLESS_VIEW = 'ui_borderlessViewEnabled'
const COOKIE_COLORED_FOLDERS = 'ui_coloredFoldersEnabled'
const COOKIE_SHOW_ICONS = 'ui_showIconsEnabled'
const COOKIE_SHOW_OUTLINE = 'ui_showOutlineEnabled'

export const useContentViewerStore = defineStore('contentViewer', () => {
  const route = useRoute()

  // Данные
  const navItems = ref<ContentNavItem[] | null>(null)
  const vaultSettings = ref<VaultMetaSettings | null>(null)
  const backlinks = ref<BacklinksMap | null>(null)
  const searchIndex = ref<SearchIndexItem[] | null>(null)

  // Настройки UI
  const borderlessViewEnabled = useCookie<boolean>(COOKIE_BORDERLESS_VIEW, { default: () => true })
  const coloredFoldersEnabled = useCookie<boolean>(COOKIE_COLORED_FOLDERS, { default: () => false })
  const showIconsEnabled = useCookie<boolean>(COOKIE_SHOW_ICONS, { default: () => true })
  const showOutlineEnabled = useCookie<boolean>(COOKIE_SHOW_OUTLINE, { default: () => true })

  // Активный элемент на основе URL
  const activeItem = computed(() => {
    if (!navItems.value)
      return null

    const rawPwd = route.params.pwd
    const pathSegments = Array.isArray(rawPwd)
      ? rawPwd
      : [rawPwd].filter(Boolean) as string[]

    if (pathSegments.length === 0)
      return null

    return findItemByPath(navItems.value, pathSegments)
  })

  // Обратные ссылки для текущей страницы
  const currentBacklinks = computed<BacklinkItem[]>(() => {
    if (!backlinks.value)
      return []

    // Декодируем путь, так как в JSON ключи могут быть декодированы,
    // а route.path может содержать encoded символы (хотя vue-router обычно декодирует)
    // Ключи в backlinks.json хранятся как полные URL: /vault/folder/note
    const currentPath = decodeURIComponent(route.path)

    // Пробуем найти прямое совпадение или с/без закрывающего слэша
    return backlinks.value[currentPath]
      || backlinks.value[currentPath.replace(/\/$/, '')]
      || []
  })

  return {
    navItems,
    vaultSettings,
    backlinks,
    activeItem,
    currentBacklinks,
    searchIndex,
    borderlessViewEnabled,
    coloredFoldersEnabled,
    showIconsEnabled,
    showOutlineEnabled,
  }
})

export type ContentViewerStore = ReturnType<typeof useContentViewerStore>
