<template>
  <div
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center shadow"
    v-editable="product"
  >
    <NuxtLink :to="product.full_slug">{{ product.name }}</NuxtLink>
    <div>{{ product.content.name }}</div>
    <div>{{ product.content.price }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ product: any }>();
</script>

<style></style>
