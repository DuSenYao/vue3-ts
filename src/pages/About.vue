<template>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">{{ count }}</h1>
  </transition>
  <HeadingLabel :level="1">Hello World</HeadingLabel>

  <XlsxPage />

  <textarea id="content" name="textarea" cols="30" rows="10"></textarea>
  <el-button @click="useClipboard('content')">复制内容到剪切板</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '/@/utils/index';

import XlsxPage from './Xlsx.vue';
import HeadingLabel from '/@/components/HeadingLabel';

let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}

function fib(n: number): number {
  let arr = [1, 1];
  let i = 2;
  while (i <= n) {
    arr[i] = arr[i - 1] + arr[i - 2];
    i += 1;
  }
  return arr[n];
}

let count = ref(fib(38));
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
