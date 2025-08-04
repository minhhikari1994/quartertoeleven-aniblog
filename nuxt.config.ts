// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/google-fonts'],

  colorMode: {
    preference: 'light',
  },

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Orbitron': true,
    },
  },

  compatibilityDate: '2025-07-16'
})