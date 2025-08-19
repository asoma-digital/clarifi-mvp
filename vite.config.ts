import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  // Required for client-side routing to work on static hosts like GitHub Pages
  plugins: [
    react(),
    {
      name: 'html-fallback',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (!req.url?.includes('.') && req.url !== '/') {
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
});