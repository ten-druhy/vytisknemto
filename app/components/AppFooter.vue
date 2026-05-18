<script setup lang="ts">
import type { Ref } from 'vue'
import type { FooterContent } from '~/types/content'

const footer = inject<Ref<FooterContent | null>>('footer')

const columns = computed(() => footer?.value?.columns ?? [])
const tagline = computed(() => footer?.value?.tagline ?? '')
const copyrightSuffix = computed(() => footer?.value?.copyrightSuffix ?? '')
const legalLinks = computed(() => footer?.value?.legalLinks ?? [])
</script>

<template>
  <UFooter
    :ui="{
      container: 'border-t border-default lg:py-8',
      right: 'gap-x-0 flex-wrap'
    }"
  >
    <template #top>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-4 py-8 border-b border-default">
        <div class="col-span-2 sm:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-highlighted mb-3">
            <UIcon name="i-lucide-box" class="size-5 text-primary" />
            <span>vytisknem<span class="text-primary">.to</span></span>
          </NuxtLink>
          <p class="text-sm text-dimmed leading-relaxed">
            {{ tagline }}
          </p>
        </div>

        <div
          v-for="col in columns"
          :key="col.label"
        >
          <p class="text-xs font-semibold uppercase tracking-wider text-dimmed mb-3">
            {{ col.label }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="link in col.links"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted hover:text-default transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-sm text-dimmed">
        © {{ new Date().getFullYear() }} vytisknem.to {{ copyrightSuffix }}
      </p>
    </template>

    <template #right>
      <UButton
        v-for="link in legalLinks"
        :key="link.label"
        :label="link.label"
        :to="link.to"
        color="neutral"
        variant="link"
        class="font-light"
        size="sm"
      />
    </template>
  </UFooter>
</template>
