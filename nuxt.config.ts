// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss','@nuxt/icon', '@nuxtjs/seo'],

  // SEO Configuration
  site: {
    url: 'https://hauri.dev',
    name: 'Marcel Hauri',
    description: 'Developer Experience Engineer, helping teams build better systems, faster.',
    defaultLocale: 'en',
    titleSeparator: '|',
    // Disable automatic title templating to prevent duplication
    trailingSlash: false
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },

  ogImage: {
    enabled: true
  },

  schemaOrg: {
    enabled: true
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      titleTemplate: '%s', // Disable automatic site name appending
      title: 'Marcel Hauri | Developer Experience Engineer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Developer Experience Engineer, helping teams build better systems, faster.' },
        { name: 'keywords', content: 'Developer Experience, DX Engineer, DevOps, AI-assisted development, Engineering Enablement, DORA Metrics, SPACE Framework, API Design, Developer Productivity, Cyber Security Specialist' },
        { name: 'author', content: 'Marcel Hauri' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#000000' },

        // Open Graph
        { property: 'og:title', content: 'Marcel Hauri | Developer Experience Engineer' },
        { property: 'og:description', content: 'Developer Experience Engineer, helping teams build better systems, faster.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hauri.dev' },
        { property: 'og:image', content: 'https://hauri.dev/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Marcel Hauri' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marcel Hauri | Developer Experience Engineer' },
        { name: 'twitter:description', content: 'Developer Experience Engineer, helping teams build better systems, faster.' },
        { name: 'twitter:image', content: 'https://hauri.dev/og-image.png' },
        { name: 'twitter:creator', content: '@mhauri' },
        { name: 'twitter:site', content: '@mhauri' },

        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'canonical', href: 'https://hauri.dev' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
})
