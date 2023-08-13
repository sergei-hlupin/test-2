import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      common: '/src/common',
      pages: '/src/pages',
      services: '/src/services',
      stories: '/src/stories',
    }
  },
})
