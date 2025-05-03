export default defineNuxtConfig({
  ssr: false,

  typescript: {
    tsConfig: {
      exclude: ['../service-worker'],
      vueCompilerOptions: {
        target: 3.5,
      },
    },
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

  vuetify: {
    moduleOptions: {
      /* other module options */
      // styles: { configFile: '/settings.scss' },
    },
    vuetifyOptions: {
      /* vuetify options */
      icons: {
        defaultSet: 'mdi',
      },
    },
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
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallbackDenylist: [/^\/api\//],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}'],
      globIgnores: ['emojis/**', 'manifest**.webmanifest'],
      maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
  },

  hooks: {
    'prerender:routes': async function (ctx) {
      // TODO
      // const vaults = await fetch("https://api.kvakushnik.ru/static/wander-mark/content/nav.json").then(
      //   (res) => res.json(),
      // );
      const vaults = [{ sysname: 'Travel' }]

      for await (const vault of vaults) {
        // eslint-disable-next-line node/prefer-global/process
        const nav = await fetch(`${process.env.NUXT_PUBLIC_STATIC_BASE_URL}/content/${vault.sysname}/nav.json`).then(
          res => res.json(),
        )
        const links = generateFilePaths(nav, `/${vault.sysname}`)

        for (const page of links) {
          ctx.routes.add(page)
        }
      }
    },
  },

  components: {
    //
  },

  devServer: {
    port: 5173,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
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
    '/assets/scss/normalize.scss',
  ],

  runtimeConfig: {
    public: {
      staticBaseUrl: 'http://localhost:5173/content/',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '~/assets/scss/_setup.scss';
          `,
          api: 'modern-compiler',
        },
      },
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})

// Define the structure of the JSON nodes using a TypeScript interface
interface FileSystemNode {
  sysname: string
  title: string // Included for completeness, though not used for path generation
  type: 'directory' | 'file'
  children?: FileSystemNode[] // Optional children array for directories
}

/**
 * Recursively traverses the file system structure and collects paths for files.
 * @param node - The current node (file or directory) being processed.
 * @param currentPath - The path built so far leading up to this node.
 * @param filePaths - An array to accumulate the full paths of files found.
 */
function findFilePaths(
  node: FileSystemNode,
  currentPath: string,
  filePaths: string[],
): void {
  // Construct the full path for the current node
  // Avoid double slash if currentPath is just '/' (though our base starts with /Travel)
  const newPath = `${currentPath}/${node.sysname}`

  // If it's a file, add its path to the results array
  if (node.type === 'file') {
    filePaths.push(newPath)
  }
  // If it's a directory and has children, recurse into each child
  else if (node.type === 'directory' && node.children) {
    for (const child of node.children) {
      // Pass the newly constructed path (path to this directory) to the recursive call
      findFilePaths(child, newPath, filePaths)
    }
  }
}

/**
 * Generates an array of file paths starting with a specific base path
 * from a nested JSON structure representing a file system.
 * @param data - The array of root FileSystemNode objects.
 * @param basePath - The prefix for all generated paths (e.g., '/Travel').
 * @returns An array of strings, where each string is a full path to a file.
 */
function generateFilePaths(data: FileSystemNode[], basePath: string = '/Travel'): string[] {
  const allFilePaths: string[] = []

  // Iterate over each root node in the input data
  for (const rootNode of data) {
    // Start the recursive search from each root node
    findFilePaths(rootNode, basePath, allFilePaths)
  }

  return allFilePaths
}
