import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },

  server: {
    port: 5173,
    strictPort: false,   // allow fallback ports if 5173 is taken
    https: false,
  },

  preview: {
    port: 5173,
    strictPort: false,   // vite preview = the production build = offline works!
  },
})
