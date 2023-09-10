<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <h1 class="flex-auto text-lg font-semibold text-gray-900 hidden sm:block">
              {{ title.long }}
            </h1>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              {{ title.short }}
            </h1>
          </router-link>
        </div>
        <nav class="md:flex space-x-10 hidden">
          <div v-for="(item, index) in menu" :key="index">
            <div v-if="item.type === 'dropdown'" class="relative">
              <button aria-expanded="false"
                class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button" @click="openMenu(item.status)">
                <span>{{ item.name }}</span>
                <chevron-down-icon class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
              </button>
              <div
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div v-show="menu_collapse[item.status]"
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <div v-for="(child, index) in item.items" :key="index"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer" @click="child.action">
                      <img :alt="child.name" :src="child.icon" class="rounded-full" height="30" width="30">
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ child.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ child.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button v-else-if="item.type === 'function'" aria-expanded="false"
              class="text-base font-medium text-gray-500 hover:text-gray-900" type="button" @click="item.action">
              {{ item.name }}
            </button>
          </div>
        </nav>
        <div class="-mr-2 -my-2 md:hidden">
          <button aria-expanded="false"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            type="button" @click="menu_collapse.mobile_menu = true">
            <span class="sr-only">Open menu</span>
            <bars-4-icon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    <div v-show="menu_collapse.mobile_menu"
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between" @click="menu_collapse.mobile_menu = false">
            <div>
              <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
                {{ title.short }}
              </h1>
            </div>
            <div class="-mr-2">
              <button
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                type="button">
                <span class="sr-only">Close menu</span>
                <x-mark-icon class="h-6 w-6" />
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <div v-for="(item, index) in menu" :key="index">
                <div v-if="item.type === 'dropdown'" class="relative">
                  <button aria-expanded="false"
                    class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                    type="button" @click="openMenu(item.status)">
                    <span>{{ item.name }}</span>
                    <chevron-down-icon class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
                  </button>
                  <div
                    class="absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div v-show="menu_collapse[item.status]"
                      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <div v-for="(child, index) in item.items" :key="index"
                          class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                          @click="child.action">
                          <img :alt="child.name" :src="child.icon" class="rounded-full" height="30" width="30">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ child.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ child.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button v-else-if="item.type === 'function'"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full" type="button"
                  @click="item.action">
                  <img :alt="item.name" :src="item.icon" class="rounded-full" height="30" width="30">
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars4Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const title = ref({
  short: 'template.inte',
  long: 'template.inte - 前端 Web 通用模板'
});

const menu_collapse = ref({
  mobile_menu: false,
  template: false,
  online_service: false
});

const profile = ref(null);

const menu = ref([
  {
    name: '通用模板',
    type: 'dropdown',
    status: 'template',
    items: [
      {
        name: 'template.inte',
        description: '前端 Web 通用模板',
        action: () => window.open('https://github.com/web-tech-tw/template.inte')
      },
      {
        name: 'template.recv',
        description: '後端 API 通用模板',
        action: () => window.open('https://github.com/web-tech-tw/template.recv')
      }
    ]
  },
  {
    name: 'GitHub',
    type: 'function',
    action: () => window.open('https://github.com/web-tech-tw')
  },
  {
    name: profile.value?.nickname || '登入',
    type: 'function',
    action: () => location.assign(process.env.VUE_APP_SARA_INTE_HOST)
  }
]);

const openMenu = (item) => {
  Object.keys(menu_collapse.value).forEach(key => {
    if (key === 'mobile_menu') return;
    if (key === item) {
      menu_collapse.value[key] = !menu_collapse.value[key];
    } else {
      menu_collapse.value[key] = false;
    }
  });
};

const handleMenuItemClick = (item) => {
  if (item.status === menu_collapse.value.template) {
    menu_collapse.value.template = false;
  } else {
    menu_collapse.value.template = item.status;
  }
};

const handleDocumentClick = (e) => {
  if (!document.querySelector('.app-header').contains(e.target)) {
    Object.keys(menu_collapse.value).forEach(key => {
      menu_collapse.value[key] = false;
    });
  }
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
  // You may need to fetch the profile data asynchronously here.
  // For simplicity, it's not included in this code snippet.
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});
</script>
