<script setup lang="ts">
import type { ISbStoryData } from "@storyblok/js";
import type { IGalery } from "~/types/galery";
const props = defineProps<{ blok: IGalery }>();
const desc = computed(() => renderRichText(props.blok.description));
// const customText = ref("Můj text");

// const replaceKeys = (src?:string)=>{
//   if(src === "") return
//   const res = src?.replace("{{name}}", props.blok.name).replace("{{price}}", props.blok.price)
//   return res
// }

// useSeoMeta({
//   title: replaceKeys(props.blok.og_title),
//   description: replaceKeys(props.blok.og_description),
//   ogTitle: replaceKeys(props.blok.og_title),
//   ogDescription: replaceKeys(props.blok.og_description),
//   ogImage: props.blok.og_image_url?.filename,
//   // ogUrl: '[og:url]',
//   // twitterTitle: '[twitter:title]',
//   // twitterDescription: '[twitter:description]',
//   // twitterImage: '[twitter:image]',
//   // twitterCard: 'summary'
// })

function getImgSizes(url: string) {
  const [width, height] = url
    .split("/")[5]
    .split("x")
    .map((el) => parseInt(el));
  return { placeholder: [width, height, 15, 2], width, height };
}
const modalOpen = ref(false);
const modalIndex = ref(0);
const modalContent = ref<IGalery["images"][number] | null>(null);

function openModal(i: number) {
  modalOpen.value = true;
  modalIndex.value = i;
  modalContent.value = props.blok.images[modalIndex.value];
}
</script>
<template>
  <div class="flex">
    <div>
      <h2 class="text-center font-bold text-xl my-2">{{ props.blok.name }}</h2>
      <div v-if="props.blok.description" v-html="desc"></div>
      <div class="grid grid-cols-4 grid-flow-row gap-2">
        <div
          v-for="(img, imgIndex) of blok.images"
          :key="img.filename"
          @click="() => openModal(imgIndex)"
        >
          <NuxtImg
            :src="img.filename"
            width="360"
            height="360"
            fit="cover"
            :placeholder="[360, 360, 15, 2]"
            class="rounded-lg"
          />
          <h3 v-if="img.name">{{ img.name }}</h3>
        </div>
      </div>
      <!-- <div>cena: {{ props.blok.price }}</div>
      <div v-if="props.blok.customizable">
        <input type="text" v-model="customText" />
      </div> -->
    </div>
    <ClientOnly>
      <UModal v-model="modalOpen">
        <NuxtImg :src="modalContent?.filename" class="max-h-[70dvh]" />
        <!-- <template #title>{{ modalContent?.filename }}</template> -->
        <!-- <template #content>
          <Placeholder class="h-48 m-4" />
        </template> -->
        <!-- <template #content>
          <div>{{ modalContent }}</div>
        </template> -->
      </UModal>
    </ClientOnly>
  </div>
</template>
