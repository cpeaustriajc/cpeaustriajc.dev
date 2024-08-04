import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["avatars.githubusercontent.com", "https://emojicdn.elk.sh/"],
  },
  integrations: [sitemap(), icon(), svelte()],
  site: "https://fujiwaracj.github.io",
});
