<template>
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
          class="rounded-none duration-300 h-full"
          :ui="{
            leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
            title: 'text-sm tracking-tight',
            description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
          }"
        />
      </Motion>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string
  items: { icon: string, title: string, description: string }[]
}>()

const { staggerMotion } = usePageMotion()
</script>

<style>

</style>
