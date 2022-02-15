import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from '/#/store';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      removeRoutes: []
    };
  },
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});

export function useStore() {
  return baseUseStore(key);
}
