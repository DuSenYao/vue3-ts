import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
