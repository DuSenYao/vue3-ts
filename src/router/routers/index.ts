import type { RouteRecordRaw } from 'vue-router';

import LAYOUT from '/@/layout/basic/index.vue';

const RootRoute = {
  path: '/',
  name: 'Home',
  children: [{ path: '/', component: () => import('/@/pages/Home.vue') }]
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/pages/Login.vue')
};

export const NotFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('/@/404.vue')
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
