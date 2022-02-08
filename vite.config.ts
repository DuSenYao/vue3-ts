import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  server: {
    port: 3333,
    open: true
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    // minify: 'terser',
    /**
     * 当 minify=“minify:'terser'” 解开注释
     * Uncomment when minify="minify:'terser'"
     */
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     drop_console: VITE_DROP_CONSOLE,
    //   },
    // },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 为 scss 配置共享全局变量
        additionalData: `@import "@/styles/variable.scss";`
      }
    }
  }
});
