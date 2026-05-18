<script setup lang="ts">
import type { ValueCard } from '~/types/content'

defineProps<{
  items: ValueCard[]
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'py-16 sm:py-24',
      container: 'max-w-3xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center'
    }"
  >
    <template v-if="$slots.headline" #headline>
      <Motion as="span" v-bind="scrollMotion()" class="inline-block">
        <slot name="headline" />
      </Motion>
    </template>

    <template v-if="$slots.title" #title>
      <Motion as="span" v-bind="scrollMotion(0.1)" class="inline-block">
        <slot name="title" />
      </Motion>
    </template>

    <div class="grid sm:grid-cols-3 gap-6">
      <Motion
        v-for="(value, index) in items"
        :key="value.title"
        v-bind="staggerMotion(index)"
      >
        <div class="rounded-xl border border-default bg-elevated p-5 text-center">
          <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-3">
            <UIcon :name="value.icon" class="size-5" />
          </div>
          <h3 class="font-semibold text-highlighted">{{ value.title }}</h3>
          <p class="mt-1 text-sm text-dimmed leading-relaxed">{{ value.description }}</p>
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
