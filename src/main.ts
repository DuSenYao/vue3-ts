import { createApp } from 'vue';
import App from '/@/App.vue';
import router from '/@/router';
import { store, key } from '/@/store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import '/@/styles/index.scss'; // global css

const app = createApp(App);

app.config.globalProperties.$AILEMENTE = {
  size: 'medium'
};

app.use(store, key).use(router).use(ElementPlus).mount('#app');
