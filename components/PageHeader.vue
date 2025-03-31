<template>
  <header
    class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-14"
    >
      <ULink class="lg:flex-1 flex items-center gap-1.5" to="/"
        >Client Consult</ULink
      >
      <ul class="items-center gap-x-8 hidden lg:flex">
        <ULink
          v-for="link of links"
          :to="link.to"
          :active="$route.path === link.to"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ link.label }}
        </ULink>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
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

const links = [
  { label: "O nás", to: "/o-nas" },
  { label: "Reference", to: "/reference" },
  { label: "Fotogalerie", to: "/fotogalerie" },
  { label: "Kontakt", to: "/kontakt" },
];
</script>

<style></style>
