<script setup lang="ts">
defineProps<{
  rate: string
  minimumNote: string
  ctaLabel: string
  ctaTo: string
}>()

const { scrollMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'py-16 sm:py-24',
      container: 'max-w-2xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center'
    }"
  >
    <template v-if="$slots.headline" #headline>
      <Motion as="span" v-bind="scrollMotion()" class="inline-block">
        <slot name="headline" />
      </Motion>
    </template>

    <template #title>
      <Motion as="span" v-bind="scrollMotion(0.1)" class="inline-block">
        <slot name="title" />
      </Motion>
    </template>

    <Motion v-bind="scrollMotion(0.2)">
      <div class="rounded-2xl border border-default bg-elevated p-6 text-center">
        <p class="text-4xl font-bold text-primary">{{ rate }}</p>
        <p class="mt-2 text-muted text-sm">{{ minimumNote }}</p>
        <UButton :label="ctaLabel" :to="ctaTo" color="primary" class="mt-6" />
      </div>
    </Motion>
  </UPageSection>
</template>
