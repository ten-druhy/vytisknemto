<template>
  <NuxtLink :to="`fotogalerie/${product.slug}`">
    <UCard class="w-60 shadow-md">
      <NuxtImg
        :src="product.content.preview.filename"
        :placeholder="[128, 128, 20, 2]"
        width="128"
        height="128"
        fit="cover"
        class="mx-auto"
      />

      <template #footer>
        <div>{{ product.content.name }}</div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { ISbStoryData } from "@storyblok/js";
import type { IGalery } from "~/types/galery";
defineProps<{ product: ISbStoryData<IGalery> }>();
</script>

<style></style>
