<template>
  <header class="bg-(--ui-bg-accented)/45 backdrop-blur -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-14">
      <ULink class="lg:flex-1 flex items-center gap-1.5" to="/"
        inactive-class="text-(--ui-primary)/65 hover:text-(--ui-primary)">
        <NuxtImg src="/logo.png" alt="Logo" width="45" />
        <h1>Vytisknem.to</h1>
      </ULink>
      <ul class="items-center gap-x-8 hidden lg:flex">
        <li v-for="link of links" :key="link.to as string">
          <ULink :to="link.to" :active="$route.path === link.to" active-class="text-(--ui-primary)" class="font-bold"
            inactive-class="text-(--ui-text) hover:text-(--ui-primary)">
            {{ link.label }}
          </ULink>
        </li>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ClientOnly>
          <USwitch name="theme" checked-icon="i-lucide-sun" unchecked-icon="i-lucide-moon" v-model="isLight"
            aria-label="Změna barevného režimu" />
        </ClientOnly>
        <UButton icon="i-lucide-menu" variant="ghost" class="lg:hidden" @click="slideOpen = true"></UButton>
      </div>
    </div>
    <USlideover v-model:open="slideOpen" close-icon="i-lucide-x" class="lg:hidden">

      <template #body>
        <UNavigationMenu orientation="vertical" :items="links" />
      </template>
    </USlideover>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const slideOpen = ref(false);
const colorMode = useColorMode();
const isLight = computed({
  get() {
    if (colorMode.value === "system") {
      return colorMode.preference === "light"
    }
    return colorMode.value === "light";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const links: NavigationMenuItem[] = [
  { label: "O nás", to: "/o-nas", onSelect: () => { slideOpen.value = false } },
  { label: "Reference", to: "/reference", onSelect: () => { slideOpen.value = false } },
  { label: "Fotogalerie", to: "/galerie", onSelect: () => { slideOpen.value = false } },
  { label: "Kontakt", to: "/kontakt", onSelect: () => { slideOpen.value = false } },
];
</script>

<style></style>
