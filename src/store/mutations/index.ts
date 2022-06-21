import { MutationTree } from 'vuex';
import router from '../../router';
import { State } from '/#/store';
import { SET_REMOVE_ROUTES, REMOVE_ROUTES } from './constant';

const mutations: MutationTree<State> = {
  [SET_REMOVE_ROUTES](state, arr: [] = []) {
    state.removeRoutes = arr;
  },
  [REMOVE_ROUTES](state) {
    state.removeRoutes.forEach((route) => {
      router.removeRoute(route);
    });
    state.removeRoutes = [];
  }
};

export default mutations;
