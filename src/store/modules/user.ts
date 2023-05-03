import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'John Doe'
  }),
  getters: {
    getUserName(state) {
      return state.name;
    }
  },
  actions: {
    setUserName(name: string) {
      this.name = name;
    }
  }
});
