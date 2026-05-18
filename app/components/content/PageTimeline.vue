<template>
  <ol class="mt-8 space-y-8">
    <Motion
      v-for="(step, index) in steps"
      :key="step.title"
      v-bind="staggerMotion(index)"
      as="li"
      class="flex gap-4 items-start md:max-w-1/2 mx-auto"
    >
      <div class="shrink-0 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
        {{ index + 1 }}
      </div>
      <div>
        <h3 class="font-semibold text-base text-highlighted">
          {{ step.title }}
        </h3>
        <p class="mt-1 text-sm text-dimmed leading-relaxed">
          {{ step.description }}
        </p>
      </div>
    </Motion>
  </ol>
</template>

<script lang="ts" setup>
import type { TimelineItem } from '@nuxt/ui'

defineProps<{
  id?: string
  steps: TimelineItem[]
}>()
const { staggerMotion } = usePageMotion()
</script>

<style>

</style>
