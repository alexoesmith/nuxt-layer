import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@storyblok/nuxt"],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },
});
