<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
const url = useRequestURL();
const route = useRoute()
useSeoMeta({
  title: "vytisknem.to s.r.o",
  description: "Zakázkový 3D tisk a modelování",
  ogTitle: 'vytisknem.to s.r.o',
  ogDescription: 'Zakázkový 3D tisk a modelování',
  ogImage: `${url.protocol}//${url.host}/splash/consulting_1.jpg`,
  ogUrl: `${url.protocol}//${url.host}${route.path}`,
  twitterTitle: 'vytisknem.to s.r.o',
  twitterDescription: 'Zakázkový 3D tisk a modelování',
  twitterImage: `${url.protocol}//${url.host}/splash/consulting_1.jpg`,
  twitterCard: 'summary_large_image',
  ogType: "website"
})
useHead({
  htmlAttrs: {
    lang: "CS-cz"
  },
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" }
  ]
})
</script>
