import type { State } from '/#/store';
import type { GetterTree } from 'vuex';

const getters: GetterTree<State, State> = {
  doublue({ count }) {
    return count * 2;
  }
};

export default getters;
