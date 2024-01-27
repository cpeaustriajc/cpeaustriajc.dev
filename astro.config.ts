import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  integrations: [sitemap(), icon()],
  site: "https://jayzers.vercel.app",
});
