<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/">
          <h1 class="flex-auto text-lg font-semibold text-gray-900 hidden sm:block">
            {{ titleLong }}
          </h1>
          <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
            {{ titleShort }}
          </h1>
        </router-link>
      </div>
      <app-header-normal />
      <app-header-mobile-icon-button class="-mr-2 -my-2 md:hidden" @click="handleMobileMenuBtnOpenClick">
        <bars4-icon class="h-6 w-6" />
      </app-header-mobile-icon-button>
    </div>
  </div>
  <app-header-mobile v-show="isMobileMenuOpened" @close-click="handleMobileMenuBtnCloseClick" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { Bars4Icon } from "@heroicons/vue/24/solid"

import { titleLong, titleShort } from "./AppHeaderMenuData.js";

import AppHeaderNormal from "./AppHeaderNormal.vue";
import AppHeaderMobile from "./AppHeaderMobile.vue";

import AppHeaderMobileIconButton from "./AppHeaderMobileIconButton.vue";

const isMobileMenuOpened = ref(false);

const handleMobileMenuBtnOpenClick = () => {
  isMobileMenuOpened.value = true;
}

const handleMobileMenuBtnCloseClick = () => {
  isMobileMenuOpened.value = false;
}

// const handleDocumentClick = (e) => {
//   if (!document.querySelector('.app-header').contains(e.target)) {
//     Object.keys(menu_collapse.value).forEach(key => {
//       menu_collapse.value[key] = false;
//     });
//   }
// };

// onMounted(() => {
//   document.addEventListener('click', handleDocumentClick);
// });

// onUnmounted(() => {
//   document.removeEventListener('click', handleDocumentClick);
// });
</script>
