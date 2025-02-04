<script setup>
const route = useRoute();

const fullPath =
  typeof route.params.page === "string"
    ? route.params.page
    : route.params.page.join("/");

const config = useRuntimeConfig()
const story = await useAsyncStoryblok(
  fullPath,
  { version: config.public.useDrafts ? "draft" : "published", },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template>
  <UContainer>
  <PageHeader class="mb-2"></PageHeader>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
