<script setup lang="ts">
interface ServiceCta {
  label: string
  to: string
}

interface ServiceItem {
  slug: string
  icon: string
  title: string
  description: string
  features: string[]
  cta?: ServiceCta
}

defineProps<{
  items: ServiceItem[]
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'py-16 sm:py-24',
      container: 'max-w-5xl',
      headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center'
    }"
  >
    <template v-if="$slots.headline" #headline>
      <Motion as="span" v-bind="scrollMotion()" class="inline-block">
        <slot name="headline" />
      </Motion>
    </template>

    <template v-if="$slots.title" #title>
      <Motion as="span" v-bind="scrollMotion(0.1)" class="inline-block">
        <slot name="title" />
      </Motion>
    </template>

    <template v-if="$slots.description" #description>
      <Motion as="span" v-bind="scrollMotion(0.2)" class="inline-block">
        <slot name="description" />
      </Motion>
    </template>

    <div class="space-y-8">
      <Motion
        v-for="(service, index) in items"
        :id="service.slug"
        :key="service.slug"
        v-bind="staggerMotion(index)"
        class="rounded-2xl border border-default bg-elevated p-6 sm:p-8 scroll-mt-24"
      >
        <div class="flex items-start gap-4 mb-4">
          <div class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
            <UIcon :name="service.icon" class="size-6" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-highlighted">{{ service.title }}</h2>
            <p class="mt-1 text-muted leading-relaxed">{{ service.description }}</p>
          </div>
        </div>

        <ul class="mt-4 grid sm:grid-cols-2 gap-2">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="flex items-center gap-2 text-sm text-default"
          >
            <UIcon name="i-lucide-check" class="size-4 text-primary shrink-0" />
            {{ feature }}
          </li>
        </ul>

        <div v-if="service.cta" class="mt-6">
          <UButton
            :label="service.cta.label"
            :to="service.cta.to"
            color="primary"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
