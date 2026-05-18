<script setup lang="ts">
import type { ProcessStep } from '~/types/content'

defineProps<{
  steps: ProcessStep[]
  ctaLabel?: string
  ctaTo?: string
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

    <ol class="space-y-12">
      <Motion
        v-for="(step, index) in steps"
        :key="step.number"
        v-bind="staggerMotion(index)"
        as="li"
        class="flex gap-6"
      >
        <div class="flex-shrink-0 flex flex-col items-center">
          <div class="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
            {{ step.number }}
          </div>
          <div class="w-px flex-1 bg-border mt-3" />
        </div>
        <div class="pb-12">
          <div class="flex items-center gap-3 mb-2">
            <UIcon :name="step.icon" class="size-5 text-primary" />
            <h2 class="text-xl font-bold text-highlighted">{{ step.title }}</h2>
          </div>
          <p class="text-muted leading-relaxed">{{ step.description }}</p>
          <p class="mt-2 text-xs text-dimmed font-mono">{{ step.detail }}</p>
        </div>
      </Motion>
    </ol>

    <Motion
      v-if="ctaLabel && ctaTo"
      v-bind="scrollMotion(0.4)"
      class="mt-8 text-center"
    >
      <UButton
        :label="ctaLabel"
        :to="ctaTo"
        color="primary"
        size="xl"
        trailing-icon="i-lucide-arrow-right"
      />
    </Motion>
  </UPageSection>
</template>
