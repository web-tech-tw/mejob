<template>
    <app-header-normal-menu-item name="載入中..." v-if="loginState === null" />
    <app-header-normal-menu-item name="登入" @click="handleClick" v-else-if="loginState === false" />
    <app-header-normal-menu-item :name="nickname" @click="handleClick" v-else />
</template>

<script setup>
import { ref, computed } from "vue";

import AppHeaderNormalMenuItem from "./AppHeaderNormalMenuItem.vue";

import { useClient } from "../clients/sara.js";

const saraInitHost = import.meta.env.VITE_SARA_INTE_HOST;

const client = useClient();

const loginState = ref(null);

const nickname = computed(() => {
    const { profile } = loginState.value;
    return profile.nickname;
})

const handleClick = () => {
    location.assign(saraInitHost);
}

client.get("users/me").json().then((response) => {
    loginState.value = response;
}).catch((error) => {
    loginState.value = false;
    console.error(error);
});
</script>
