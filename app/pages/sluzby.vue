<script setup lang="ts">
const { data: page } = await useAsyncData('sluzby', () =>
  queryCollection('sluzby').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Stránka nenalezena', fatal: true })
}

useSeoMeta({
  title: page.value?.seo?.title,
  description: page.value?.seo?.description
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
