import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en-US"
      }
    }
  }), lit()],
  site: "https://jaycedotbin.github.io",
  vite: {
    ssr: {
      noExternal: ["@fontsource/inter"]
    }
  }
});