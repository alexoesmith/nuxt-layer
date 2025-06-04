<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const { toggleCompare, isItemInCompare } = useCompareStore();
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
        provider="storyblok"
        format="webp"
        sizes="lg:500px 100vw"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="p-6 space-y-5">
      <h1 class="text-xl font-bold">
        {{ blok.headline }}
      </h1>
      <p class="text-sm/6">
        {{ blok.description }}
      </p>
      <p class="font-bold">
        {{ isItemInCompare(blok._uid) ? "In Compare" : "Not in Compare" }}
      </p>
      <CompareButton @click="toggleCompare(blok._uid)" />
    </div>
  </div>
</template>
