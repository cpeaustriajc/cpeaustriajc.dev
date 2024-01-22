import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: true,
  }),
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  integrations: [sitemap(), tailwind(), mdx()],
  markdown: {
    shikiConfig: { wrap: true, theme: "vitesse-black" },
  },
  site: "https://jayzers.vercel.app",
});
