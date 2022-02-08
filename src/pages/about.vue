<template>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">Vue3</h1>
  </transition>
</template>

<script setup lang="ts">
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
