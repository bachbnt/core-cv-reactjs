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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('firebase/analytics') || id.includes('firebase-analytics')) {
            return 'firebase-analytics';
          }
          if (id.includes('node_modules/firebase')) {
            return 'firebase';
          }
          if (id.includes('node_modules/@mui/icons-material')) {
            return 'mui-icons';
          }
          if (
            id.includes('node_modules/@mui') ||
            id.includes('node_modules/@emotion')
          ) {
            return 'mui';
          }
          if (
            id.includes('node_modules/@reduxjs') ||
            id.includes('node_modules/redux') ||
            id.includes('node_modules/react-redux') ||
            id.includes('node_modules/redux-persist') ||
            id.includes('node_modules/redux-logger') ||
            id.includes('node_modules/redux-thunk')
          ) {
            return 'redux';
          }
          if (
            id.includes('node_modules/i18next') ||
            id.includes('node_modules/react-i18next')
          ) {
            return 'i18n';
          }
          if (
            id.includes('node_modules/react-hook-form') ||
            id.includes('node_modules/yup') ||
            id.includes('node_modules/@hookform')
          ) {
            return 'forms';
          }
          if (id.includes('node_modules/react-material-ui-carousel')) {
            return 'carousel';
          }
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/react/')
          ) {
            return 'vendor';
          }
        },
      },
    },
  },
});
