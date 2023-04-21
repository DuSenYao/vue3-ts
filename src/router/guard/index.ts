import type { Router } from 'vue-router';
import { getToken } from '/@/utils/auth';

import NProgress from 'nprogress';

const WHITE_LIST = ['/login'];

export function setupRouterGuard(router: Router) {
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
}
