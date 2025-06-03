<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="text-5xl font-bold">
      {{ blok.headline }}
    </h1>
    <p class="text-lg/7 mt-5">
      {{ blok.text }}
    </p>
  </div>
</template>
