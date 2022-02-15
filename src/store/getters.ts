import { State } from '/#/store';
import { GetterTree } from 'vuex';

const getters: GetterTree<State, State> = {
  doublue({ count }) {
    return count * 2;
  }
};

export default getters;
