<template>
  <div>
    <button class="vt-button" :class="[buttonSize ? `vt-button--${buttonSize}}` : '']">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VTButton'
};
</script>

<script setup lang="ts">
import { withDefaults, computed } from 'vue';
import { useGlobalConfig } from '/@/utils/index';

interface Props {
  size?: '' | 'small' | 'medium' | 'large';
  type?: '' | 'primary' | 'success' | 'danger';
}
const props = withDefaults(defineProps<Props>(), {
  size: '',
  type: ''
});

const globalConfig = useGlobalConfig();
const buttonSize = computed(() => {
  return props.size || globalConfig.size;
});
</script>

<style lang="scss" scoped>
.vt-button--small {
  padding: 4px;
}
</style>
