import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  integrations: [sitemap(), tailwind(), mdx()],
  site: "https://jaycedotbin.me",
});
