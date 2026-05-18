<script setup lang="ts">
import type { MaterialCard } from '~/types/content'

defineProps<{
  items: MaterialCard[]
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    id="materialy"
    :ui="{
      root: 'py-16 sm:py-24 scroll-mt-24',
      container: 'max-w-5xl',
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

    <template v-if="$slots.description" #description>
      <Motion as="span" v-bind="scrollMotion(0.2)" class="inline-block">
        <slot name="description" />
      </Motion>
    </template>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <Motion
        v-for="(mat, index) in items"
        :key="mat.name"
        v-bind="staggerMotion(index)"
      >
        <div class="rounded-xl border border-default bg-elevated p-4 text-center">
          <p :class="['text-lg font-bold', mat.color]">{{ mat.name }}</p>
          <p class="text-xs text-dimmed mt-1">{{ mat.props }}</p>
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
