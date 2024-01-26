import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {theme: "vitesse-black" },
  },
  site: "https://jayzers.vercel.app",
});
