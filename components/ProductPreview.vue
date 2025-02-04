<template>
  <NuxtLink :to="product.full_slug">
    <UCard>
      <USkeleton class="h-32 w-32" />
  
      <template #footer>
        <div class="">
          <div>{{ product.name }}</div>
          <div>{{ product.content.price }}</div>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{ product: any }>();
</script>

<style></style>
