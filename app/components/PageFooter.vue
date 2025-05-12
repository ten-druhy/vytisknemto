<template>
  <footer
    class="bg-background/75 backdrop-blur border-b -mb-px static z-50 border-gray-200 dark:border-gray-800 bottom-0"
  >
    <USeparator class="mt-2" />
    <UContainer>
      <div
        class="sm:px-6 lg:px-8 max-w-7xl flex items-center justify-center h-14"
      >
        <span>© Client Consult {{ currentYear }}</span>
      </div>
    </UContainer>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

