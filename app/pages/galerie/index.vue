<template>
    <UContainer>
        <!-- {{ stories }} -->
        <div class="flex flex-wrap gap-4 items-stretch justify-center">
            <NuxtLink v-for="(card, index) of stories.data.value" :to="`/galerie/${card.slug}`" :key="index">
                <UCard class="shadow hover:shadow-xl hover:text-(--ui-primary) transition-shadow ease-in-out w-64 h-full"
                    :key="index">
                    <template #header>
                        <NuxtImg 
                            provider="storyblok"
                            :src="card.content.preview.filename"
                            :placeholder="[200, 200, 2]"
                            width="200"
                            height="200"
                            class="mx-auto"
                        />
                    </template>
                    <div>
                      <h4>{{ card.content.name }}</h4>
                    </div>
                  </UCard>
            </NuxtLink>
        </div>
    </UContainer>
    <!-- <div
      class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
    >
      <div v-for="story of stories.data.value">
        <ProductPreview :product="story"></ProductPreview>
      </div>
    </div> -->
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
      .then((res) => res.data.stories).then(res=>[...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,...res,])
  );
  </script>
  