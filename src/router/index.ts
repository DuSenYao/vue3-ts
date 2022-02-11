// createRouter 用来新建路由实例，createWebHashHistory 用来配置内部使用 hash 模式的路由
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '/@/pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/pages/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
