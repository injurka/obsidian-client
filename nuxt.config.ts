export default defineNuxtConfig({
  ssr: true,

  typescript: {
    typeCheck: false,
    strict: true,
    tsConfig: {
      exclude: ['../service-worker'],
      vueCompilerOptions: {
        target: 3.5,
      },
    },
  },

  components: {
    dirs: [],
    global: false,
  },

  routeRules: {
    '/manifest.webmanifest': {
      headers: {
        'Content-Type': 'application/manifest+json',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    },
  },

  imports: {
    autoImport: true,
    dirs: [
      './shared/composables',
    ],
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  features: {
    inlineStyles: false,
  },

  pwa: {
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'sw.ts',
    base: '/',
    registerType: 'autoUpdate',
    scope: '/',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'WanderMark',
      short_name: 'WanderMark',
      description: 'WanderMark',
      theme_color: '#ffffff',
      lang: 'ru',
      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }],
      screenshots: [{
        src: 'maskable-icon-512x512.png',
        sizes: '512X512',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Application',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512X512',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Application',
      }],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}'],
      globIgnores: ['emojis/**', 'manifest**.webmanifest'],
      maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
      dontCacheBustURLsMatching: /\.\w{8}\./,
      additionalManifestEntries: [{
        url: '/',
        revision: import.meta.env.NUXT_PUBLIC_APP_VERSION || new Date().toString(),
      }],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 30,
    },
  },

  devServer: {
    port: 5173,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
    dataValue: 'theme',
  },

  fonts: {
    priority: ['google', 'local'],
    providers: {
      fontshare: false,
      adobe: false,
      bunny: false,
      fontsource: false,
      googleicons: false,
    },
    devtools: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: [
    '/assets/scss/global.scss',
    '/assets/scss/atomic.scss',
    '/assets/scss/normalize.scss',
  ],

  runtimeConfig: {
    public: {
      cmsUrl: 'https://api.kvakushnik.ru/static/wander-mark',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/assets/scss/_setup.scss' as *;`,
        },
      },
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})
