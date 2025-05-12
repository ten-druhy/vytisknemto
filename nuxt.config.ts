// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineOrganization } from 'nuxt-schema-org/schema'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@storyblok/nuxt',
    'nuxt-schema-org',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/turnstile',
    'nuxt-nodemailer',
    '@nuxtjs/device',
  ],

  css: ['~/assets/css/main.css'],
  turnstile: {
    siteKey: "1x00000000000000000000AA",
    addValidateEndpoint: true
  },
  runtimeConfig: {
    public: {
      useDrafts: "true",
    },
    turnstile: {
      secretKey: "2x0000000000000000000000000000000AA"
    }
  },
  robots: {
    blockNonSeoBots: true,
  },
  sitemap: {
    sources: [
      "/api/__sitemap__/galeries"
    ]
  },

  nodemailer: {
    from: '"Client Consult Web" <noreply@web.app>',
    service: "gmail",
    auth: {
      user: "",
      pass: ""
    },
  },
  future: {
    compatibilityVersion: 4
  },
  colorMode: {
    storage: "cookie",
    preference: "system",
    fallback: "light"
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },

  image: {

    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  schemaOrg: {
    identity: defineOrganization({
      name: 'Client Consult s.r.o.',
      logo: "/logo.png",
      image: [],
      address: {
        addressCountry: "CZ",
        addressLocality: "Praha",
        postalCode: "130 00",
        streetAddress: "Táboritská 880/14",
        addressRegion: "Praha 3",
      },
      sameAs: ["https://www.facebook.com/clientconsultsro/",]
    })

  },
  compatibilityDate: '2024-11-27'
})