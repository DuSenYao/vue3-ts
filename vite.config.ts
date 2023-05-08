import { defineConfig } from 'vite';
import { resolve } from 'path';

import plugins from 'config/plugins.cjs';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugins()],
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
