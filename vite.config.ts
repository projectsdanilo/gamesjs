import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://daniilogamesjs.netlify.app',
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, 'src', 'views'),
      '@app': path.resolve(__dirname, 'src', 'app'),
    },
  },
});
