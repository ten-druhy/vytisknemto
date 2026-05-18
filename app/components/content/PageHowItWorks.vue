<script setup lang="ts">
defineProps<{
  id?: string
  steps: { title: string, description: string }[]
  link?: { label: string, to: string }
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :id="id"
    :ui="{
      root: 'py-24 sm:py-32 scroll-mt-(--ui-header-height)',
      container: 'max-w-3xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
      title: 'max-w-lg mx-auto'
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

    <ol class="mt-8 space-y-8">
      <Motion
        v-for="(step, index) in steps"
        :key="step.title"
        v-bind="staggerMotion(index)"
        as="li"
        class="flex gap-4 items-start"
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

    <Motion
      v-if="link"
      v-bind="scrollMotion(0.4)"
      class="mt-10 text-center"
    >
      <UButton
        :label="link.label"
        :to="link.to"
        color="neutral"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
      />
    </Motion>
  </UPageSection>
</template>
