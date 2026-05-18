<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const { data: page } = await useAsyncData('home', () => queryCollection('home').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Stránka nenalezena', fatal: true })
}

useSeoMeta({
  title: page.value?.seo?.title || 'Profesionální 3D tisk a modelování na míru',
  description: page.value?.seo?.description || 'Pošlete nám svou představu a my ji vytiskneme. Rychle, přesně, česky.'
})

defineOgImage('NuxtSeo.takumi')
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
