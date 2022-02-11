import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0
    };
  },
  getters: {
    doublue({ count }) {
      return count * 2;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});

export function useStore() {
  return baseUseStore(key);
}
