import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
  // for repo username.github.io base path always '/'
  base: '/',
  plugins: [cesium()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
