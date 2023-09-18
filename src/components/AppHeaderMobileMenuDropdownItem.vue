<template>
  <div class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
    <img :alt="props.name" :src="props.icon" class="rounded-full" height="30" width="30">
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900">
        {{ props.name }}
      </p>
      <p class="mt-1 text-sm text-gray-500">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  }
});
</script>
