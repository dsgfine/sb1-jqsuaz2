import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/my-path/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        screen: resolve(__dirname, 'screen.html'),
      },
    },
  },
})