import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';

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
    }),
    viteCompression({
      threshold: 1024000 // 对大于 1mb 的文件进行压缩
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
    sourcemap: import.meta.env.DEV
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
