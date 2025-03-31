export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      useDrafts: process.env.USE_SB_DRAFTS,
    },
  },
  css: ["@/assets/css/roboto.css"],
  devServer: {
    https: true,
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxt/image",
  ],
  image: { domains: ["a.storyblok.com"] },
});
