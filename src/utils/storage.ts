import { ref, watchEffect } from 'vue';

export function useStorage(name: string, value = []) {
  // ref 从本地存储中获取数据，封装成响应式并且返回
  const data = ref(JSON.parse(localStorage.getItem(name) as string) || value);
  // watchEffect 中做本地存储的同步
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
