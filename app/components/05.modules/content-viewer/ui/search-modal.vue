<script setup lang="ts">
import type { FuseResult } from 'fuse.js'
import type { SearchIndexItem } from '../models'
import { Icon } from '@iconify/vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import Fuse from 'fuse.js'
import { useContentViewerStore } from '../store'

const modelValue = defineModel<boolean>({ required: true })

const store = useContentViewerStore()
const query = ref('')
const results = ref<FuseResult<SearchIndexItem>[]>([])
const activeIndex = ref(0)
const modalRef = ref<HTMLElement | null>(null)

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'content', weight: 0.3 },
  ],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.4,
  ignoreLocation: true,
  findAllMatches: true,
}

let fuse: Fuse<SearchIndexItem> | null = null

watch(() => store.searchIndex, (newIndex) => {
  if (newIndex && newIndex.length > 0) {
    fuse = new Fuse(newIndex, fuseOptions)
  }
}, { immediate: true })

// --- Поиск ---
function performSearch() {
  if (!query.value || !fuse) {
    results.value = []
    return
  }
  results.value = fuse.search(query.value).slice(0, 20)
  activeIndex.value = 0
}

watch(query, performSearch)

// --- Навигация и закрытие ---
function close() {
  modelValue.value = false
  query.value = ''
}

function navigate(url: string) {
  navigateTo(url)
  close()
}

// Хоткеи внутри модалки
onKeyStroke('ArrowDown', (e) => {
  if (!modelValue.value)
    return
  e.preventDefault()
  if (activeIndex.value < results.value.length - 1)
    activeIndex.value++
})

onKeyStroke('ArrowUp', (e) => {
  if (!modelValue.value)
    return
  e.preventDefault()
  if (activeIndex.value > 0)
    activeIndex.value--
})

onKeyStroke('Enter', (e) => {
  if (!modelValue.value || results.value.length === 0)
    return
  e.preventDefault()

  const result = results.value[activeIndex.value]
  if (result) {
    navigate(result.item.url)
  }
})

onKeyStroke('Escape', () => close())

onClickOutside(modalRef, () => close())

watch(modelValue, async (val) => {
  if (val) {
    await nextTick()
    const inputEl = modalRef.value?.querySelector('input')
    inputEl?.focus()
  }
})

function getHighlightedSnippet(result: FuseResult<SearchIndexItem>): string {
  const contentMatch = result.matches?.find(m => m.key === 'content')

  if (!contentMatch || !contentMatch.value || !contentMatch.indices || contentMatch.indices.length === 0) {
    return `${result.item.content.slice(0, 100)}...`
  }

  const firstMatch = contentMatch.indices[0]
  const [start, end] = firstMatch!

  const text = contentMatch.value
  const snippetStart = Math.max(0, start - 40)
  const snippetEnd = Math.min(text.length, end + 60)

  let snippet = text.slice(snippetStart, snippetEnd)

  if (snippetStart > 0)
    snippet = `...${snippet}`
  if (snippetEnd < text.length)
    snippet = `${snippet}...`

  const matchedText = text.slice(start, end + 1)

  return snippet.split(matchedText).join(`<mark>${matchedText}</mark>`)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="modelValue" class="search-backdrop">
      <div ref="modalRef" class="search-modal">
        <div class="search-header">
          <Icon icon="mdi:magnify" class="search-icon" />
          <input
            v-model="query"
            type="text"
            class="search-input"
            placeholder="Поиск по заметкам..."
            autocomplete="off"
          >
          <div class="search-hint">
            ESC
          </div>
        </div>

        <div v-if="results.length > 0" class="search-results custom-scrollbar">
          <div
            v-for="(result, index) in results"
            :key="result.item.id"
            class="result-item"
            :class="{ 'is-active': index === activeIndex }"
            @click="navigate(result.item.url)"
            @mouseenter="activeIndex = index"
          >
            <div class="result-title">
              <Icon icon="mdi:file-document-outline" class="file-icon" />
              <span>{{ result.item.title }}</span>
            </div>
            <div
              class="result-snippet"
              v-html="getHighlightedSnippet(result)"
            />
          </div>
        </div>

        <div v-else-if="query" class="no-results">
          <Icon icon="mdi:file-search-outline" size="48" class="no-results-icon" />
          <p>Ничего не найдено</p>
        </div>

        <div v-else class="empty-state">
          <div class="empty-hint">
            <Icon icon="mdi:keyboard-return" />
            <span>для перехода</span>
          </div>
          <div class="empty-hint">
            <Icon icon="mdi:arrow-up-down" />
            <span>для навигации</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.search-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 15vh;
}

.search-modal {
  width: 100%;
  max-width: 600px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 70vh;
}

.search-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border-secondary-color);
  gap: 12px;
}

.search-icon {
  font-size: 1.5rem;
  color: var(--fg-muted-color);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  color: var(--fg-primary-color);
  outline: none;

  &::placeholder {
    color: var(--fg-muted-color);
    opacity: 0.7;
  }
}

.search-hint {
  font-size: 0.75rem;
  color: var(--fg-muted-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 4px;
  padding: 2px 6px;
  font-weight: 600;
}

.search-results {
  overflow-y: auto;
  padding: 8px;
}

.result-item {
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s;
  border: 1px solid transparent;

  &.is-active {
    background-color: var(--bg-hover-color);
    border-color: var(--border-primary-color);

    .file-icon {
      color: var(--fg-accent-color);
    }
  }
}

.result-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--fg-primary-color);
  margin-bottom: 4px;
  font-size: 0.95rem;

  .file-icon {
    color: var(--fg-muted-color);
  }
}

.result-snippet {
  font-size: 0.85rem;
  color: var(--fg-secondary-color);
  margin-left: 24px;
  line-height: 1.4;

  :deep(mark) {
    background-color: rgba(var(--fg-accent-color-rgb), 0.2);
    color: var(--fg-accent-color);
    border-radius: 2px;
    padding: 0 2px;
    font-weight: 600;
  }
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: var(--fg-muted-color);
  gap: 12px;

  .no-results-icon {
    opacity: 0.5;
  }
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  gap: 16px;
  background-color: var(--bg-tertiary-color);
  border-top: 1px solid var(--border-secondary-color);
}

.empty-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--fg-muted-color);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
  .search-modal {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  .search-modal {
    transform: scale(0.95) translateY(-10px);
  }
}
</style>
