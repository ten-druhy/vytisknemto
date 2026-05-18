<script setup lang="ts">
import type { PricingPlan } from '~/types/content'

defineProps<{
  items: PricingPlan[]
}>()

const { scrollMotion, staggerMotion } = usePageMotion()
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

    <div class="grid sm:grid-cols-2 gap-6">
      <Motion
        v-for="(plan, index) in items"
        :key="plan.title"
        v-bind="staggerMotion(index)"
      >
        <div
          :class="[
            'rounded-2xl border p-6 h-full flex flex-col',
            plan.highlight ? 'border-primary bg-primary/5' : 'border-default bg-elevated'
          ]"
        >
          <h2 class="text-xl font-bold text-highlighted">{{ plan.title }}</h2>
          <p class="mt-1 text-sm text-muted">{{ plan.description }}</p>
          <p class="mt-4 text-3xl font-bold text-highlighted">{{ plan.price }}</p>
          <ul class="mt-4 space-y-2 flex-1">
            <li
              v-for="feat in plan.features"
              :key="feat"
              class="flex items-center gap-2 text-sm text-default"
            >
              <UIcon name="i-lucide-check" class="size-4 text-primary shrink-0" />
              {{ feat }}
            </li>
          </ul>
          <UButton
            :label="plan.cta"
            :to="plan.to"
            :color="plan.highlight ? 'primary' : 'neutral'"
            :variant="plan.highlight ? 'solid' : 'outline'"
            class="mt-6 w-full justify-center"
          />
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
