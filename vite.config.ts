import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
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
    open: true
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    sourcemap: process.env.NODE_ENV === 'development'
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
