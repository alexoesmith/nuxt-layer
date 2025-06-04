export const useCompareStore = defineStore(
  "compare",
  () => {
    const compareItems = ref<string[]>([]);

    const toggleCompare = (itemId: string) => {
      if (compareItems.value.includes(itemId)) {
        compareItems.value = compareItems.value.filter((id) => id !== itemId);
      } else {
        compareItems.value.push(itemId);
      }
    };

    const isItemInCompare = (itemId: string): boolean => {
      return compareItems.value.includes(itemId);
    };

    return {
      compareItems,
      isItemInCompare,
      toggleCompare,
    };
  },
  {
    persist: {
      key: "compare-store",
      pick: ["compareItems"],
    },
  }
);
