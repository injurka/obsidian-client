enum ContentNavItemType {
  File = 'file',
  Directory = 'directory',
}

interface ContentNavItem {
  sysname: string
  title: string
  type: ContentNavItemType
  children?: ContentNavItem[]
}

interface VaultMetaSettings {
  scripts?: string[]
  styles?: string[]
  [key: string]: any
}

export { ContentNavItemType }
export type { ContentNavItem, VaultMetaSettings }
