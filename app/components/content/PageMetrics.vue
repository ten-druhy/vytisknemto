<script setup lang="ts">
defineProps<{
  id?: string
  items: { value: string, label: string, class: string }[]
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :id="id"
    :ui="{
      root: 'py-24 sm:py-32 scroll-mt-(--ui-header-height)',
      container: 'max-w-5xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
      title: 'max-w-lg mx-auto',
      description: 'max-w-md mx-auto text-dimmed'
    }"
  >
    <template v-if="$slots.headline" #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        <slot name="headline" />
      </Motion>
    </template>

    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        <slot name="title" />
      </Motion>
    </template>

    <template v-if="$slots.description" #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        <slot name="description" />
      </Motion>
    </template>

    <div class="rounded-2xl border border-default bg-default overflow-hidden">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
        <Motion
          v-for="(metric, index) in items"
          :key="metric.label"
          v-bind="staggerMotion(index)"
        >
          <UPageCard
            :title="metric.value"
            :description="metric.label"
            class="rounded-none duration-300"
            :ui="{
              root: 'text-center',
              wrapper: 'items-center',
              title: ['text-4xl font-bold tracking-tight leading-none', metric.class],
              description: 'font-mono text-xs uppercase tracking-[0.06em] text-dimmed mt-3'
            }"
          />
        </Motion>
      </div>
    </div>
  </UPageSection>
</template>
