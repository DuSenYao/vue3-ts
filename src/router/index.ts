// createRouter 用来新建路由实例，createWebHashHistory 用来配置内部使用 hash 模式的路由
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import { getToken } from '/@/utils/auth';
import NProgress from 'nprogress';

const WHITE_LIST = ['/login'];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('/@/pages/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(async (to) => {
  NProgress.start();

  const token = getToken();

  if (token) {
    if (to.path === '/login') {
      return '/';
    }
    return true;
  }

  if (WHITE_LIST.includes(to.path)) return true;

  return '/login';
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
