import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
