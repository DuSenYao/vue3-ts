import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: `${pathResolve('src')}/`
      },
      {
        find: /\/#\//,
        replacement: `${pathResolve('types')}/`
      }
    ]
  },
  server: {
    port: 3333,
    open: true
  },
  build: {
    target: 'es2017',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 为 scss 配置共享全局变量
        additionalData: `@import "/@/styles/variable.scss";`
      }
    }
  }
});
