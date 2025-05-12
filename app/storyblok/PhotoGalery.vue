<script setup lang="ts">
import type { IGalery } from "~/types/galery";
const props = defineProps<{ blok: IGalery }>();
const desc = computed(() => renderRichText(props.blok.description));

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

const modalOpen = ref(false);
const carousel = useTemplateRef("carousel")

function openModal(i: number) {
  modalOpen.value = true;
  setTimeout(() => {
    carousel.value?.emblaApi?.scrollTo(i)
  }, 1)
}
</script>
<template>
  <UContainer>
    <div class="flex">
      <div>
        <h2 class="text-center font-bold text-xl my-2">{{ props.blok.name }}</h2>
        <div v-if="props.blok.description" v-html="desc"></div>
        <div class="grid grid-cols-4 grid-flow-row gap-4">
          <div v-for="(img, imgIndex) of blok.images" :key="img.filename" @click="() => openModal(imgIndex)">
            <NuxtImg provider="storyblok" :src="img.filename" width="360" height="360" :placeholder="[360, 360, 2]"
              class="rounded-lg shadow hover:shadow-2xl" />
            <h3 v-if="img.name">{{ img.name }}</h3>
          </div>
        </div>
      </div>
      <ClientOnly>
        <UModal v-model:open="modalOpen">
          <template #content>
            <UCarousel v-slot="{ item }" :items="blok.images" arrows loop auto-height ref="carousel">
              <NuxtImg provider="storyblok" :src="item.filename" class="max-h-[70dvh] w-full" draggable="false"
                width="720" />
            </UCarousel>
          </template>
        </UModal>
      </ClientOnly>
    </div>
  </UContainer>
</template>
