<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <UPageHero
    :title="title"
    :description="description"
    :ui="{ root: 'py-16 sm:py-24' }"
  />
</template>
