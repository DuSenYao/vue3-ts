<template>
  <button :class="['vt-button', buttonSize ? `vt-button--${buttonSize}` : '']">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalConfig } from '/@/utils/index';

defineOptions({
  name: 'VTButton'
});

export interface Props {
  size?: '' | 'small' | 'medium' | 'large';
  type?: '' | 'primary' | 'success' | 'danger';
}
const props = withDefaults(defineProps<Props>(), {
  size: '',
  type: ''
});

const globalConfig = useGlobalConfig();
const buttonSize = computed(() => props.size || globalConfig.size);
</script>

<style lang="scss" scoped>
.vt-button--small {
  padding: 4px;
}
</style>
