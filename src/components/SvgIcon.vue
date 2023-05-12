<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({
  name: 'SvgIcon'
});

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#4E5969'
  }
});

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.125em;
  height: 1.125em;
  overflow: hidden;
  color: v-bind(color);
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
