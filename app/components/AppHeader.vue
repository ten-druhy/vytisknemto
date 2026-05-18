<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
import type { Ref } from 'vue'
import type { NavContent } from '~/types/content'

const nav = inject<Ref<NavContent | null>>('nav')

const navItems = computed(() => nav?.value?.navLinks ?? [])
const ctaButton = computed(() => nav?.value?.ctaButton)
const ctaMobileLabel = computed(() => nav?.value?.ctaMobileLabel ?? 'Nezávazná poptávka')

const variants: Record<string, VariantType | ((custom: unknown) => VariantType)> = {
  normal: { rotate: 0, y: 0, opacity: 1 },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  }
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-highlighted">
        <UIcon name="i-lucide-box" class="size-6 text-primary" />
        <span>vytisknem<span class="text-primary">.to</span></span>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="navItems"
      variant="link"
    />

    <template #right>
      <UButton
        :label="ctaButton?.label ?? 'Poptávka'"
        color="primary"
        class="hidden lg:flex"
        :to="ctaButton?.to ?? '/kontakt'"
        :leading-icon="ctaButton?.icon ?? 'i-lucide-mail'"
      />
    </template>

    <template #toggle="{ open, toggle, ui }">
      <UButton
        size="sm"
        variant="ghost"
        color="neutral"
        square
        :aria-label="open ? 'Zavřít menu' : 'Otevřít menu'"
        :aria-expanded="open"
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.line
            x1="4" y1="6" x2="20" y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
            class="outline-none"
          />
          <motion.line
            x1="4" y1="12" x2="20" y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
            class="outline-none"
          />
          <motion.line
            x1="4" y1="18" x2="20" y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
            class="outline-none"
          />
        </svg>
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
      />
      <div class="mt-4">
        <UButton
          :label="ctaMobileLabel"
          color="primary"
          block
          :to="ctaButton?.to ?? '/kontakt'"
          leading-icon="i-lucide-mail"
        />
      </div>
    </template>
  </UHeader>
</template>
