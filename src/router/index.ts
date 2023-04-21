import type { App } from 'vue';

import { Routes } from './routers/index';
import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
