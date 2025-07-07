import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [tailwindcss(), react({ jsxRuntime: 'automatic' })],
  preview: { port: 3000 },
  server: { port: 3000, open: true },
});
