import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [sitemap(), tailwind(), markdoc()],
  site: 'https://jaycedotbin.me'
});