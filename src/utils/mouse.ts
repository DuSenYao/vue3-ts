// 在使用 Composition API 拆分功能时，ref、computed 等功能都是从 Vue 中单独引入，而不是依赖 this 上下文。可以把组件内部的任何一段代码，从组件文件里抽离出一个独立的文件进行维护。
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(e: any) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
