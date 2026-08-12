import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import removeConsole from 'vite-plugin-remove-console';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    removeConsole({
      exclude: ['error', 'warn'] // optional: keep console.error and console.warn
    }),
    Sitemap({
      hostname: 'https://ssncorporation.com',
      dynamicRoutes: [
        '/',
        '/portfolio',
        '/about',
        '/contact',
        '/career',
        '/open-resources',
        '/news',
        '/business',
        '/request-proposal',
        '/quote',
        '/engineers',
        '/contractors',
        '/tenant-fit-outs',
        '/research-and-development',
        '/building-service-design',
        '/land-planning',
        '/structural-engineering',
        '/construction-administration',
        '/material-testing',
        '/geotechnical-engineering',
        '/construction-engineering',
        '/water-resources-engineering',
        '/general-construction',
        '/pre-construction',
        '/construction-management',
        '/design-plus-build',
        '/specialty-services',
        '/gallery',
        '/qtakeoff-ai',
        '/real-estate-site-analysis',
      ],
      changefreq: 'weekly',
      priority: 0.7,
    })
  ]
});