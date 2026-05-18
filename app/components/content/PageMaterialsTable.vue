<script setup lang="ts">
import type { MaterialRow } from '~/types/content'

defineProps<{
  items: MaterialRow[]
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
          { accessorKey: 'material', header: 'Materiál' },
          { accessorKey: 'priceFrom', header: 'Cena od' },
          { accessorKey: 'unit', header: 'Jednotka' },
          { accessorKey: 'note', header: 'Poznámka' }
        ]"
        :data="items"
      />
    </div>
  </UPageSection>
</template>
