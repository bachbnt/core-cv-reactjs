/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    cssCodeSplit: true,
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['**/*.config.*', 'build/**', 'src/test/**', 'src/**/index.ts'],
    },
  },
});
