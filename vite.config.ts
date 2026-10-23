import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
  // Для репозитория username.github.io base путь всегда '/'
  base: '/',
  plugins: [cesium()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
