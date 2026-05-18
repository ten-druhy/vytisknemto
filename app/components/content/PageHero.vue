<script setup lang="ts">
defineProps<{ links: { label: string, to: string }[] }>()
const { enterMotion } = usePageMotion()
</script>

<template>
  <UPageHero
    :ui="{
      root: 'pb-24 sm:pb-32',
      container: 'relative z-10 pt-16 sm:pt-24 lg:pt-32',
      wrapper: 'flex flex-col items-center',
      title: 'sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[1.05]',
      description: 'mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-default',
      links: 'gap-3'
    }"
  >
    <template #top>
      <GradientGlow class="top-0 w-2/3 h-1/2" />
    </template>

    <template #headline>
      <Motion
        v-if="$slots.badge"
        v-bind="enterMotion(0.2)"
      >
        <UBadge
          color="neutral"
          variant="soft"
          class="rounded-full px-3 py-1.5 gap-1.5 bg-white/5 backdrop-blur"
        >
          <template #leading>
            <UChip
              inset
              standalone
              :ui="{ base: 'animate-pulse ring-0' }"
            />
          </template>
          <template #default>
            <slot name="badge" />
          </template>
        </UBadge>
      </Motion>
    </template>

    <template #title>
      <Motion
        as="span"
        v-bind="enterMotion(0.35)"
        class="inline-block"
      >
        <slot name="title" />
        <br v-if="$slots.claim" />
        <span
          v-if="$slots.claim"
          class="animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent"
          :style="{
            backgroundImage: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))',
            animationDuration: '10s'
          }"
        >
          <slot
            name="claim"
            mdc-unwrap="p"
          />
        </span>
      </Motion>
    </template>

    <template #description>
      <Motion
        as="span"
        v-bind="enterMotion(0.5)"
        class="inline-block"
      >
        <slot name="description" />
      </Motion>
    </template>

    <template #links>
      <Motion
        class="flex flex-wrap justify-center gap-3"
        v-bind="enterMotion(0.65)"
      >
        <UButton
          v-for="link in links"
          :key="link.label"
          v-bind="link"
        />
      </Motion>
    </template>
  </UPageHero>
</template>
