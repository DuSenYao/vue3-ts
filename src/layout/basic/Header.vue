<template>
  <header class="vt-header"> 头部 </header>
</template>

<script lang="ts">
export default {
  name: 'VTHeader'
};
</script>

<script setup lang="ts">
import { withDefaults } from 'vue';

export interface Props {
  height?: string;
}

// 使用类型声明时的默认 props 值
withDefaults(defineProps<Props>(), {
  height: '60px'
});
</script>

<style lang="scss" scoped>
@import '/@/styles/mixin';

@include b(header) {
  flex-shrink: 0;
  padding: 4px 20px;
}
</style>
