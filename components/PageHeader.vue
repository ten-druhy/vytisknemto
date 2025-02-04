<template>
  <UHorizontalNavigation :links="links"></UHorizontalNavigation>
</template>

<script lang="ts" setup>
const api = useStoryblokApi();
const config = useRuntimeConfig()
const stories = await useAsyncData(()=>api.getStories({
    with_tag: "navigation",
    version: config.public.useDrafts ? "draft" : "published",
    sort_by: "sort_by_date",
  }).then(res=>res.data.stories))
const links = [[],stories.data.value?.map(el=>{return {label:el.content.displayName, to:`/${el.full_slug}`}})?? []]
</script>

<style>
</style>
