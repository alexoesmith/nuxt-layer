import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@storyblok/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    componentsDir: "./components",
  },

  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },

  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ["./stores"],
  },
});
