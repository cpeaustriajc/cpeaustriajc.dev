import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    analytics: true,
    imageService: true,
  }),
  integrations: [sitemap(), tailwind()],
  site: "https://jaycedotbin.me",
});
