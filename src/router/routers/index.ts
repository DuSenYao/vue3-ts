import type { RouteRecordRaw } from 'vue-router';

import LAYOUT from '/@/layout/basic/index.vue';

const RootRoute = {
  path: '/',
  name: 'Home',
  children: [{ path: '/', component: () => import('/@/pages/home.vue') }]
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('../../pages/login/index.vue')
};

export const NotFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('../../pages/NotFound/404.vue')
};

export const router: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'About',
    component: LAYOUT,
    children: [{ path: '/about', component: () => import('/@/pages/About.vue') }]
  }
];

export const Routes: RouteRecordRaw[] = [RootRoute, LoginRoute, ...router, NotFoundRoute];
