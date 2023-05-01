import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    vanillaExtractPlugin(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
