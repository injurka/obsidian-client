== Project Prompt ==
Generated: 2026-01-21T20:09:36.785Z
Source Directory: /home/evai/my/obsidian-client/app
Included Files: 56
Total Size: 92.03 KB
Format: structured
====================

=== Project File Structure ===
├── assets
│   └── scss
│       ├── mixins
│       │   ├── _fonts.scss
│       │   ├── _media.scss
│       │   └── _theme.scss
│       ├── themes
│       │   ├── dark
│       │   │   ├── _maps.scss
│       │   │   ├── _variables.scss
│       │   │   └── theme.scss
│       │   ├── light
│       │   │   ├── _maps.scss
│       │   │   ├── _variables.scss
│       │   │   └── theme.scss
│       │   └── _theme.scss
│       ├── _css-variables.scss
│       ├── _functions.scss
│       ├── _setup.scss
│       ├── _variables.scss
│       ├── atomic.scss
│       ├── global.scss
│       └── normalize.scss
├── components
│   ├── 01.kit
│   │   ├── kit-btn
│   │   │   └── ui
│   │   │       └── kit-btn.vue
│   │   ├── kit-checkbox
│   │   │   └── ui
│   │   │       └── kit-checkbox.vue
│   │   ├── kit-dropdown
│   │   │   └── ui
│   │   │       └── kit-dropdown.vue
│   │   ├── kit-input
│   │   │   └── ui
│   │   │       └── kit-input.vue
│   │   └── index.ts
│   ├── modules
│   │   └── content-viewer
│   │       ├── models
│   │       │   └── index.ts
│   │       ├── store
│   │       │   ├── content-viewer.store.ts
│   │       │   └── index.ts
│   │       ├── ui
│   │       │   ├── content-footer.vue
│   │       │   ├── content-header.vue
│   │       │   ├── content-viewer.vue
│   │       │   ├── index.ts
│   │       │   ├── navigation-sidebar.vue
│   │       │   └── navigation-tree.vue
│   │       └── index.ts
│   └── shared
│       ├── install-prompt-banner
│       │   ├── ui
│       │   │   ├── index.ts
│       │   │   └── install-prompt-banner.vue
│       │   └── index.ts
│       ├── markdown-content
│       │   ├── lib
│       │   │   ├── create-markdown-renderer.ts
│       │   │   ├── index.ts
│       │   │   ├── markdownIt-wiki-images.ts
│       │   │   └── markdownIt-wiki-links.ts
│       │   ├── ui
│       │   │   ├── index.ts
│       │   │   └── markdown-content.vue
│       │   └── index.ts
│       └── page-loader
│           ├── ui
│           │   ├── index.ts
│           │   └── page-loader.vue
│           └── index.ts
├── layouts
│   ├── default.vue
│   └── nav-content.vue
├── pages
│   ├── [vault]
│   │   ├── [...pwd].vue
│   │   └── index.vue
│   └── index.vue
├── service-worker
│   ├── sw.ts
│   └── tsconfig.json
├── shared
│   ├── composables
│   │   └── change-theme.ts
│   └── directives
│       └── ripple.ts
├── app.config.ts
└── app.vue
============================

=== File List ===
- app.config.ts (1.73 KB)
- app.vue (1.05 KB)
- assets/scss/_css-variables.scss (0.99 KB)
- assets/scss/_functions.scss (0.17 KB)
- assets/scss/_setup.scss (0.21 KB)
- assets/scss/_variables.scss (0.13 KB)
- assets/scss/atomic.scss (2.71 KB)
- assets/scss/global.scss (0.64 KB)
- assets/scss/mixins/_fonts.scss (1.76 KB)
- assets/scss/mixins/_media.scss (0.49 KB)
- assets/scss/mixins/_theme.scss (0.18 KB)
- assets/scss/normalize.scss (2.37 KB)
- assets/scss/themes/_theme.scss (0.13 KB)
- assets/scss/themes/dark/_maps.scss (2.19 KB)
- assets/scss/themes/dark/_variables.scss (1.36 KB)
- assets/scss/themes/dark/theme.scss (0.05 KB)
- assets/scss/themes/light/_maps.scss (2.19 KB)
- assets/scss/themes/light/_variables.scss (1.36 KB)
- assets/scss/themes/light/theme.scss (0.05 KB)
- components/01.kit/index.ts (0.28 KB)
- components/01.kit/kit-btn/ui/kit-btn.vue (3.75 KB)
- components/01.kit/kit-checkbox/ui/kit-checkbox.vue (1.17 KB)
- components/01.kit/kit-dropdown/ui/kit-dropdown.vue (4.96 KB)
- components/01.kit/kit-input/ui/kit-input.vue (1.28 KB)
- components/modules/content-viewer/index.ts (0.07 KB)
- components/modules/content-viewer/models/index.ts (0.25 KB)
- components/modules/content-viewer/store/content-viewer.store.ts (0.92 KB)
- components/modules/content-viewer/store/index.ts (0.04 KB)
- components/modules/content-viewer/ui/content-footer.vue (2.53 KB)
- components/modules/content-viewer/ui/content-header.vue (5.39 KB)
- components/modules/content-viewer/ui/content-viewer.vue (0.62 KB)
- components/modules/content-viewer/ui/index.ts (0.32 KB)
- components/modules/content-viewer/ui/navigation-sidebar.vue (6.07 KB)
- components/modules/content-viewer/ui/navigation-tree.vue (6.15 KB)
- components/shared/install-prompt-banner/index.ts (0.02 KB)
- components/shared/install-prompt-banner/ui/index.ts (0.09 KB)
- components/shared/install-prompt-banner/ui/install-prompt-banner.vue (2.20 KB)
- components/shared/markdown-content/index.ts (0.02 KB)
- components/shared/markdown-content/lib/create-markdown-renderer.ts (2.10 KB)
- components/shared/markdown-content/lib/index.ts (0.04 KB)
- components/shared/markdown-content/lib/markdownIt-wiki-images.ts (1.17 KB)
- components/shared/markdown-content/lib/markdownIt-wiki-links.ts (0.41 KB)
- components/shared/markdown-content/ui/index.ts (0.08 KB)
- components/shared/markdown-content/ui/markdown-content.vue (11.89 KB)
- components/shared/page-loader/index.ts (0.02 KB)
- components/shared/page-loader/ui/index.ts (0.06 KB)
- components/shared/page-loader/ui/page-loader.vue (0.51 KB)
- layouts/default.vue (4.79 KB)
- layouts/nav-content.vue (2.00 KB)
- pages/[vault]/[...pwd].vue (1.88 KB)
- pages/[vault]/index.vue (0.40 KB)
- pages/index.vue (2.68 KB)
- service-worker/sw.ts (5.57 KB)
- service-worker/tsconfig.json (0.22 KB)
- shared/composables/change-theme.ts (0.74 KB)
- shared/directives/ripple.ts (1.54 KB)
=================

=== File Contents ===

--- File: app.config.ts ---

export default defineAppConfig({
  titleTemplate: 'WanderingMark',
  name: 'WanderingMark',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut_icon', href: '/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.png' },
  ],
  meta: [
    { name: 'viewport', content: 'viewport-fit=cover, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'title', content: 'chinisik' },
    { name: 'description', content: 'chinisik' },
    { property: 'og:title', content: 'WanderingMark' },
    { property: 'og:description', content: 'Место для возносения до уровня ТанСана! Познай мир чтобы уверено сказать - нихао ни женгуо рен ма!' },
    { property: 'twitter:title', content: 'WanderingMark' },
    { property: 'twitter:description', content: 'Место для возносения до уровня ТанСана! Познай мир чтобы уверено сказать - нихао ни женгуо рен ма!' },
    { property: 'twitter:image', content: 'https://obsidian-client-opal.vercel.app/=/open-graph.png' },
    { property: 'og:url', content: 'https://obsidian-client-opal.vercel.app/=' },
    { property: 'og:image', content: 'https://obsidian-client-opal.vercel.app/=/open-graph.png' },
    { property: 'og:image:width', content: '400' },
    { property: 'og:image:height', content: '400' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'og:locale', content: 'ru_RU' },
    { name: 'twitter:locale', content: 'ru' },
  ],
})

--- File: app.vue ---

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

--- File: assets/scss/_css-variables.scss ---

@use 'mixins/theme' as mixins-theme;
@use 'themes/theme' as themes-theme;
@use 'sass:map';
@use 'sass:color';
@use 'sass:meta';

@include mixins-theme.connectThemes(themes-theme.$themes, 'theme') using ($theme, $themeName) {
  @each $colorType, $colorValue in map.get($theme, 'colors') {
    --#{$colorType}-color: #{$colorValue};

    @if meta.type-of($colorValue) == color {
      --#{$colorType}-color-rgb:
        #{color.channel($colorValue, 'red')}, #{color.channel($colorValue, 'green')},
        #{color.channel($colorValue, 'blue')};
    }
  }

  @if map.has-key($theme, 'paddings') {
    @each $paddingType, $padding in map.get($theme, 'paddings') {
      --p-#{$paddingType}: #{$padding};
    }
  }

  @if map.has-key($theme, 'radius') {
    @each $radiusType, $radius in map.get($theme, 'radius') {
      --r-#{$radiusType}: #{$radius};
    }
  }

  @if map.has-key($theme, 'shadows') {
    @each $shadowType, $shadow in map.get($theme, 'shadows') {
      --s-#{$shadowType}: #{$shadow};
    }
  }
}

--- File: assets/scss/_functions.scss ---

@use 'sass:map';

@function map-collect($maps...) {
  $collection: ();

  @each $map in $maps {
    $collection: map.merge($collection, $map);
  }
  @return $collection;
}

--- File: assets/scss/_setup.scss ---

@forward '_variables.scss';
@forward '_functions.scss';
@forward 'themes/_theme.scss';
@forward 'mixins/_media.scss';
@forward 'mixins/_fonts.scss';
@forward 'mixins/_theme.scss';
@forward '_css-variables.scss';

--- File: assets/scss/_variables.scss ---

$font-size-small: 15px !default;
$font-size-base: 17px !default;
$font-size-large: 19px !default;

$header-height: 46px !default;

--- File: assets/scss/atomic.scss ---

/* UI Elements Replacements */

// Button
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 36px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s,
    opacity 0.2s;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  text-decoration: none;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--icon {
    padding: 0;
    width: 36px;
    border-radius: 50%;
  }

  &--primary {
    background-color: var(--fg-accent-color);
    color: var(--bg-primary-color);
  }

  &--tonal {
    background-color: var(--bg-tertiary-color);
    color: var(--fg-primary-color);
  }

  &--text {
    background: transparent;
    &:hover {
      background-color: var(--bg-hover-color);
    }
  }

  &--compact {
    height: 28px;
    font-size: 0.8rem;
    padding: 0 8px;
    &.btn--icon {
      width: 28px;
    }
  }
}

// Input
.input-field {
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: var(--bg-secondary-color);
  color: var(--fg-primary-color);
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--border-focus-color);
  }
}

// Checkbox
.checkbox-field {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  padding: 4px 0;

  input[type='checkbox'] {
    accent-color: var(--fg-accent-color);
    width: 16px;
    height: 16px;
  }
}

// Dropdown Menu Container
.dropdown-menu {
  position: relative;
  display: inline-block;

  &__content {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    min-width: 200px;
    z-index: 100;
    padding: 8px 0;
  }
}

// List
.list {
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    padding: 8px 16px;
    &:hover {
      background-color: var(--bg-hover-color);
    }
  }
}

// Divider
.divider-text {
  display: flex;
  align-items: center;
  margin: 16px 0 8px;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-secondary-color);
  }

  span {
    padding: 0 10px;
    color: var(--fg-secondary-color);
    font-size: 0.9rem;
    font-weight: 500;
  }
}

// Alert
.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--border-primary-color);
  background-color: var(--bg-tertiary-color);

  &__title {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
}

--- File: assets/scss/global.scss ---

@use 'sass:map';

:root {
  font-family: 'Rubik', 'Noto Sans SC', sans-serif;
}

html {
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
  font-size: 17px;

  @include mobile {
    font-size: 15px;
  }
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

// Scrollbars
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--bg-tertiary-color);
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

--- File: assets/scss/mixins/_fonts.scss ---

/* =========================================
   Подключение шрифта Maple Mono CN
   Путь: /fonts/MapleMono-CN/...
   ========================================= */

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Maple Mono CN';
  src: url('/fonts/MapleMono-CN/MapleMono-CN-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@mixin font-chinese-mono {
  font-family: 'Maple Mono CN', 'Courier New', Courier, monospace;
}

--- File: assets/scss/mixins/_media.scss ---

$tablet-width: 768px;
$desktop-width: 1024px;

@mixin desktop {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}

@mixin before-desktop {
  @media (max-width: #{$desktop-width - 1}) {
    @content;
  }
}

@mixin tablet {
  @media (max-width: #{$desktop-width - 1}) and (min-width: #{$tablet-width}) {
    @content;
  }
}

@mixin after-mobile {
  @media (min-width: #{$tablet-width}) {
    @content;
  }
}

@mixin mobile {
  @media (max-width: #{$tablet-width - 1}) {
    @content;
  }
}

--- File: assets/scss/mixins/_theme.scss ---

@mixin connectThemes($themes, $data-name) {
  @each $themeName, $theme in $themes {
    html[data-#{$data-name}='#{$themeName}'] {
      @content ($theme, $themeName);
    }
  }
}

--- File: assets/scss/normalize.scss ---

button {
  font-family: inherit;
  color: inherit;
  font-size: 100%;
  margin: 0;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;
  overflow: visible;
  text-transform: none;
}

h2 {
  margin: 14px 0 8px 0;
}

ul {
  padding: 6px 16px;
  padding-top: 12px;
}

ol {
  margin-left: 20px;
}

p {
  padding: 2px 0;
}

#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nuxt-loading-indicator {
  background: linear-gradient(62deg, var(--fg-muted-color) 0%, var(fg-accent-color) 100%) !important;
}

.v-tooltip > .v-overlay__content {
  background: var(--bg-tertiary-color) !important;
  border: 1px solid var(--border-primary-color);
  color: var(--fg-primary-color) !important;
}

.v-navigation-drawer {
  border-right: 1px solid var(--bg-secondary-color);
  border-color: var(--bg-secondary-color) !important;
}

::-webkit-scrollbar {
  width: 4px;
  height: 100%;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-background-content);
  box-shadow: inset 0 0 5px var(--color-background-content);
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-moz-selection {
  background: var(--bg-accent-overlay-color);
}

::selection {
  background: var(--bg-accent-overlay-color);
}

.v-navigation-drawer__scrim {
  position: fixed !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.smooth-appear {
  &-enter-active {
    transition: opacity 0.3s ease;
  }
  &-leave-active {
    transition: opacity 0s ease;
  }
  &-enter-from {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}

hr {
  margin: 16px 0;
  width: 100%;
  border: 1px solid var(--border-secondary-color);
}
.v-menu {
  > div > div {
    background: var(--bg-secondary-color) !important;
    color: var(--fg-primary-color) !important;
  }
}

.divider-text {
  display: flex;
  align-items: center;
  margin: 16px 0 8px;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-secondary-color);
  }

  span {
    padding: 0 10px;
    color: var(--fg-secondary-color);
    font-size: 0.9rem;
    font-weight: 500;
  }
}
.dialog {
  .v-overlay__content {
    margin: 14px !important;
    width: calc(100% - 24px) !important;
    max-width: calc(100% - 24px) !important;
  }
}

--- File: assets/scss/themes/_theme.scss ---

@use './light/theme.scss' as light;
@use './dark/theme.scss' as dark;

$themes: (
  light: light.$theme,
  dark: dark.$theme,
);

--- File: assets/scss/themes/dark/_maps.scss ---

@use '_variables.scss';
@use '../../_functions.scss';

// BG
$bg-colors: (
  bg-primary: variables.$bg-primary-color,
  bg-secondary: variables.$bg-secondary-color,
  bg-tertiary: variables.$bg-tertiary-color,
  bg-header: variables.$bg-header-color,
  bg-disabled: variables.$bg-disabled-color,
  bg-inverted: variables.$bg-inverted-color,
  bg-accent-overlay: variables.$bg-accent-overlay-color,
  bg-accent: variables.$bg-accent-color,
  bg-pressed: variables.$bg-pressed-color,
  bg-overlay-primary: variables.$bg-overlay-primary-color,
  bg-overlay-secondary: variables.$bg-overlay-secondary-color,
  bg-action-hover: variables.$bg-action-hover-color,
  bg-hover: variables.$bg-hover-color,
  bg-focus: variables.$bg-focus-color,
  bg-highlight: variables.$bg-highlight-color,
  bg-success: variables.$bg-success-color,
  bg-error: variables.$bg-error-color,
  bg-warning: variables.$bg-warning-color,
  bg-info: variables.$bg-info-color,
);

// Border
$border-colors: (
  border-primary: variables.$border-primary-color,
  border-secondary: variables.$border-secondary-color,
  border-accent: variables.$border-accent-color,
  border-disabled: variables.$border-disabled-color,
  border-button-secondary: variables.$border-button-secondary-color,
  border-focus: variables.$border-focus-color,
  border-pressed: variables.$border-pressed-color,
  border-success: variables.$border-success-color,
  border-error: variables.$border-error-color,
  border-warning: variables.$border-warning-color,
  border-info: variables.$border-info-color,
);

// FG
$fg-colors: (
  fg-primary: variables.$fg-primary-color,
  fg-secondary: variables.$fg-secondary-color,
  fg-tertiary: variables.$fg-tertiary-color,
  fg-muted: variables.$fg-muted-color,
  fg-accent: variables.$fg-accent-color,
  fg-action: variables.$fg-action-color,
  fg-inverted: variables.$fg-inverted-color,
  fg-disabled: variables.$fg-disabled-color,
  fg-pressed: variables.$fg-pressed-color,
  fg-highlight: variables.$fg-highlight-color,
  fg-success: variables.$fg-success-color,
  fg-error: variables.$fg-error-color,
  fg-warning: variables.$fg-warning-color,
  fg-info: variables.$fg-info-color,
);

$colors: functions.map-collect($bg-colors, $border-colors, $fg-colors);

--- File: assets/scss/themes/dark/_variables.scss ---

// BG
$bg-primary-color: #0d1117;
$bg-secondary-color: #161b22;
$bg-tertiary-color: #21262d;
$bg-header-color: 22, 27, 34;
$bg-disabled-color: #161b22;
$bg-inverted-color: #c9d1d9;
$bg-accent-overlay-color: #c975de33;
$bg-accent-color: #30213d;
$bg-pressed-color: #c9d1d90d;
$bg-overlay-primary-color: #8b949e36;
$bg-overlay-secondary-color: #586069dc;
$bg-action-hover-color: #db90f5;
$bg-hover-color: #21262d;
$bg-focus-color: #30213d;
$bg-highlight-color: #3e3420;

// BG STATUS
$bg-success-color: #1c3421;
$bg-error-color: #412224;
$bg-warning-color: #3e3420;
$bg-info-color: #223b4e;

// FG
$fg-primary-color: #c9d1d9;
$fg-secondary-color: #8b949e;
$fg-tertiary-color: #586069;
$fg-muted-color: #c9d1d966;
$fg-accent-color: #c975de;
$fg-action-color: #c975de;
$fg-inverted-color: #0d1117;
$fg-disabled-color: #c9d1d94d;
$fg-pressed-color: #c9d1d9;
$fg-highlight-color: #e3b341;

// FG STATUS
$fg-success-color: #56d364;
$fg-error-color: #f85149;
$fg-warning-color: #e3b341;
$fg-info-color: #76e3ea;

// Border
$border-primary-color: #30363d;
$border-secondary-color: #21262d;
$border-accent-color: #db90f5;
$border-disabled-color: #21262d;
$border-button-secondary-color: #32253e;
$border-focus-color: #c975de;
$border-pressed-color: #c975de;

// BORDER STATUS
$border-success-color: #56d364;
$border-error-color: #f85149;
$border-warning-color: #e3b341;
$border-info-color: #76e3ea;

--- File: assets/scss/themes/dark/theme.scss ---

@use 'maps.scss';

$theme: (
  colors: maps.$colors,
);

--- File: assets/scss/themes/light/_maps.scss ---

@use '_variables.scss';
@use '../../_functions.scss';

// BG
$bg-colors: (
  bg-primary: variables.$bg-primary-color,
  bg-secondary: variables.$bg-secondary-color,
  bg-tertiary: variables.$bg-tertiary-color,
  bg-header: variables.$bg-header-color,
  bg-disabled: variables.$bg-disabled-color,
  bg-inverted: variables.$bg-inverted-color,
  bg-accent-overlay: variables.$bg-accent-overlay-color,
  bg-accent: variables.$bg-accent-color,
  bg-pressed: variables.$bg-pressed-color,
  bg-overlay-primary: variables.$bg-overlay-primary-color,
  bg-overlay-secondary: variables.$bg-overlay-secondary-color,
  bg-action-hover: variables.$bg-action-hover-color,
  bg-hover: variables.$bg-hover-color,
  bg-focus: variables.$bg-focus-color,
  bg-highlight: variables.$bg-highlight-color,
  bg-success: variables.$bg-success-color,
  bg-error: variables.$bg-error-color,
  bg-warning: variables.$bg-warning-color,
  bg-info: variables.$bg-info-color,
);

// Border
$border-colors: (
  border-primary: variables.$border-primary-color,
  border-secondary: variables.$border-secondary-color,
  border-accent: variables.$border-accent-color,
  border-disabled: variables.$border-disabled-color,
  border-button-secondary: variables.$border-button-secondary-color,
  border-focus: variables.$border-focus-color,
  border-pressed: variables.$border-pressed-color,
  border-success: variables.$border-success-color,
  border-error: variables.$border-error-color,
  border-warning: variables.$border-warning-color,
  border-info: variables.$border-info-color,
);

// FG
$fg-colors: (
  fg-primary: variables.$fg-primary-color,
  fg-secondary: variables.$fg-secondary-color,
  fg-tertiary: variables.$fg-tertiary-color,
  fg-muted: variables.$fg-muted-color,
  fg-accent: variables.$fg-accent-color,
  fg-action: variables.$fg-action-color,
  fg-inverted: variables.$fg-inverted-color,
  fg-disabled: variables.$fg-disabled-color,
  fg-pressed: variables.$fg-pressed-color,
  fg-highlight: variables.$fg-highlight-color,
  fg-success: variables.$fg-success-color,
  fg-error: variables.$fg-error-color,
  fg-warning: variables.$fg-warning-color,
  fg-info: variables.$fg-info-color,
);

$colors: functions.map-collect($bg-colors, $border-colors, $fg-colors);

--- File: assets/scss/themes/light/_variables.scss ---

// BG
$bg-primary-color: #faf4f2;
$bg-secondary-color: #f2edeb;
$bg-tertiary-color: #e0dad9;
$bg-header-color: 242, 237, 235;
$bg-disabled-color: #f2edeb;
$bg-inverted-color: #29242a;
$bg-accent-overlay-color: #e160324d;
$bg-accent-color: #fce9e4;
$bg-pressed-color: #29242a0d;
$bg-overlay-primary-color: #706b6e36;
$bg-overlay-secondary-color: #a59fa0dc;
$bg-action-hover-color: #f37a51;
$bg-hover-color: #ede7e5bf;
$bg-focus-color: #fce9e4;
$bg-highlight-color: #fdf5d7;

// BG STATUS
$bg-success-color: #d4e6d6;
$bg-error-color: #f3d9e0;
$bg-warning-color: #fce9e4;
$bg-info-color: #fdecd7;

// FG
$fg-primary-color: #29242a;
$fg-secondary-color: #706b6e;
$fg-tertiary-color: #a59fa0;
$fg-muted-color: #29242a66;
$fg-accent-color: #e16032;
$fg-action-color: #e16032;
$fg-inverted-color: #faf4f2;
$fg-disabled-color: #29242a4d;
$fg-pressed-color: #29242a;
$fg-highlight-color: #d99f47;

// FG STATUS
$fg-success-color: #269d69;
$fg-error-color: #e14775;
$fg-warning-color: #e16032;
$fg-info-color: #cc7a0a;

// Border
$border-primary-color: #d2cdcb;
$border-secondary-color: #e0dad9;
$border-accent-color: #f37a51;
$border-disabled-color: #e0dad9;
$border-button-secondary-color: #f5d6cb;
$border-focus-color: #e16032;
$border-pressed-color: #e16032;

// BORDER STATUS
$border-success-color: #5bbd8b;
$border-error-color: #e87899;
$border-warning-color: #f37a51;
$border-info-color: #d99f47;

--- File: assets/scss/themes/light/theme.scss ---

@use 'maps.scss';

$theme: (
  colors: maps.$colors,
);

--- File: components/01.kit/index.ts ---

import KitBtn from './kit-btn/ui/kit-btn.vue'
import KitCheckbox from './kit-checkbox/ui/kit-checkbox.vue'
import KitDropdown from './kit-dropdown/ui/kit-dropdown.vue'
import KitInput from './kit-input/ui/kit-input.vue'

export {
  KitBtn,
  KitCheckbox,
  KitDropdown,
  KitInput,
}

--- File: components/01.kit/kit-btn/ui/kit-btn.vue ---

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { vRipple } from '~/shared/directives/ripple'

interface Props {
  icon?: string
  prependIcon?: string
  appendIcon?: string
  variant?: 'solid' | 'outlined' | 'text' | 'subtle' | 'tonal'
  color?: 'primary' | 'secondary' | 'accent'
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  density?: 'default' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'primary',
  disabled: false,
  size: 'md',
  density: 'default',
})

const slots = useSlots()

const isIconOnly = computed(() => (props.icon || props.prependIcon) && !slots.default && !props.appendIcon)
const finalIcon = computed(() => props.icon || props.prependIcon)

const componentClasses = computed(() => [
  'kit-btn',
  `kit-btn--${props.variant}`,
  `kit-btn--color-${props.color}`,
  `kit-btn--size-${props.size}`,
  `kit-btn--density-${props.density}`,
  { 'kit-btn--icon-only': isIconOnly.value },
])
</script>

<template>
  <button
    v-ripple
    :class="componentClasses"
    :disabled="props.disabled"
    type="button"
  >
    <span class="kit-btn-content">
      <Icon v-if="finalIcon" :icon="finalIcon" class="kit-btn-icon" :class="{ 'mr-2': !isIconOnly && slots.default }" />
      <slot />
      <Icon v-if="props.appendIcon" :icon="props.appendIcon" class="kit-btn-icon ml-2" />
    </span>
  </button>
</template>

<style lang="scss">
.kit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: var(--s-s);
  white-space: nowrap;

  & * {
    pointer-events: none;
  }

  &:not(.kit-btn--text):not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: var(--s-l);
  }

  &:not(.kit-btn--text):not(:disabled):active {
    transform: translateY(0px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
    background-color: var(--bg-disabled-color) !important;
    color: var(--fg-disabled-color) !important;
  }

  &--density-compact {
    height: 28px !important;
    padding: 0 8px;
    font-size: 0.8rem;

    &.kit-btn--icon-only {
      width: 28px;
      padding: 0;
    }
  }

  &--size-md {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 6px;
    height: 38px;
    &.kit-btn--icon-only {
      padding: 0;
      width: 38px;
    }
  }

  &--solid {
    &.kit-btn--color-primary {
      background-color: var(--fg-accent-color);
      border-color: var(--fg-accent-color);
      color: var(--fg-inverted-color);
      &:hover {
        background-color: var(--fg-action-color);
      }
    }
  }

  &--tonal {
    border: none;
    &.kit-btn--color-primary,
    &.kit-btn--color-secondary {
      background-color: var(--bg-tertiary-color);
      color: var(--fg-primary-color);
      &:hover {
        background-color: var(--bg-hover-color);
      }
    }
  }

  &--outlined {
    background-color: transparent;
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    box-shadow: none;
    &:hover {
      border-color: var(--fg-accent-color);
      color: var(--fg-accent-color);
    }
  }

  &--text {
    background-color: transparent;
    box-shadow: none;
    border-color: transparent;
    color: var(--fg-primary-color);

    &.kit-btn--color-accent {
      color: var(--fg-accent-color);
    }
    &:hover {
      background-color: var(--bg-hover-color);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .mr-2 {
    margin-right: 0.5rem;
  }
  .ml-2 {
    margin-left: 0.5rem;
  }
}
</style>

--- File: components/01.kit/kit-checkbox/ui/kit-checkbox.vue ---

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  modelValue: boolean
  label?: string
}>()

const emit = defineEmits(['update:modelValue'])

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="kit-checkbox" @click="toggle">
    <div class="checkbox-box" :class="{ checked: modelValue }">
      <Icon v-if="modelValue" icon="mdi:check" size="14" style="color: white;" />
    </div>
    <span v-if="label" class="checkbox-label">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.kit-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 4px 0;

  &:hover .checkbox-box {
    border-color: var(--fg-accent-color);
  }
}

.checkbox-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--fg-secondary-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: all 0.2s;

  &.checked {
    background-color: var(--fg-accent-color);
    border-color: var(--fg-accent-color);
  }
}

.checkbox-label {
  font-size: 0.9rem;
  color: var(--fg-primary-color);
}
</style>

--- File: components/01.kit/kit-dropdown/ui/kit-dropdown.vue ---

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'

interface Props {
  modelValue?: boolean // Поддержка v-model для внешнего контроля
  placement?: 'left' | 'right' | 'center' // Выравнивание
  width?: string | number // Ширина выпадающего меню
  closeOnContentClick?: boolean // Закрывать ли при выборе пункта
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  placement: 'right',
  width: '220px',
  closeOnContentClick: true,
})

const emit = defineEmits(['update:modelValue'])

// Внутреннее состояние, если v-model не используется
const internalOpen = ref(false)

const isOpen = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalOpen.value,
  set: (val) => {
    internalOpen.value = val
    emit('update:modelValue', val)
  },
})

const containerRef = ref<HTMLElement | null>(null)

// Закрытие при клике снаружи
onClickOutside(containerRef, () => {
  isOpen.value = false
})

// Закрытие по Escape
onKeyStroke('Escape', (e) => {
  if (isOpen.value) {
    e.preventDefault()
    isOpen.value = false
  }
})

function toggle() {
  isOpen.value = !isOpen.value
}

function handleContentClick() {
  if (props.closeOnContentClick) {
    isOpen.value = false
  }
}

// Вычисляем стили для позиционирования
const contentStyle = computed(() => {
  const styles: Record<string, string> = {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  }

  if (props.placement === 'right') {
    styles.right = '0'
  }
  else if (props.placement === 'left') {
    styles.left = '0'
  }
  else if (props.placement === 'center') {
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  }

  return styles
})

defineExpose({ close: () => isOpen.value = false, open: () => isOpen.value = true })
</script>

<template>
  <div ref="containerRef" class="kit-dropdown">
    <!-- Триггер -->
    <div
      class="dropdown-trigger"
      :class="{ 'is-active': isOpen }"
      @click="toggle"
    >
      <slot name="activator" :props="{ isOpen, toggle }" />
    </div>

    <!-- Меню -->
    <Transition name="dropdown-zoom">
      <div
        v-if="isOpen"
        class="dropdown-menu"
        :class="[`placement-${placement}`]"
        :style="contentStyle"
        @click="handleContentClick"
      >
        <div class="dropdown-menu-inner">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.kit-dropdown {
  position: relative;
  display: inline-flex; // Важно, чтобы не растягивался на всю ширину
}

.dropdown-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  // Легкая подсветка при открытии, если внутри иконка
  &.is-active {
    opacity: 0.7;
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  margin-top: 8px;
  z-index: 1000;
  // Центрирование требует особого transform в анимации,
  // поэтому transform задается через JS для центра, либо тут для краев
}

.dropdown-menu-inner {
  background-color: rgba(var(--bg-tertiary-color-rgb, 33, 38, 45), 0.85); // Fallback color if var missing
  backdrop-filter: blur(16px) saturate(180%); // Эффект матового стекла
  border: 1px solid rgba(var(--border-primary-color-rgb, 48, 54, 61), 0.4);
  border-radius: 12px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  color: var(--fg-primary-color);

  // Стилизация скролла внутри дропдауна, если контента много
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-secondary-color);
    border-radius: 4px;
  }
}

/* --- Animations --- */
// Красивая анимация появления (зум + фейд + легкий сдвиг)
.dropdown-zoom-enter-active,
.dropdown-zoom-leave-active {
  transition:
    opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top center;
}

.dropdown-zoom-enter-from,
.dropdown-zoom-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-5px);
}

.dropdown-zoom-enter-to,
.dropdown-zoom-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

// Корректировка transform-origin в зависимости от позиции
.placement-left .dropdown-zoom-enter-active {
  transform-origin: top left;
}
.placement-right .dropdown-zoom-enter-active {
  transform-origin: top right;
}
</style>

--- File: components/01.kit/kit-input/ui/kit-input.vue ---

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  rounded?: boolean
  variant?: 'default' | 'solo'
}
withDefaults(defineProps<Props>(), {
  placeholder: '',
  variant: 'default',
})
const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="kit-input-wrapper" :class="{ 'is-rounded': rounded, 'is-solo': variant === 'solo' }">
    <input
      :value="modelValue"
      type="text"
      class="kit-input"
      :placeholder="placeholder"
      @input="onInput"
    >
  </div>
</template>

<style lang="scss" scoped>
.kit-input-wrapper {
  position: relative;
  width: 100%;

  &.is-rounded .kit-input {
    border-radius: 20px;
  }

  &.is-solo .kit-input {
    background-color: var(--bg-secondary-color);
    border: none;
    box-shadow: none;
  }
}

.kit-input {
  width: 100%;
  padding: 8px 12px;
  font-size: 0.9rem;
  background-color: var(--bg-primary-color);
  color: var(--fg-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--fg-muted-color);
  }

  &:focus {
    border-color: var(--fg-accent-color);
  }
}
</style>

--- File: components/modules/content-viewer/index.ts ---

export * from './models'
export * from './store'
export * from './ui'

--- File: components/modules/content-viewer/models/index.ts ---

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

export { ContentNavItemType }
export type { ContentNavItem }

--- File: components/modules/content-viewer/store/content-viewer.store.ts ---

import type { ContentNavItem } from '~/components/modules/content-viewer/models'
import { useCookie } from '#app'
import { defineStore } from 'pinia'

const COOKIE_BORDERLESS_VIEW = 'ui_borderlessViewEnabled'
const COOKIE_COLORED_FOLDERS = 'ui_coloredFoldersEnabled'
const COOKIE_SHOW_ICONS = 'ui_showIconsEnabled'

export const useContentViewerStore = defineStore('contentViewer', () => {
  const navItems = ref<ContentNavItem[] | null>(null)

  const borderlessViewEnabled = useCookie<boolean>(COOKIE_BORDERLESS_VIEW, {
    default: () => true,
  })

  const coloredFoldersEnabled = useCookie<boolean>(COOKIE_COLORED_FOLDERS, {
    default: () => false,
  })

  const showIconsEnabled = useCookie<boolean>(COOKIE_SHOW_ICONS, {
    default: () => true,
  })

  return {
    navItems,
    borderlessViewEnabled,
    coloredFoldersEnabled,
    showIconsEnabled,
  }
})

export type ContentViewerStore = ReturnType<typeof useContentViewerStore>

--- File: components/modules/content-viewer/store/index.ts ---

export * from './content-viewer.store'

--- File: components/modules/content-viewer/ui/content-footer.vue ---

<script lang="ts" setup>
import type { ContentNavItem } from '~/components/modules/content-viewer'
import { KitBtn } from '~/components/01.kit'
import { ContentNavItemType } from '~/components/modules/content-viewer'

interface Props {
  items: ContentNavItem[] | null
  vault: string
  currentItemPath: string
}

const props = defineProps<Props>()

function flattenNavItems(items: ContentNavItem[] | undefined, currentPathSegments: string[] = []): Array<ContentNavItem & { path: string }> {
  if (!items)
    return []
  let flatList: Array<ContentNavItem & { path: string }> = []

  items.forEach((item) => {
    const newItemPathSegments = [...currentPathSegments, item.sysname]
    const itemPath = newItemPathSegments.join('/')

    if (item.type === ContentNavItemType.File) {
      flatList.push({ ...item, path: itemPath })
    }
    else if (item.type === ContentNavItemType.Directory && item.children) {
      flatList = flatList.concat(flattenNavItems(item.children, newItemPathSegments))
    }
  })
  return flatList
}

const navigableItems = computed(() => flattenNavItems(props.items || []))

const currentIndex = computed(() => {
  return navigableItems.value.findIndex(item => item.path === props.currentItemPath || item.path === 'index')
})

const previousItem = computed(() => currentIndex.value > 0 ? navigableItems.value[currentIndex.value - 1] : undefined)
const nextItem = computed(() => (currentIndex.value !== -1 && currentIndex.value < navigableItems.value.length - 1) ? navigableItems.value[currentIndex.value + 1] : undefined)
</script>

<template>
  <div class="content-footer">
    <KitBtn
      v-if="previousItem"
      variant="tonal"
      color="secondary"
      prepend-icon="mdi:arrow-left"
      class="footer-btn"
      @click="navigateTo(`/${vault}/${previousItem.path}`)"
    >
      {{ previousItem.title }}
    </KitBtn>

    <div class="spacer" />

    <KitBtn
      v-if="nextItem"
      variant="tonal"
      color="secondary"
      append-icon="mdi:arrow-right"
      class="footer-btn"
      @click="navigateTo(`/${vault}/${nextItem.path}`)"
    >
      {{ nextItem.title }}
    </KitBtn>
  </div>
</template>

<style lang="scss" scoped>
.content-footer {
  display: flex;
  gap: 16px;
  padding: 32px 20px;
  border-top: 1px solid var(--border-secondary-color);
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.spacer {
  flex: 1;
}

.footer-btn {
  min-width: 150px;
  max-width: 45%;
}

@include mobile {
  .content-footer {
    flex-direction: column;
    align-items: stretch;
  }
  .footer-btn {
    max-width: 100%;
  }
}
</style>

--- File: components/modules/content-viewer/ui/content-header.vue ---

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { KitBtn, KitCheckbox, KitDropdown } from '~/components/01.kit'
import { ThemesVariant, useChangeTheme } from '~/shared/composables/change-theme'
import { useContentViewerStore } from '../store'

const route = useRoute()
const { setTheme, theme } = useChangeTheme()
const contentViewerStore = useContentViewerStore()
const menu = defineModel('menu', { required: true })

const { $pwa } = useNuxtApp()

function handleSWUpdate() { $pwa?.updateServiceWorker() }

async function handleForceRefresh() {
  try {
    handleSWUpdate()
    if ('caches' in window) {
      await caches.delete('static-content-stale-while-revalidate')
      await caches.delete('content-images')
      window.location.reload()
    }
  }
  catch {}
}

const needSWRefresh = computed(() => $pwa?.needRefresh)

const isContentViewing = computed(() => {
  const params = route.params as any
  return Array.isArray(params.pwd) ? params.pwd.length > 0 : !!params.pwd
})

const controlledTheme = computed({
  get: () => theme.value,
  set: (value: ThemesVariant) => setTheme(value),
})

const themePreset = computed(() => {
  return controlledTheme.value === ThemesVariant.Light
    ? { next: ThemesVariant.Dark, icon: 'mdi:weather-sunny' }
    : { next: ThemesVariant.Light, icon: 'mdi:weather-night' }
})

const breadcrumbs = computed(() => {
  const vault = route.params.vault as string
  const pwd = (Array.isArray(route.params.pwd) ? route.params.pwd : [route.params.pwd].filter(Boolean)) as string[]

  let currentPath = `/${vault}`
  // Добавляем Vault как первый элемент
  const items = [{ title: vault, to: currentPath, disabled: false }]

  pwd.forEach((segment, index) => {
    currentPath += `/${segment}`
    items.push({ title: segment, to: currentPath, disabled: index === pwd.length - 1 })
  })

  return items
})
</script>

<template>
  <header class="content-header">
    <div class="header-left">
      <KitBtn
        v-if="!menu"
        variant="text"
        size="sm"
        icon="mdi:menu"
        class="menu-btn"
        @click="menu = true"
      />
      <nav class="breadcrumbs">
        <div class="breadcrumb-track">
          <template v-for="(item, i) in breadcrumbs" :key="i">
            <Icon v-if="i > 0" icon="mdi:chevron-right" size="14" class="separator" />
            <NuxtLink
              :to="item.to"
              class="breadcrumb-item"
              :class="{ 'is-active': item.disabled }"
            >
              {{ item.title }}
            </NuxtLink>
          </template>
        </div>
      </nav>
    </div>

    <div class="header-right">
      <KitBtn
        v-if="needSWRefresh"
        variant="text" size="sm" color="accent"
        icon="mdi:refresh"
        title="Обновить приложение"
        @click="handleSWUpdate"
      />
      <KitBtn
        v-if="isContentViewing"
        variant="text" size="sm"
        icon="mdi:sync"
        title="Обновить контент"
        @click="handleForceRefresh"
      />

      <KitDropdown>
        <template #activator>
          <KitBtn variant="text" size="sm" icon="mdi:tune-variant" title="Настройки" />
        </template>
        <div class="settings-panel">
          <KitCheckbox
            v-model="contentViewerStore.borderlessViewEnabled"
            label="Без границ"
          />
        </div>
      </KitDropdown>

      <KitBtn
        variant="text" size="sm"
        :icon="themePreset.icon"
        title="Сменить тему"
        @click="controlledTheme = themePreset.next"
      />
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
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-btn {
  margin-right: 8px;
}

/* Стилизация хлебных крошек */
.breadcrumbs {
  overflow: hidden;
  mask-image: linear-gradient(90deg, black 90%, transparent 100%);
}

.breadcrumb-track {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none; // Скрыть скроллбар
  &::-webkit-scrollbar {
    display: none;
  }
  padding-right: 20px;
}

.separator {
  color: var(--fg-muted-color);
  margin: 0 6px;
  flex-shrink: 0;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--fg-secondary-color);
  text-decoration: none;
  background-color: transparent;
  transition: all 0.2s ease;
  font-weight: 500;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;

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

.settings-panel {
  padding: 8px;
  min-width: 200px;
}

@include mobile {
  .breadcrumbs {
    // На мобильных показываем только последний элемент или скрываем часть
    max-width: 200px;
  }
}
</style>

--- File: components/modules/content-viewer/ui/content-viewer.vue ---

<script setup lang="ts">
import { MarkdownContent } from '~/components/shared/markdown-content'

interface Props {
  content: string
  imageBasePath: string
}
defineProps<Props>()
</script>

<template>
  <div class="content-viewer">
    <MarkdownContent
      class="markdown-body-wrapper"
      :content="content"
      :image-base-path="imageBasePath"
    />
  </div>
</template>

<style lang="scss">
.content-viewer {
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
  min-height: 90vh;
}

.markdown-body-wrapper {
  padding: 20px;
  background-color: var(--bg-primary-color);

  @include mobile {
    padding: 8px;
  }
}
</style>

--- File: components/modules/content-viewer/ui/index.ts ---

import ContentViewerFooter from './content-footer.vue'
import ContentViewerHeader from './content-header.vue'
import ContentViewer from './content-viewer.vue'
import ContentViewerNavigation from './navigation-sidebar.vue'

export {
  ContentViewer,
  ContentViewerFooter,
  ContentViewerHeader,
  ContentViewerNavigation,
}

--- File: components/modules/content-viewer/ui/navigation-sidebar.vue ---

<script lang="ts" setup>
import type { ContentNavItem } from '~/components/modules/content-viewer'
import { KitBtn, KitCheckbox, KitDropdown, KitInput } from '~/components/01.kit'
import { useContentViewerStore } from '../store'
import NavigationTree from './navigation-tree.vue'

interface Props {
  items: ContentNavItem[] | null
}

const props = defineProps<Props>()
const menu = defineModel<boolean>('menu', { required: true })

const router = useRouter()
const contentViewerStore = useContentViewerStore()
const sidebarRef = ref<HTMLElement | null>(null)

interface RouteParams {
  vault: string
}

const params = computed(() => {
  const routeParams = router.currentRoute.value.params as any
  return { vault: routeParams.vault } as RouteParams
})

const sidebarWidth = ref(300)
const resizing = ref(false)
const searchQuery = ref('')

async function selectItem(item: ContentNavItem) {
  // Вычисляем путь вручную или передаем его в объекте,
  // упростим до простого перехода, если sysname уникален или используем простую логику
  // Здесь лучше полагаться на то, что `item` содержит нужные данные.
  // В оригинале был рекурсивный поиск пути. Для простоты перейдем к реализации:
  // Мы предполагаем, что item должен содержать path, но в типах его нет.
  // Костыль для совместимости с текущим API:
  // В идеале NavigationTree должен возвращать полный путь.
  // Но пока оставим базовую навигацию по vault + sysname, если это плоская структура,
  // или потребуем доработки бэка.
  // В оригинале использовался `item.path` который добавлялся в `renderNavTree`.
  // Добавим поиск пути:
  const path = findPath(props.items || [], item.sysname)
  if (path) {
    await navigateTo(`/${params.value.vault}/${path.join('/')}`)
  }
}

function findPath(items: ContentNavItem[], targetSysname: string, currentPath: string[] = []): string[] | null {
  for (const item of items) {
    if (item.sysname === targetSysname)
      return [...currentPath, item.sysname]
    if (item.children) {
      const childPath = findPath(item.children, targetSysname, [...currentPath, item.sysname])
      if (childPath)
        return childPath
    }
  }
  return null
}

function startResize(e: MouseEvent) {
  e.preventDefault()
  resizing.value = true
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', stopResize)
  document.body.style.cursor = 'col-resize'
}

function handleMouseMove(e: MouseEvent) {
  if (!resizing.value)
    return
  sidebarWidth.value = Math.max(250, Math.min(600, e.clientX))
}

function stopResize() {
  resizing.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.cursor = ''
}
</script>

<template>
  <aside
    ref="sidebarRef"
    class="sidebar-wrapper"
    :class="{ 'is-closed': !menu }"
    :style="{ width: menu ? `${sidebarWidth}px` : '0px' }"
  >
    <div class="sidebar-inner">
      <div class="sidebar-header">
        <KitBtn
          variant="text"
          size="sm"
          icon="mdi:menu"
          @click="menu = !menu"
        />
        <KitInput
          v-model="searchQuery"
          variant="solo"
          placeholder="Поиск..."
          rounded
        />
        <KitDropdown>
          <template #activator>
            <KitBtn variant="text" size="sm" icon="mdi:cog" />
          </template>
          <div class="settings-list">
            <KitCheckbox v-model="contentViewerStore.coloredFoldersEnabled" label="Цветные папки" />
            <KitCheckbox v-model="contentViewerStore.showIconsEnabled" label="Иконки" />
          </div>
        </KitDropdown>
      </div>

      <div class="sidebar-content custom-scrollbar">
        <NavigationTree
          v-if="items"
          :items="items"
          :search-query="searchQuery"
          @select="selectItem"
        />
      </div>

      <div class="sidebar-footer">
        <KitBtn
          variant="text"
          color="secondary"
          size="sm"
          class="w-full"
          @click="navigateTo('/')"
        >
          Вернуться к хранилищам
        </KitBtn>
      </div>
    </div>

    <div
      v-show="menu"
      class="resizer"
      :class="{ resizing }"
      @mousedown="startResize"
    />
  </aside>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  position: relative;
  height: 100%;
  background-color: var(--bg-secondary-color);
  border-right: 1px solid var(--border-secondary-color);
  flex-shrink: 0;
  will-change: width;
  z-index: 20;

  &.is-closed {
    overflow: hidden;
    border: none;
  }
}

.sidebar-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid var(--border-secondary-color);
  height: 50px;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.sidebar-footer {
  padding: 8px;
  border-top: 1px solid var(--border-secondary-color);
  .w-full {
    width: 100%;
  }
}

.resizer {
  position: absolute;
  top: 0;
  right: -3px;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 30;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover,
  &.resizing {
    opacity: 1;
    background-color: var(--fg-accent-color);
  }
}

.settings-list {
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Custom Scrollbar */
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-secondary-color);
    border-radius: 4px;
  }
}
</style>

--- File: components/modules/content-viewer/ui/navigation-tree.vue ---

<script setup lang="ts">
import type { ContentNavItem } from '~/components/modules/content-viewer'
import { Icon } from '@iconify/vue'
import { ContentNavItemType } from '~/components/modules/content-viewer'
import { useContentViewerStore } from '../store'

interface Props {
  items: ContentNavItem[]
  level?: number
  searchQuery?: string
  rootIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  level: 0,
  searchQuery: '',
  rootIndex: undefined,
})

const emit = defineEmits(['select'])
const store = useContentViewerStore()
const openFolders = ref<Set<string>>(new Set())

function toggleFolder(sysname: string) {
  if (openFolders.value.has(sysname))
    openFolders.value.delete(sysname)
  else openFolders.value.add(sysname)
}

const filteredItems = computed(() => {
  if (!props.searchQuery)
    return props.items
  const query = props.searchQuery.toLowerCase()

  function filter(items: ContentNavItem[]): ContentNavItem[] {
    return items.reduce((acc, item) => {
      const matches = item.title.toLowerCase().includes(query)
      if (item.type === ContentNavItemType.File && matches) {
        acc.push(item)
      }
      else if (item.type === ContentNavItemType.Directory) {
        const children = item.children ? filter(item.children) : []
        if (matches || children.length > 0) {
          acc.push({ ...item, children })
          if (children.length > 0)
            openFolders.value.add(item.sysname)
        }
      }
      return acc
    }, [] as ContentNavItem[])
  }
  return filter(props.items)
})

function getColorClass(index: number) {
  if (!store.coloredFoldersEnabled)
    return ''
  const colorIndex = props.rootIndex !== undefined ? props.rootIndex : index
  return `row-color-${(colorIndex % 6) + 1}`
}

function getNextRootIndex(currentIndex: number) {
  return props.rootIndex !== undefined ? props.rootIndex : currentIndex
}
</script>

<template>
  <ul class="nav-tree" :class="{ 'is-root': level === 0 }">
    <li v-for="(item, index) in filteredItems" :key="item.sysname" class="nav-tree-item">
      <!-- Папка -->
      <div
        v-if="item.type === ContentNavItemType.Directory"
        class="tree-row folder-row"
        :class="[getColorClass(index)]"
        :style="{ paddingLeft: `${level * 16 + 8}px` }"
        @click.stop="toggleFolder(item.sysname)"
      >
        <span class="tree-toggle-icon">
          <Icon
            :icon="openFolders.has(item.sysname) ? 'mdi:chevron-down' : 'mdi:chevron-right'"
            size="16"
          />
        </span>
        <span v-if="store.showIconsEnabled" class="tree-icon flex-shrink-0">
          <Icon
            :icon="openFolders.has(item.sysname) ? 'mdi:folder-open' : 'mdi:folder'"
            class="folder-icon"
          />
        </span>
        <span class="tree-label" :title="item.title">{{ item.title }}</span>
      </div>

      <!-- Файл (теперь тоже получает getColorClass) -->
      <div
        v-else
        class="tree-row file-row"
        :class="[getColorClass(index)]"
        :style="{ paddingLeft: `${level * 16 + 24}px` }"
        @click.stop="emit('select', item)"
      >
        <span v-if="store.showIconsEnabled" class="tree-icon flex-shrink-0">
          <Icon icon="mdi:language-markdown" size="16" />
        </span>
        <span class="tree-label" :title="item.title">{{ item.title }}</span>
      </div>

      <!-- Рекурсия -->
      <div v-if="item.type === ContentNavItemType.Directory && openFolders.has(item.sysname)" class="tree-children">
        <NavigationTree
          v-if="item.children"
          :items="item.children"
          :level="level + 1"
          :search-query="searchQuery"
          :root-index="getNextRootIndex(index)"
          @select="emit('select', $event)"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-tree {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.tree-row {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  margin: 2px 4px;
  transition: all 0.1s ease-in-out;

  color: var(--fg-secondary-color);

  max-width: 100%;
  overflow: hidden;

  &:hover {
    background-color: var(--bg-hover-color);
    color: var(--fg-primary-color);
  }
}

.tree-toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  min-width: 16px;
  margin-right: 4px;
  opacity: 0.7;
}

.tree-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.tree-label {
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

/*
  СИСТЕМА ЦВЕТОВ
  Используем CSS переменные для настройки цвета строки.
  --row-accent: основной цвет текста и иконок
  --row-bg: полупрозрачный фон
*/

// Цветовая палитра (RGB значения для использования в rgba)
$c-blue: 66, 165, 245; // #42a5f5
$c-red: 239, 83, 80; // #ef5350
$c-green: 102, 187, 106; // #66bb6a
$c-orange: 255, 167, 38; // #ffa726 (более мягкий желтый/оранжевый)
$c-purple: 171, 71, 188; // #ab47bc
$c-brown: 141, 110, 99; // #8d6e63

.row-color-1 {
  --row-rgb: #{$c-orange};
} // Начинаем с желтого/оранжевого как в примере
.row-color-2 {
  --row-rgb: #{$c-purple};
}
.row-color-3 {
  --row-rgb: #{$c-green};
}
.row-color-4 {
  --row-rgb: #{$c-blue};
}
.row-color-5 {
  --row-rgb: #{$c-red};
}
.row-color-6 {
  --row-rgb: #{$c-brown};
}

// Применяем цвета, если класс добавлен
[class*='row-color-'] {
  color: rgb(var(--row-rgb)); // Цвет текста
  background-color: rgba(var(--row-rgb), 0.08); // Очень легкий фон (8% прозрачности)

  .tree-icon,
  .tree-toggle-icon {
    color: rgb(var(--row-rgb));
  }

  // При наведении делаем фон чуть насыщеннее
  &:hover {
    background-color: rgba(var(--row-rgb), 0.16);
    color: rgb(var(--row-rgb)); // Оставляем цвет цветным
  }
}
</style>

--- File: components/shared/install-prompt-banner/index.ts ---

export * from './ui'

--- File: components/shared/install-prompt-banner/ui/index.ts ---

import InstallPromptBanner from './install-prompt-banner.vue'

export {
  InstallPromptBanner,
}

--- File: components/shared/install-prompt-banner/ui/install-prompt-banner.vue ---

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { KitBtn } from '~/components/01.kit'

const showInstallBanner = ref<boolean>(false)
const showUpdateBanner = ref<boolean>(false)
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa) {
    if ($pwa.showInstallPrompt && !localStorage.getItem('pwa-dismissed')) {
      showInstallBanner.value = true
    }
    if ($pwa.needRefresh)
      showUpdateBanner.value = true
  }
})

function dismiss() {
  showInstallBanner.value = false
  localStorage.setItem('pwa-dismissed', 'true')
}
</script>

<template>
  <div class="banners-container">
    <div v-if="showInstallBanner" class="banner">
      <div class="banner-content">
        <Icon icon="mdi:cellphone" class="banner-icon" />
        <span>Установите приложение для быстрого доступа!</span>
      </div>
      <div class="banner-actions">
        <KitBtn size="sm" @click="$pwa?.install()">
          Установить
        </KitBtn>
        <KitBtn size="sm" variant="text" icon="mdi:close" @click="dismiss" />
      </div>
    </div>

    <div v-if="showUpdateBanner" class="banner update">
      <div class="banner-content">
        <Icon icon="mdi:refresh" class="banner-icon" />
        <span>Доступно обновление.</span>
      </div>
      <KitBtn size="sm" @click="$pwa?.updateServiceWorker()">
        Обновить
      </KitBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banners-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  width: 90%;
  max-width: 400px;
}

.banner {
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--s-l);
  gap: 12px;

  &.update {
    border-color: var(--fg-accent-color);
  }
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--fg-primary-color);
}

.banner-actions {
  display: flex;
  gap: 4px;
}

.banner-icon {
  color: var(--fg-accent-color);
}
</style>

--- File: components/shared/markdown-content/index.ts ---

export * from './ui'

--- File: components/shared/markdown-content/lib/create-markdown-renderer.ts ---

import type { Highlighter } from 'shiki'
import catppuccinFrappe from '@shikijs/themes/catppuccin-frappe'
import catppuccinLatte from '@shikijs/themes/catppuccin-latte'
import catppuccinMacchiato from '@shikijs/themes/catppuccin-macchiato'
import catppuccinMocha from '@shikijs/themes/catppuccin-mocha'
import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItCollapsible from 'markdown-it-collapsible'
// @ts-expect-error no dts
import MarkdownItObsidianCallouts from 'markdown-it-obsidian-callouts'
import { createHighlighter } from 'shiki'
import { markdownItWikiImages } from './markdownIt-wiki-images'
import { markdownItWikiLinks } from './markdownIt-wiki-links'

interface CreateMarkdownRendererParams {
  imageBasePath: string
  shikiTheme: string
}

export async function createMarkdownRenderer(params: CreateMarkdownRendererParams): Promise<MarkdownIt> {
  const { imageBasePath, shikiTheme } = params

  const highlighter: Highlighter = await createHighlighter({
    themes: [catppuccinMocha, catppuccinMacchiato, catppuccinFrappe, catppuccinLatte],
    langs: ['c++', 'ql', 'javascript', 'typescript', 'html', 'css', 'scss', 'json', 'bash', 'python', 'vue', 'markdown', 'go', 'rust'],
  })

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    highlight: (str: string, lang: string, _attrs: string): string => {
      if (lang && highlighter.getLoadedLanguages().includes(lang)) {
        try {
          return highlighter.codeToHtml(str, { lang: 'c++', theme: shikiTheme })
        }
        catch (error) {
          console.error(`Shiki highlighting error for lang ${lang}:`, error)
          return `<pre class="shiki-fallback"><code>${md.utils.escapeHtml(str)}</code></pre>`
        }
      }
      return `<pre class="shiki-fallback"><code>${md.utils.escapeHtml(str)}</code></pre>`
    },
  })

  md
    .use(markdownItWikiImages, {
      baseURL: imageBasePath,
      defaultAlt: '',
    })
    .use(markdownItWikiLinks)
    .use(MarkdownItObsidianCallouts)
    .use(MarkdownItAttrs)
    .use(MarkdownItCollapsible)

  return md
}

--- File: components/shared/markdown-content/lib/index.ts ---

export * from './create-markdown-renderer'

--- File: components/shared/markdown-content/lib/markdownIt-wiki-images.ts ---

import type MarkdownIt from 'markdown-it'

interface WikiImageOptions {
  baseURL?: string
  defaultAlt?: string
}

function markdownItWikiImages(md: MarkdownIt, options: WikiImageOptions = {}) {
  const {
    baseURL = '/personal/img/',
    defaultAlt = '',
  } = options

  md.inline.ruler.before('emphasis', 'wiki_image', (state, silent) => {
    const pos = state.pos
    const max = state.posMax
    const ch = state.src.charCodeAt(pos)

    if (ch !== 0x21/* ! */)
      return false
    if (state.src.charCodeAt(pos + 1) !== 0x5B/* [ */)
      return false
    if (state.src.charCodeAt(pos + 2) !== 0x5B/* [ */)
      return false

    let end = pos + 3
    while (end < max && state.src.charCodeAt(end) !== 0x5D/* ] */) {
      end++
    }
    if (end >= max)
      return false
    if (state.src.charCodeAt(end + 1) !== 0x5D/* ] */)
      return false

    if (silent)
      return true

    const filename = state.src.slice(pos + 3, end).trim()
    const imgSrc = `${baseURL}${filename}`

    const token = state.push('html_inline', '', 0)
    token.content = `<img src="${imgSrc}" alt="${defaultAlt}" />`

    state.pos = end + 2

    return true
  })
}

export { markdownItWikiImages }

--- File: components/shared/markdown-content/lib/markdownIt-wiki-links.ts ---

import type MarkdownIt from 'markdown-it'

function markdownItWikiLinks(md: MarkdownIt) {
  const originalParse = md.parse

  md.parse = function (src, env) {
    src = src.replace(/\[([^\]]+)\]\(\s*\/\s*([^)]+)\)/g, (match, text, path) => {
      const cleanPath = path.trim()
      return `<a href="/${cleanPath}">${text}</a>`
    })

    return originalParse.call(this, src, env)
  }
}

export { markdownItWikiLinks }

--- File: components/shared/markdown-content/ui/index.ts ---

import MarkdownContent from './markdown-content.vue'

export { MarkdownContent }

--- File: components/shared/markdown-content/ui/markdown-content.vue ---

<script setup lang="ts">
import type MarkdownIt from 'markdown-it'
import { PageLoader } from '~/components/shared/page-loader'
import { useChangeTheme } from '~/shared/composables/change-theme'
import { createMarkdownRenderer } from '../lib'

interface Props {
  content: string
  imageBasePath: string
}

const props = defineProps<Props>()

const { theme } = useChangeTheme()

const renderedContent = ref<string>('')
const mdInstance = ref<MarkdownIt | null>(null)
const isLoading = ref<boolean>(true)
const currentImages = ref<string[]>([])

function getShikiTheme() {
  switch (theme.value) {
    case ThemesVariant.Dark:
      return 'catppuccin-mocha'
    case ThemesVariant.Light:
      return 'catppuccin-latte'
    default:
      return 'catppuccin-mocha'
  }
}

function openImageViewer() {
  document.documentElement.style.overflow = 'hidden'
  // TODO later
}

watch(
  () => theme.value,
  async () => {
    mdInstance.value = await createMarkdownRenderer({
      imageBasePath: props.imageBasePath,
      shikiTheme: getShikiTheme(),
    })
  },
)

watch(
  [() => props.content, mdInstance],
  ([newContent, md]) => {
    if (md && !isLoading.value) {
      renderedContent.value = md.render(newContent || '')
    }
    else if (!isLoading.value && !newContent) {
      renderedContent.value = ''
    }
  },
  { immediate: false },
)

onMounted(async () => {
  try {
    mdInstance.value = await createMarkdownRenderer({
      imageBasePath: props.imageBasePath,
      shikiTheme: getShikiTheme(),
    })
    if (mdInstance.value && props.content) {
      renderedContent.value = mdInstance.value.render(props.content)
    }

    nextTick(() => {
      const callouts = document.querySelectorAll('.callout')

      callouts.forEach((callout) => {
        const imagesInCallout = callout.querySelectorAll<HTMLImageElement>('.callout-content img')

        if (imagesInCallout.length > 0) {
          const imageUrls: string[] = Array.from(imagesInCallout).map(img => img.src)

          Array.from(imagesInCallout).forEach((img) => {
            img.addEventListener('click', (event) => {
              event.stopPropagation()
              const clickedImageUrl = (img as HTMLImageElement).src

              const reorderedImages = [
                clickedImageUrl,
                ...imageUrls.filter(url => url !== clickedImageUrl),
              ]

              currentImages.value = reorderedImages
              openImageViewer()
            })
            img.style.cursor = 'pointer'
          })
        }
      })
    })
  }
  catch (error) {
    console.error('Failed to create markdown renderer:', error)
  }
  finally {
    isLoading.value = false
  }
})
</script>

<template>
  <PageLoader v-if="isLoading" />
  <div
    v-else
    class="markdown-body"
    v-html="renderedContent"
  />
</template>

<style lang="scss">
.markdown-body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  line-height: 1.7;
  color: var(--fg-primary-color);
  font-size: 1.05rem;

  // --- ЗАГОЛОВКИ ---
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--fg-primary-color);
  }

  h1 {
    font-size: 2rem;
    border-bottom: 1px solid var(--border-secondary-color);
    padding-bottom: 0.5rem;
  }

  h2 {
    // Стиль "Notion/Obsidian Modern": Акцент слева + легкий градиент
    font-size: 1.5rem;
    border: none; // Убираем старые рамки
    border-left: 4px solid var(--fg-accent-color);
    background: linear-gradient(90deg, rgba(var(--bg-accent-color), 0.15) 0%, transparent 100%);
    padding: 0.5rem 1rem;
    border-radius: 0 8px 8px 0; // Скругление справа
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 {
    font-size: 1.25rem;
    border: none;
    border-bottom: 2px solid var(--border-secondary-color);
    padding-bottom: 0.3rem;
    width: fit-content; // Подчеркивание только по длине текста
    padding-right: 20px;
  }

  // --- ТЕКСТ И ВЫДЕЛЕНИЯ ---

  p {
    margin-bottom: 1.2rem;
  }

  strong {
    color: var(--fg-primary-color);
    font-weight: 700;
  }

  em {
    color: var(--fg-accent-color);
    font-style: italic;
  }

  // --- INLINE CODE (для иероглифов и терминов) ---
  // Превращаем в "таблетки" (tags)
  code:not(pre > code) {
    background-color: rgba(var(--fg-accent-color), 0.1); // Прозрачный цвет акцента
    color: var(--fg-accent-color); // Цвет текста - акцентный
    padding: 0.1em 0.4em;
    margin: 0 0.1em;
    font-size: 0.9em;
    border-radius: 6px; // Скругленные углы
    font-family: 'Maple Mono CN', 'JetBrains Mono', monospace;
    font-weight: 600;
    border: 1px solid rgba(var(--fg-accent-color), 0.2); // Легкая рамка
    vertical-align: baseline;
    display: inline-block; // Чтобы padding работал корректно
  }

  // Блоки кода (настоящий код)
  pre:not(.shiki) {
    background: var(--bg-tertiary-color);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;

    code {
      font-family: 'Maple Mono CN', 'JetBrains Mono', monospace;
      background: transparent;
      padding: 0;
      color: inherit;
      border: none;
    }
  }

  // --- СПИСКИ ---
  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  ul > li {
    list-style-type: disc;
    margin-bottom: 0.5rem;

    &::marker {
      color: var(--fg-accent-color); // Маркеры списка цветом акцента
    }
  }

  // --- ЦИТАТЫ (Blockquote) ---
  blockquote {
    border-left: 4px solid var(--fg-accent-color);
    background-color: var(--bg-secondary-color);
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
    margin: 1.5rem 0;
    font-style: italic;
    color: var(--fg-secondary-color);

    p {
      margin-bottom: 0;
    }
  }

  // --- ИЗОБРАЖЕНИЯ ---
  img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  // --- ТАБЛИЦЫ ---
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.95rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 1px var(--border-secondary-color); // Граница таблицы
  }

  th {
    background-color: var(--bg-tertiary-color);
    text-align: left;
    padding: 12px 16px;
    font-weight: 600;
    border-bottom: 2px solid var(--border-secondary-color);
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-secondary-color);
  }

  tr:last-child td {
    border-bottom: none;
  }
  tr:hover td {
    background-color: var(--bg-hover-color);
  }

  /* --- CALLOUTS (Obsidian Style) --- */
  // Base Variables
  --co-bg-opacity: 0.08; // Более прозрачный фон
  --co-border-width: 4px;
  --co-radius: 8px;

  // Цвета
  --co-note: 68, 138, 255;
  --co-info: 68, 138, 255;
  --co-tip: 0, 191, 165;
  --co-success: 76, 175, 80;
  --co-warning: 255, 152, 0;
  --co-danger: 229, 57, 53;
  --co-quote: 158, 158, 158;

  .callout {
    margin: 1.5rem 0;
    border-radius: var(--co-radius);
    background-color: rgba(var(--callout-color), var(--co-bg-opacity));
    border-left: var(--co-border-width) solid rgb(var(--callout-color));
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03); // Легкая тень

    // Fallback
    --callout-color: var(--co-note);
  }

  .callout-title {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    color: rgb(var(--callout-color));
    // Делаем заголовок чуть темнее фона тела
    background-color: rgba(var(--callout-color), 0.12);
    font-size: 1rem;
    border-bottom: 1px solid rgba(var(--callout-color), 0.1);
  }

  .callout-content {
    padding: 16px;

    p:last-child {
      margin-bottom: 0;
    }
  }

  .callout-title-icon {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;

    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}

// Collapsible support
details.callout {
  & > summary.callout-title {
    cursor: pointer;
    list-style: none;
  }
  & > summary.callout-title::-webkit-details-marker {
    display: none;

    .callout-fold {
      margin-left: auto;
      transform: rotate(0deg);
      transition: transform 0.2s;
      opacity: 0.7;
    }

    &[open] .callout-fold {
      transform: rotate(90deg);
    }
  }

  // Mapping types
  & .callout[data-callout='abstract'],
  & .callout[data-callout='summary'],
  & .callout[data-callout='tldr'] {
    --callout-color: var(--co-tip);
  }
  & .callout[data-callout='info'] {
    --callout-color: var(--co-info);
  }
  & .callout[data-callout='todo'] {
    --callout-color: var(--co-note);
  }
  & .callout[data-callout='tip'],
  & .callout[data-callout='hint'],
  & .callout[data-callout='important'] {
    --callout-color: var(--co-tip);
  }
  & .callout[data-callout='success'],
  & .callout[data-callout='check'],
  & .callout[data-callout='done'] {
    --callout-color: var(--co-success);
  }
  & .callout[data-callout='question'],
  & .callout[data-callout='help'],
  & .callout[data-callout='faq'] {
    --callout-color: var(--co-warning);
  }
  & .callout[data-callout='warning'],
  & .callout[data-callout='caution'],
  & .callout[data-callout='attention'] {
    --callout-color: var(--co-warning);
  }
  & .callout[data-callout='failure'],
  & .callout[data-callout='fail'],
  & .callout[data-callout='missing'],
  & .callout[data-callout='danger'],
  & .callout[data-callout='error'] {
    --callout-color: var(--co-danger);
  }
  & .callout[data-callout='bug'] {
    --callout-color: var(--co-danger);
  }
  & .callout[data-callout='example'] {
    --callout-color: 124, 77, 255;
  }
  & .callout[data-callout='quote'],
  & .callout[data-callout='cite'] {
    --callout-color: var(--co-quote);
  }
}
</style>

<style lang="scss">
  .hero {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  // Фон и границы адаптированы
  background-color: rgba(115, 233, 144, 0.08);
  border: 1px solid rgba(115, 233, 144, 0.25);
  border-left: 4px solid rgba(142, 175, 151, 0.5);
  border-radius: 12px;

  padding: 16px 24px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;

  // Мобильная адаптация
  @include mobile {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

.hero .hanzi {
  font-family: 'Maple Mono CN', 'KaiTi', serif;
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 500;

  color: #81bb8f;
  opacity: 1;

  margin-right: 24px;
  padding-right: 24px;
  border-right: 1px solid rgba(115, 233, 144, 0.3);
  flex-shrink: 0;

  @include mobile {
    border-right: none;
    border-bottom: 1px solid rgba(115, 233, 144, 0.3);
    padding-right: 0;
    margin-right: 0;
    padding-bottom: 12px;
    width: 100%;
    text-align: center;
  }
}

.hero .meta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

// Сброс глобальных стилей H1 внутри карточки
.hero .meta h1 {
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
  background: none !important;
  font-size: 1.5rem;
  line-height: 1.2;
  color: var(--fg-primary-color); // Используем тему приложения
  font-weight: 700;
  display: block; // Возвращаем блочность, если H1 стал флексом глобально
}

.hero .meta .pinyin {
  font-size: 1.1rem;
  font-family: 'Maple Mono CN', monospace;
  color: #61b576;
  margin-top: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero .meta .desc {
  font-size: 0.9rem;
  color: var(--fg-secondary-color); // Вторичный цвет темы
  margin-top: 6px;
  line-height: 1.4;
}
</style>

--- File: components/shared/page-loader/index.ts ---

export * from './ui'

--- File: components/shared/page-loader/ui/index.ts ---

import PageLoader from './page-loader.vue'

export { PageLoader }

--- File: components/shared/page-loader/ui/page-loader.vue ---

<template>
  <div class="page-loader">
    <div class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 200px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--bg-tertiary-color);
  border-top-color: var(--fg-accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

--- File: layouts/default.vue ---

<script setup lang="ts">
import type { ContentNavItem } from '~/components/modules/content-viewer'
import { Icon } from '@iconify/vue'
import { ContentNavItemType, useContentViewerStore } from '~/components/modules/content-viewer'

interface Props {
  items: ContentNavItem[]
  level?: number
  searchQuery?: string
  rootIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  level: 0,
  searchQuery: '',
  rootIndex: undefined,
})

const emit = defineEmits(['select'])
const store = useContentViewerStore()
const openFolders = ref<Set<string>>(new Set())

function toggleFolder(sysname: string) {
  if (openFolders.value.has(sysname))
    openFolders.value.delete(sysname)
  else openFolders.value.add(sysname)
}

const filteredItems = computed(() => {
  if (!props.searchQuery)
    return props.items
  const query = props.searchQuery.toLowerCase()

  function filter(items: ContentNavItem[]): ContentNavItem[] {
    return items.reduce((acc, item) => {
      const matches = item.title.toLowerCase().includes(query)
      if (item.type === ContentNavItemType.File && matches) {
        acc.push(item)
      }
      else if (item.type === ContentNavItemType.Directory) {
        const children = item.children ? filter(item.children) : []
        if (matches || children.length > 0) {
          acc.push({ ...item, children })
          if (children.length > 0)
            openFolders.value.add(item.sysname)
        }
      }
      return acc
    }, [] as ContentNavItem[])
  }
  return filter(props.items)
})

function getFolderColorClass(index: number) {
  if (!store.coloredFoldersEnabled)
    return ''
  const colorIndex = props.rootIndex !== undefined ? props.rootIndex : index
  return `folder-color-${(colorIndex % 6) + 1}`
}
</script>

<template>
  <ul class="nav-tree" :class="{ 'is-root': level === 0 }">
    <li v-for="(item, index) in filteredItems" :key="item.sysname" class="nav-tree-item">
      <!-- Папка -->
      <div
        v-if="item.type === ContentNavItemType.Directory"
        class="tree-row folder-row"
        :class="[getFolderColorClass(index)]"
        :style="{ paddingLeft: `${level * 16 + 8}px` }"
        @click.stop="toggleFolder(item.sysname)"
      >
        <span class="tree-toggle-icon">
          <Icon
            :icon="openFolders.has(item.sysname) ? 'mdi:chevron-down' : 'mdi:chevron-right'"
            size="16"
          />
        </span>
        <span v-if="store.showIconsEnabled" class="tree-icon flex-shrink-0">
          <Icon
            :icon="openFolders.has(item.sysname) ? 'mdi:folder-open' : 'mdi:folder'"
            class="folder-icon"
          />
        </span>
        <span class="tree-label" :title="item.title">{{ item.title }}</span>
      </div>

      <!-- Файл -->
      <div
        v-else
        class="tree-row file-row"
        :style="{ paddingLeft: `${level * 16 + 24}px` }"
        @click.stop="emit('select', item)"
      >
        <span v-if="store.showIconsEnabled" class="tree-icon flex-shrink-0">
          <Icon icon="mdi:language-markdown" size="16" />
        </span>
        <span class="tree-label" :title="item.title">{{ item.title }}</span>
      </div>

      <!-- Рекурсия: Передаем rootIndex дальше -->
      <div v-if="item.type === ContentNavItemType.Directory && openFolders.has(item.sysname)" class="tree-children">
        <NavigationTree
          v-if="item.children"
          :items="item.children"
          :level="level + 1"
          :search-query="searchQuery"
          :root-index="props.rootIndex !== undefined ? props.rootIndex : index"
          @select="emit('select', $event)"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-tree {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.tree-row {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  margin: 1px 4px;
  transition: background-color 0.1s;
  color: var(--fg-secondary-color);
  max-width: 100%;
  overflow: hidden;

  &:hover {
    background-color: var(--bg-hover-color);
    color: var(--fg-primary-color);
  }
}

.tree-toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  min-width: 16px;
  margin-right: 4px;
}

.tree-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.tree-label {
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

.folder-row {
  &.folder-color-1 {
    color: #42a5f5;
  }
  &.folder-color-2 {
    color: #ef5350;
  }
  &.folder-color-3 {
    color: #66bb6a;
  }
  &.folder-color-4 {
    color: #ffca28;
  }
  &.folder-color-5 {
    color: #ab47bc;
  }
  &.folder-color-6 {
    color: #8d6e63;

  .folder-icon {
    color: inherit;
  }
}
</style>

--- File: layouts/nav-content.vue ---

<script lang="ts" setup>
import type { ContentNavItem } from '~/components/modules/content-viewer'
import { ContentViewerHeader, ContentViewerNavigation, useContentViewerStore } from '~/components/modules/content-viewer'
import { PageLoader } from '~/components/shared/page-loader'

const contentViewerStore = useContentViewerStore()
const menu = ref(true)
const route = useRoute()
const params = route.params as any
const vault = params.vault || ''

const { data: navItems, status } = await useAsyncData<ContentNavItem[]>(`nav-${vault}`, async () => {
  if (!vault)
    return []

  try {
    const { cmsUrl } = useRuntimeConfig().public
    const response = await $fetch<any>(`${cmsUrl}/content/${vault}/nav.json`)

    if (!Array.isArray(response)) {
      console.error('Nav data format error: expected Array, got', typeof response)
      return []
    }

    contentViewerStore.$patch({ navItems: response })
    return response
  }
  catch (e) {
    console.warn(`Failed to fetch navigation for ${vault}:`, e)
    return []
  }
})
</script>

<template>
  <div class="layout-container">
    <PageLoader v-if="status === 'pending'" />
    <div v-else class="layout-content">
      <ContentViewerNavigation v-model:menu="menu" :items="navItems ?? []" />

      <main class="main-area">
        <ContentViewerHeader v-model:menu="menu" />
        <div class="content-scrollable" :class="{ borderless: contentViewerStore.borderlessViewEnabled }">
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
  }
}
</style>

--- File: pages/[vault]/[...pwd].vue ---

<script setup lang="ts">
import { ContentViewer, ContentViewerFooter, useContentViewerStore } from '~/components/modules/content-viewer'

const route = useRoute()
const store = useContentViewerStore()

const params = computed(() => {
  const p = route.params as any
  return { vault: p.vault, pwd: Array.isArray(p.pwd) ? p.pwd : [p.pwd].filter(Boolean) }
})

const { cmsUrl } = useRuntimeConfig().public
const { data: contentData, status } = useAsyncData(
  `content-${params.value.vault}-${params.value.pwd}`,
  () => $fetch<string>(`${cmsUrl}/content/${params.value.vault}/${params.value.pwd.join('/')}.md`, { responseType: 'text' }),
)

const imageBasePath = computed(() => (`${cmsUrl}/content/${params.value.vault}/_/`))

definePageMeta({
  layout: 'nav-content',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="page-wrapper">
    <div v-if="status === 'pending'" class="loading-state">
      Загрузка...
    </div>

    <ClientOnly v-else-if="contentData">
      <ContentViewer :content="contentData ?? ''" :image-base-path="imageBasePath" />
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
.page-wrapper {
  width: 100%;
}
.loading-state {
  text-align: center;
  padding: 40px;
  color: var(--fg-muted-color);
}
.empty-state {
  padding: 40px;
  display: flex;
  justify-content: center;
}
.alert {
  background: var(--bg-secondary-color);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--fg-accent-color);
}
</style>

--- File: pages/[vault]/index.vue ---

<script lang="ts" setup>
definePageMeta({
  layout: 'nav-content',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div style="padding: 20px;">
    <div class="alert">
      <strong class="alert__title">Ничего не выбрано</strong>
      <p>Выберите интересующую вас тему в меню слева.</p>
    </div>
  </div>
</template>

--- File: pages/index.vue ---

<script setup lang="ts">
import { KitBtn } from '~/components/01.kit'

interface NavItem {
  sysname: string
  title: string
  description: string
  icon: string
}

const { cmsUrl } = useRuntimeConfig().public
const { data: navData } = await useAsyncData<NavItem[]>('nav-root', () =>
  $fetch(`${cmsUrl}/content/nav.json`))
</script>

<template>
  <div class="landing-page">
    <div class="container">
      <h1 class="title">
        Доступные хранилища
      </h1>

      <div class="grid">
        <div
          v-for="item in navData"
          :key="item.sysname"
          class="card"
          @click="navigateTo(`/${item.sysname}`)"
        >
          <div class="card-accent" />
          <div class="card-content">
            <img :src="item.icon" class="card-icon" alt="">
            <h2 class="card-title">
              {{ item.title }}
            </h2>
            <p class="card-desc">
              {{ item.description }}
            </p>
          </div>
          <div class="card-action">
            <KitBtn variant="text" icon="mdi:arrow-right" color="primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #535e85 0%, #76569c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  width: 100%;
}

.title {
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    .card-accent {
      transform: scaleX(1);
    }
  }
}

.card-accent {
  height: 4px;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  object-fit: contain;
}

.card-title {
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 8px;
}

.card-desc {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-action {
  padding: 12px 24px;
  display: flex;
  justify-content: flex-end;
}
</style>

--- File: service-worker/sw.ts ---

/* eslint-disable regexp/no-unused-capturing-group */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { cacheNames, clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheNames.precache).then((cache) => {
      return cache.add('/')
    }),
  )
})

const entries = self.__WB_MANIFEST
if (import.meta.env.DEV)
  entries.push({ url: '/', revision: Math.random().toString() })

precacheAndRoute(entries)

cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
}

if (import.meta.env.PROD) {
  registerRoute(
    ({ request, sameOrigin }) => sameOrigin && request.destination === 'manifest',
    new NetworkFirst({
      cacheName: 'wander-mark-webmanifest',
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({ maxEntries: 100 }),
      ],
    }),
  )
  // Паттерн для файлов контента (json, txt, html, md) через прокси /api/cms/content/
  const contentApiPattern = /\/static\/wander-mark\/.*\.(json|txt|html|md)$/i
  const contentImgPattern = /\/static\/wander-mark\/.*\.(png|jpg|jpeg|svg|gif)$/i

  // === ВАЖНО: ПОРЯДОК ПРАВИЛ ИМЕЕТ ЗНАЧЕНИЕ ===
  // Более специфичные правила должны идти перед более общими.

  // Стратегия StaleWhileRevalidate для файлов контента (json, md и т.д.)
  // Это правило ДОЛЖНО идти ПЕРЕД более общими правилами для /api/
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = contentApiPattern.test(url.pathname)
      if (matches) {
        console.log(`[SW] Matched content API pattern for: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'static-content-stale-while-revalidate',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
        // Этот плагин разрешает кэширование только для статусов 0 (opaque) и 200 (OK)
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия StaleWhileRevalidate для изображений контента
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = contentImgPattern.test(url.pathname)
      if (matches) {
        console.log(`[SW] Matched image pattern for: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'content-images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия NetworkOnly для ОБЩИХ запросов к /api/, которые НЕ ДОЛЖНЫ кэшироваться
  // Это правило ДОЛЖНО идти ПОСЛЕ всех специфичных правил для /api/ (например, /api/cms/content/).
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = /^\/api\//.test(url.pathname)
      if (matches) {
        // Логгируем, если общий API паттерн совпал (это должно происходить только для запросов,
        // не попавших в contentApiPattern или contentImgPattern)
        console.log(`[SW] Matched general API pattern for: ${url.pathname}`)
      }
      return matches
    },
    new NetworkOnly(),
  )

  // === КОНЕЦ НАСТРОЙКИ ПРАВИЛ ===
}

// Маршрут для обработки навигационных запросов.
// Все запросы, которые не совпадают со статическими файлами и другими маршрутами,
// будут направлены на URL, созданный createHandlerBoundToURL('/').
// Это обычно отдает HTML-оболочку приложения.
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

// Активирует новую версию Service Worker'а сразу после установки,
// пропуская состояние ожидания (waiting state).
self.skipWaiting()
// Захватывает всех активных клиентов (открытые вкладки),
// чтобы новая версия SW начала контролировать их немедленно.
clientsClaim()

--- File: service-worker/tsconfig.json ---

{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "lib": [
      "ESNext",
      "WebWorker",
      "DOM.Iterable"
    ],
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "./"
  ],
  "exclude": []
}

--- File: shared/composables/change-theme.ts ---

enum ThemesVariant {
  Light = 'light',
  Dark = 'dark',
}

const themesColors: Record<ThemesVariant, string> = {
  [ThemesVariant.Light]: '#faf4f2',
  [ThemesVariant.Dark]: '#0d1117',
}

function useChangeTheme() {
  const theme = useColorMode()

  function applyToHead(value: ThemesVariant) {
    useHead({
      meta: [
        { name: 'theme-color', content: themesColors[value] },
      ],
    })
  }

  function getHeadThemeColor() {
    return themesColors[theme.value as ThemesVariant] || themesColors[ThemesVariant.Light]
  }

  const setTheme = (value: ThemesVariant) => {
    theme.preference = value
    applyToHead(value)
  }

  return {
    theme,
    getHeadThemeColor,
    setTheme,
  }
}

export { useChangeTheme }
export { ThemesVariant }

--- File: shared/directives/ripple.ts ---

const ripple = {
  mounted(el: HTMLElement) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    el.addEventListener('click', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const circle = document.createElement('span')
      const diameter = Math.max(rect.width, rect.height)
      const radius = diameter / 2

      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${x - radius}px`
      circle.style.top = `${y - radius}px`
      circle.style.position = 'absolute'
      circle.style.borderRadius = '50%'
      circle.style.transform = 'scale(0)'
      circle.style.animation = 'ripple 600ms linear'
      circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
      circle.style.pointerEvents = 'none'

      const existingRipple = el.getElementsByClassName('ripple')[0]
      if (existingRipple) {
        existingRipple.remove()
      }

      circle.classList.add('ripple')
      el.appendChild(circle)

      setTimeout(() => {
        circle.remove()
      }, 600)
    })

    // Add keyframes styles programmatically if not exists
    if (!document.getElementById('ripple-style')) {
      const style = document.createElement('style')
      style.id = 'ripple-style'
      style.innerHTML = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }
  },
}

export const vRipple = ripple

=====================
