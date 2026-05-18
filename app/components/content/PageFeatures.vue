<script setup lang="ts">
defineProps<{
  id?: string
  items: { icon: string, title: string, description: string }[]
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
    <template
      v-if="$slots.headline"
      #headline
    >
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        <slot
          mdc-unwrap="p"
          name="headline"
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

    <div class="rounded-2xl border border-default bg-default overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        <Motion
          v-for="(item, index) in items"
          :key="item.title"
          v-bind="staggerMotion(index)"
        >
          <UPageCard
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            class="rounded-none duration-300"
            :ui="{
              leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
              title: 'text-sm tracking-tight',
              description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
            }"
          />
        </Motion>
      </div>
    </div>
  </UPageSection>
</template>
