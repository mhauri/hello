// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      title: 'Marcel Hauri | Developer Experience Engineer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
      ]
    },
  },
})
