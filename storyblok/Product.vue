<script setup lang="ts">
const props = defineProps<{blok:any}>();
const desc = computed(() => renderRichText(props.blok.description));
const customText = ref("Můj text");

const replaceKeys = (src?:string)=>{
  if(src === "") return
  const res = src?.replace("{{name}}", props.blok.name).replace("{{price}}", props.blok.price)
  return res
}

useSeoMeta({
  title: replaceKeys(props.blok.og_title),
  description: replaceKeys(props.blok.og_description),
  ogTitle: replaceKeys(props.blok.og_title),
  ogDescription: replaceKeys(props.blok.og_description),
  ogImage: props.blok.og_image_url?.filename,
  // ogUrl: '[og:url]',
  // twitterTitle: '[twitter:title]',
  // twitterDescription: '[twitter:description]',
  // twitterImage: '[twitter:image]',
  // twitterCard: 'summary'
})
</script>
<template>
  <div class="flex">
    <div>
      <USkeleton class="h-64 w-64" />
    </div>
    <div>
      <h2>{{ props.blok.name }}</h2>
      <div>cena: {{ props.blok.price }}</div>
      <div v-if="props.blok.customizable">
        <input type="text" v-model="customText" />
      </div>
    </div>
  </div>
  <div v-if="props.blok.description" v-html="desc"></div>
</template>
