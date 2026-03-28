import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  base: './', // Using relative base to ensure asset resolution in different environments
  define: {
    'process.env': {}, // Polyfill for libraries that expect process.env
  },
  build: {
    chunkSizeWarningLimit: 2000, // Increase threshold for large 3D/Animation libraries
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool')) return 'vendor-spline';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor-core';
          }
        }
      }
    }
  }
});