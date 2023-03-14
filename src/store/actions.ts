import type { ActionTree } from 'vuex';
import type { State } from '/#/store';
import type { RouteRecordRaw } from 'vue-router';
import { SET_REMOVE_ROUTES, REMOVE_ROUTES } from './mutations/constant';

import router from '/@/router';

const actions: ActionTree<State, State> = {
  addRoutes({ commit }, accessRoutes) {
    // 添加动态路由，同时保存移除函数，将来如果需要重置路由可以用到它们
    const removeRoutes: Array<() => void> = [];
    accessRoutes.forEach((route: RouteRecordRaw) => {
      const removeRoute = router.addRoute(route);
      removeRoutes.push(removeRoute);
    });
    commit(SET_REMOVE_ROUTES);
  },
  removeRoutes({ commit }) {
    commit(REMOVE_ROUTES);
  }
};

export default actions;
