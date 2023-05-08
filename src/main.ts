import App from '/@/App.vue';

import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';

import 'virtual:svg-icons-register'; // svg

import '/@/styles/index.scss'; // global css

function bootstrap() {
  const app = createApp(App);

  // 配置状态管理
  setupStore(app);

  // 配置路由器
  setupRouter(app);

  // 配置路由守卫
  setupRouterGuard(router);

  app.mount('#app');
}
bootstrap();
