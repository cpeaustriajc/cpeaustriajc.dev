import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [sitemap(), tailwind(), svelte()],
  site: "https://jaycedotbin.me",
});
