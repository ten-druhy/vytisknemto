<template>
  <UPageSection
    :id="id"
    :ui="{
      root: 'py-24 sm:py-32 scroll-mt-(--ui-header-height)',
      container: 'max-w-5xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
      title: 'max-w-lg mx-auto leading-10',
      description: 'max-w-md mx-auto text-dimmed'
    }"
  >
    <template
      v-if="$slots.chip"
      #headline
    >
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        <slot
          mdc-unwrap="p"
          name="chip"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        <slot
          mdc-unwrap="p"
          name="title"
        />
      </Motion>
    </template>

    <template
      v-if="$slots.description"
      #description
    >
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        <slot
          mdc-unwrap="p"
          name="description"
        />
      </Motion>
    </template>

    <slot name="content" />
  </UPageSection>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string
}>()
const { scrollMotion } = usePageMotion()
</script>

<style>

</style>
