<script setup lang="ts">
import type { TurnaroundRow } from '~/types/content'

defineProps<{
  rows: TurnaroundRow[]
}>()

const { scrollMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'py-16 sm:py-24',
      container: 'max-w-4xl',
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

    <div class="overflow-x-auto">
      <UTable
        :columns="[
          { accessorKey: 'category', header: 'Typ zakázky' },
          { accessorKey: 'standard', header: 'Standardní' },
          { accessorKey: 'express', header: 'Expresní (+50 %)' }
        ]"
        :data="rows"
      />
    </div>
  </UPageSection>
</template>
