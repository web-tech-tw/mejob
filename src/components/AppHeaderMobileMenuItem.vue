<template>
  <button class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full" type="button">
    <img :alt="props.name" :src="props.icon" class="rounded-full" height="30" width="30">
    <span class="ml-3 text-base font-medium text-gray-900">{{ props.name }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  },
});
</script>
