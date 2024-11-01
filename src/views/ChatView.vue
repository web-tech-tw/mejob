<template>
  <div class="flex justify-center py-32">
    <div class="inline-block">
      <loading-circle-icon class="h-5 w-5 animate-spin inline text-orange-600" />
      <span class="inline ml-2">逃跑中... ＼＼\\٩( 'ω' )و //／／</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import LoadingCircleIcon from "../components/LoadingCircleIcon.vue";

onMounted(() => {
  setTimeout(() => {
    location.href = "/openchat/#/join/mejob";
  }, 1000);
});
</script>
