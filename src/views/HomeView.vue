<template>
  <div>
    <div class="my-16 mx-auto py-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">meJob</span>
          <span class="block text-orange-600 xl:inline">咪價</span>
        </h1>
        <p class="mt-3 text-base text-gray-500">
          工作迷 - 自由的工作機會平台，讓你找到最適合的工作。
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              @click="onClickHello"
            >
              找工作
            </button>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
              @click="onClickHello"
            >
              找人才
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <toast-modal v-model="toastMessage" />
</template>

<script setup>
import { ref } from "vue";

import ToastModal from "../components/ToastModal.vue";

const toastMessage = ref("");

const onClickHello = () => {
  toastMessage.value = "還沒還沒！這裡還在一生懸命開發中！";
};
</script>
