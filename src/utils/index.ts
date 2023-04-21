import { getCurrentInstance, type ComponentInternalInstance } from 'vue';

export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance();
  if (!instance) {
    console.log('useGlobalConfig 必须得在 setup 里面使用');
    return;
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {};
}

/**
 * 复制到剪切板
 * @param {string} id
 */
export async function useClipboard(id: string) {
  const el = document.getElementById(id) as HTMLInputElement;
  const value = el.value;
  // 通过 navigator.clipboard 全局访问系统剪切板
  // 使用 clipboard 的 writeText 方法实现复制
  await navigator.clipboard.writeText(value);
}
