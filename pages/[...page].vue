<script setup>
const route = useRoute();

const fullPath =
  typeof route.params.page === "string"
    ? route.params.page
    : route.params.page.join("/");

const story = await useAsyncStoryblok(
  fullPath,
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template>
  <PageHeader></PageHeader>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
