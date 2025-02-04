<template>
  <header
      class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
    >
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-14"
      >
        <div class="lg:flex-1 flex items-center gap-1.5">Vytisknem.to</div>
        <ul class="items-center gap-x-8 hidden lg:flex">
          <ULink v-for="story of stories.data.value"
            :to="`/${story.full_slug}`"
            :active="$route.path === `/${story.full_slug}`"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            {{ story.content.displayName }}
          </ULink>
          <!-- <ULink
            to="/classes"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Classes
          </ULink>
          <ULink
            :active="$route.path.includes('topics')"
            to="/topics"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Topics
          </ULink>
          <ULink
            :active="$route.path.includes('users')"
            to="/users"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Users
          </ULink> -->
        </ul>
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <!-- <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UAvatar :src="profileImg" :alt="userName" />
            <template #account>
            </template>
          </UDropdown> -->
          <ClientOnly>
            <UToggle
              name="theme"
              on-icon="i-heroicons-sun-20-solid"
              off-icon="i-heroicons-moon-20-solid"
              v-model="isLight"
            />
          </ClientOnly>
          <UButton
            icon="i-heroicons-bars-3"
            variant="ghost"
            class="lg:hidden"
            @click="slideOpen = true"
          ></UButton>
        </div>
      </div>
      <USlideover v-model="slideOpen" class="lg:hidden">
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            header: { padding: 'py-2' },
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <div class="flex justify-end">
              <UButton
                icon="i-heroicons-x-mark"
                variant="ghost"
                class="lg:hidden"
                @click="slideOpen = false"
              ></UButton>
            </div>
          </template>
          <UVerticalNavigation :links="links" />
          <template #footer> </template>
        </UCard>
      </USlideover>
    </header>
	<!-- <UHorizontalNavigation :links="links">
		<template #kkd>jebej!</template>
	</UHorizontalNavigation> -->
</template>

<script lang="ts" setup>

const slideOpen = ref(false);
const colorMode = useColorMode();
const isLight = computed({
	get() {
		return colorMode.value === "light";
	},
	set() {
		colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
	},
});

const api = useStoryblokApi();
const config = useRuntimeConfig();
const stories = await useAsyncData(() =>
	api
		.getStories({
			with_tag: "navigation",
			version: config.public.useDrafts ? "draft" : "published",
			sort_by: "sort_by_date",
		})
		.then((res) => res.data.stories)
);
const links = 
	stories.data.value?.map((el) => {
		return { label: el.content.displayName, to: `/${el.full_slug}` };
	}) ?? []
</script>

<style></style>
