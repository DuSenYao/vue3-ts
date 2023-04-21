import { defineStore } from 'pinia';

interface AppState {
  count: number;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    count: 0
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  actions: {
    increment() {
      this.count += 1;
    }
  }
});
