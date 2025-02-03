<template>
  <div class="flex shadow">
    <div class="spacer"></div>
    <NuxtLink :to="story.full_slug" v-for="story of stories.data.value" class="mx-2 my-1">{{ story.content.displayName }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const api = useStoryblokApi();

const stories = await useAsyncData(()=>api.getStories({
    with_tag: "navigation",
    version: "draft",
    sort_by: "sort_by_date",
  }).then(res=>res.data.stories))
</script>

<style>
.spacer{
  flex: 1 1 auto
}
</style>
