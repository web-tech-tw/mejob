<template>
  <nav class="md:flex space-x-10 hidden">
    <div v-for="(item, index) in menuItems" :key="index">
      <app-header-normal-menu-dropdown :name="item.name" :children="item.children" v-if="item.type === 'dropdown'" />
      <app-header-normal-menu-item :name="item.name" @click="handleItemClick(item)" v-else />
    </div>
  </nav>
</template>

<script setup>
import AppHeaderNormalMenuItem from "./AppHeaderNormalMenuItem.vue"
import AppHeaderNormalMenuDropdown from "./AppHeaderNormalMenuDropdown.vue"

import { menuItems } from "./AppHeaderMenuData.js";

const handleItemClick = (item) => {
  parentMenuState.value = false;
  item.onClick();
}
</script>
