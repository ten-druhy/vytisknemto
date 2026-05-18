<script setup lang="ts">
defineProps<{
  title: string
  ctaLabel: string
  ctaTo: string
}>()
</script>

<template>
  <UBanner
    :title="title"
    color="primary"
    :close="false"
    :actions="[{ label: ctaLabel, to: ctaTo, color: 'neutral', variant: 'outline', size: 'sm' }]"
  />
</template>
