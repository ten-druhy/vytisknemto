<script setup lang="ts">
const route = useRoute();

const fullPath =
  typeof route.params.id === "string"
    ? route.params.id
    : route.params.id.join("/");

const config = useRuntimeConfig();
const story = await useAsyncStoryblok(
  `fotogalerie/${fullPath}`,
  { version: config.public.useDrafts ? "draft" : "published" },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
