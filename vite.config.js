import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gelato-d-amore',
  minify: false, // Disables minification of css generated from sass
});
