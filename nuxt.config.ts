// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-studio'
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'cs' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s — vytisknem.to',
      meta: [
        { name: 'theme-color', content: '#09090b' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'alternate', hreflang: 'cs', href: 'https://vytisknem.to' },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://vytisknem.to'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://vytisknem.to',
    name: 'vytisknem.to',
    description:
      'Profesionální 3D tisk a 3D modelování na míru. Pošlete nám svou představu — my ji vytiskneme.',
    defaultLocale: 'cs',
    indexable: true
  },

  mdc: {
    highlight: {
      noApiRoute: false,
      theme: 'github-dark'
    }
  },

  routeRules: {
    '/': { prerender: false },
    '/sluzby': { prerender: false },
    '/jak-to-funguje': { prerender: false },
    '/cenik': { prerender: false },
    '/o-nas': { prerender: false },
    '/faq': { prerender: false },
    '/galerie': { swr: 3600 },
    '/blog': { swr: 3600 },
    '/blog/**': { swr: 86400 },
    '/kontakt': { ssr: true },
    '/shop/**': { redirect: '/kontakt' }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
    prerender: {
      routes: ['/']
    }
  },

  vite: {
    optimizeDeps: {
      include: []
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    format: ['webp', 'avif'],
    quality: 82,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  robots: {
    disallow: ['/shop/kosik']
  },

  sitemap: {}
  // studio: {
  //   repository: {
  //     provider: 'github', // 'github' or 'gitlab'
  //     owner: 'ten-druhy',
  //     repo: 'vytisknemto',
  //     branch: 'dev'
  //   }
  // }
})
