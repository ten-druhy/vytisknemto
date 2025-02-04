<script setup>
const props = defineProps({ blok: Object });
const desc = computed(() => renderRichText(props.blok.text));
</script>
<template>
  <div 
  v-editable="blok" v-html="desc"></div>
</template>
