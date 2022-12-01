import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';
import remarkToc from 'remark-toc';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';

const remarkReadingTime = () => {
  // @ts-ignore
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc, remarkReadingTime],
    extendDefaultPlugins: true,
  },
  site: 'https://jaycedotbin.me',
  integrations: [
    sitemap(),
    tailwind(),
    AstroPWA({
      base: '/',
      scope: '/',
      includeAssets: [
        '/favicon/light/favicon.ico',
        '/favicon/dark/favicon.ico',
      ],
      registerType: 'autoUpdate',
      manifest: {
        name: 'John Carlo Austria | Portfolio',
        short_name: 'Portfolio',
        description: "John Carlo Austria's Personal Site",
        theme_color: '#000000',
        background_color: '#FFFFFF',
        start_url: '/',
        orientation: 'any',
        icons: [
          {
            src: '/favicon/light/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/light/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ],
        display: 'standalone',
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
    }),
  ],
});
