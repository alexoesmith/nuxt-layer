<script setup lang="ts">
const isInCompare = defineModel<boolean>();

const toggleCompareMode = () => {
  isInCompare.value = !isInCompare.value;
};
</script>

<template>
  <button
    class="p-2 bg-red-500 text-white rounded-sm"
    @click="toggleCompareMode"
  >
    Add to compare
  </button>
</template>
