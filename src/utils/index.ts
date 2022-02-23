import { App, Plugin, getCurrentInstance, ComponentInternalInstance } from 'vue';

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance();
  if (!instance) {
    console.log('useGlobalConfig 必须得在 setup 里面使用');
    return;
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {};
}
