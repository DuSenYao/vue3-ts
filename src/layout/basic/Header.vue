<template>
  <header class="vt-header">
    <template v-for="({ name, to }, i) in linkList" :key="to">
      <RouterLink :to="to">{{ name }}</RouterLink>
      <span>{{ linkList.length - 1 !== i ? ' | ' : '' }}</span>
    </template>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

defineOptions({
  name: 'LayoutHeader',
});

export interface Props {
  height?: string;
}

let linkList = reactive([
  {
    name: '首页',
    to: '/',
  },
  {
    name: '关于',
    to: '/about',
  },
]);

// 使用类型声明时的默认 props 值
withDefaults(defineProps<Props>(), {
  height: '60px',
});
</script>

<style lang="scss" scoped>
@use '/@/styles/mixin' as *;

@include b(header) {
  flex-shrink: 0;
  padding: 4px 20px;
}
</style>
