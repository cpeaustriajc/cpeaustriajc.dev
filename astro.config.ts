import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["avatars.githubusercontent.com", "emojicdn.elk.sh"],
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-sans",
      },
    ],
  },

  integrations: [sitemap()],
  site: "https://cpeaustriajc.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: "compile",
  }),
});
