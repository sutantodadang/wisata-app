// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'https://default-url.com',
      eksternalUrl: process.env.EKSTERNAL_URL || 'https://default-url.com'
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/image"],
  compatibilityDate: "2024-12-01",
  extends: ['@shuriken-ui/nuxt'],
})