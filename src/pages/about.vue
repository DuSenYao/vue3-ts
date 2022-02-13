<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">Vue3</h1>
  </transition>
  <Heading :level="1">Hello</Heading>
</template>

<script setup lang="ts">
import Heading from '../components/HeadingLabel.jsx';
import { ref } from 'vue';

let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
