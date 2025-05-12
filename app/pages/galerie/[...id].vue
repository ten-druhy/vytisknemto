<script setup lang="ts">
const route = useRoute();
const url = useRequestURL();
if (!route.params.id) {
  await navigateTo('/galerie')
}

const fullPath =
  typeof route.params.id === "string"
    ? route.params.id
    : route.params.id!.join("/");

const config = useRuntimeConfig();
const story = await useAsyncStoryblok(
  `fotogalerie/${fullPath}`,
  { version: config.public.useDrafts ? "draft" : "published" },
  //   { customParent: "https://app.storyblok.com" }
);
useSeoMeta({
  description: story.value.content.name,
  ogDescription: story.value.content.name,
  ogImage: story.value.content.preview.filename,
  twitterDescription: story.value.content.name,
  twitterImage: story.value.content.preview.filename,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
