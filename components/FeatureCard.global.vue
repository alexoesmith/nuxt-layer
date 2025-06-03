<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-editable="blok"
    class="max-w-sm bg-gray-50 ring ring-gray-200 rounded-xl"
  >
    <div class="aspect-[16/9]">
      <NuxtImg
        :src="blok.image?.filename"
        alt="Feature Image"
        sizes="lg:500px 100vw"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="p-6">
      <h1 class="text-xl font-bold">
        {{ blok.headline }}
      </h1>
      <p class="text-sm/6 mt-6">
        {{ blok.description }}
      </p>
    </div>
  </div>
</template>
