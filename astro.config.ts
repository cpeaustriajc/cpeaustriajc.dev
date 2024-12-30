import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

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
  integrations: [sitemap()],
  site: "https://cpeaustriajc.github.io",
});
