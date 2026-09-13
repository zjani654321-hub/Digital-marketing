import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/Digital-marketing/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-spa-404',
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist');
          const indexPath = path.resolve(distDir, 'index.html');
          const notFoundPath = path.resolve(distDir, '404.html');
          const noJekyllPath = path.resolve(distDir, '.nojekyll');

          // Generate 404.html as a duplicate of index.html for GitHub Pages SPA routing
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, notFoundPath);
          }
          // Ensure .nojekyll exists so GitHub Pages serves raw assets and directories
          if (!fs.existsSync(noJekyllPath)) {
            fs.writeFileSync(noJekyllPath, '');
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
