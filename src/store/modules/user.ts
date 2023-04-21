import { defineStore } from 'pinia';

defineStore({
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
    setUserName(name) {
      this.name = name;
    }
  }
});
