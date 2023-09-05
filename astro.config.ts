import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    analytics: true,
    imageService: true
  }),
  integrations: [sitemap(), tailwind(), mdx()],
  site: "https://jaycedotbin.me",
});
