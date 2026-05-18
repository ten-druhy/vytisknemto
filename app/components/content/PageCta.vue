<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  links: { label: string, to: string, color?: string, variant?: string, size?: string }[]
}>()

const { scrollMotion } = usePageMotion()
</script>

<template>
  <UPageCTA
    :title="title"
    :description="description"
    variant="naked"
    :ui="{
      root: 'py-24 sm:py-32',
      container: 'max-w-3xl text-center',
      title: 'lg:text-5xl tracking-tighter whitespace-pre-line',
      description: 'mx-auto max-w-sm leading-relaxed text-dimmed'
    }"
  >
    <template #top>
      <GradientGlow class="bottom-0 w-2/3 h-1/2" />
    </template>

    <template #links>
      <Motion
        class="flex flex-col items-center justify-center gap-4"
        v-bind="scrollMotion(0.2)"
      >
        <UButton
          v-for="link in links"
          :key="link.label"
          v-bind="link"
          size="xl"
        />
      </Motion>
    </template>
  </UPageCTA>
</template>
