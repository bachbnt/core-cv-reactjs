import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@queries': fileURLToPath(new URL('./src/queries', import.meta.url)),
      '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@themes': fileURLToPath(new URL('./src/themes', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: './tests/unit/setup.ts',
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['**/*.config.*', 'build/**', 'tests/**', 'src/**/index.ts'],
    },
  },
});
