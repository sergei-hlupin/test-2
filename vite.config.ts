import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      common: '/src/common',
      pages: '/src/pages',
      services: '/src/services',
      stories: '/src/stories',
      stores: '/src/stores',
    },
  },
});
