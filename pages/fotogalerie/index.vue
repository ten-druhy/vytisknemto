<template>
  <div
    v-editable="blok"
    class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
  >
    <div v-for="story of stories.data.value">
      <ProductPreview :product="story"></ProductPreview>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const api = useStoryblokApi();
const stories = await useAsyncData(() =>
  api
    .getStories({
      by_slugs: "fotogalerie/*",
      version: config.public.useDrafts ? "draft" : "published",
    })
    .then((res) => res.data.stories)
);
</script>
