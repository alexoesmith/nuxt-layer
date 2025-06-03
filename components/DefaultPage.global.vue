<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container mx-auto px-2 py-10">
    <StoryblokComponent
      v-for="bodyBlok in blok.body"
      :key="bodyBlok._uid"
      :blok="bodyBlok"
    />
  </div>
</template>
