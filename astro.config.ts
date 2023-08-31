import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind()],
  site: "https://jaycedotbin.me",
});
