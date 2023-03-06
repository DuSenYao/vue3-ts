// createRouter 用来新建路由实例，createWebHashHistory 用来配置内部使用 hash 模式的路由
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import { getToken } from '/@/utils/auth';
import NProgress from 'nprogress';
import LAYOUT from '/@/layout/basic/index.vue';

const WHITE_LIST = ['/login'];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('/@/pages/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: LAYOUT,
    children: [{ path: '/', component: () => import('/@/pages/Home.vue') }]
  },
  {
    path: '/about',
    name: 'About',
    component: LAYOUT,
    children: [{ path: '/about', component: () => import('/@/pages/About.vue') }]
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
