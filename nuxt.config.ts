// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    exposeConfig: true,
  },
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    // "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },
});
