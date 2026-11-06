import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/goit-js-hw-10/',
  root: 'src',
  server: { open: true },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'src/index.html'),
        timer: resolve(import.meta.dirname, 'src/1-timer.html'),
        snackbar: resolve(import.meta.dirname, 'src/2-snackbar.html'),
      },
    },
  },
});
