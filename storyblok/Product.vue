<script setup>
const props = defineProps({ blok: Object });
const desc = computed(() => renderRichText(props.blok.description));
const customText = ref("Můj text");
</script>
<template>
  <div class="flex">
    <div>
      <div style="background-color: black; width: 300px; height: 300px"></div>
    </div>
    <div>
      <h2>{{ props.blok.name }}</h2>
      <div>cena: {{ props.blok.price }}</div>
      <div v-if="props.blok.customizable">
        <input type="text" v-model="customText" />
      </div>
    </div>
  </div>
  <div v-if="props.blok.description" v-html="desc"></div>
</template>
