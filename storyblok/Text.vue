<script setup>
const props = defineProps({ blok: Object });
const desc = computed(() => renderRichText(props.blok.text));
</script>
<template>
  <div v-html="desc"></div>
</template>
