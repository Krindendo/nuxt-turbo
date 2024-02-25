// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "ui"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE,
    },
  },
});
