import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import removeConsole from 'vite-plugin-remove-console';
import Sitemap from 'vite-plugin-sitemap';

const staticRoutes = [
  // '/',
  '/portfolio',
  '/about',
  '/contact',
  '/career',
  '/open-resources',
  '/news',
  '/business',
  '/request-proposal',
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
];

// Follows pagination ("next") until every item is fetched
async function fetchAll(api, path) {
  let url = `${api}${path}`;
  const out = [];
  while (url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sitemap fetch failed: ${url} -> ${res.status}`);
    const data = await res.json();
    out.push(...(data.results || []));
    url = data.next;
  }
  return out;
}

export default defineConfig(async ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const api = env.VITE_API_URL;

  let dynamicRoutes = [...staticRoutes];

  // Only hit the API during a real build, not in dev
  if (command === 'build') {
    if (!api) throw new Error('VITE_API_URL is not set, cannot build sitemap');
    const [projects, news, jobs] = await Promise.all([
      fetchAll(api, 'projects/?page=1'),
      fetchAll(api, 'news/?page=1&page_size=100'),
      fetchAll(api, 'jobs/'),
    ]);
    dynamicRoutes = [
      ...staticRoutes,
      ...projects.map((p) => `/project-description/${p.id}-${p.slug}`),
      ...news.map((n) => `/news/${n.id}`),
      ...jobs.map((j) => `/jobs/${j.id}`),
    ];
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      removeConsole({ exclude: ['error', 'warn'] }),
      Sitemap({
        hostname: 'https://ssncorporation.com',
        dynamicRoutes,
        changefreq: 'weekly',
        priority: 0.7,
      }),
    ],
    build: {
      outDir: process.env.BUILD_DIR || 'dist',
    },
    // Pre-rendering (vite-react-ssg)
    ssgOptions: {
      dirStyle: 'nested',
      script: 'async',
      formatting: 'minify',
    },
  };
});