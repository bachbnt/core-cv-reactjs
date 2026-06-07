import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes('firebase/analytics') ||
            id.includes('firebase-analytics')
          ) {
            return 'firebase-analytics';
          }
          if (id.includes('node_modules/firebase')) {
            return 'firebase';
          }
        },
      },
    },
  },
});
