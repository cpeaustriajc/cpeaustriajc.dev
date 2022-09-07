import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	markdown: { remarkPlugins: [remarkToc], extendDefaultPlugins: true },
	site: "https://jaycedotbin.github.io",
	integrations: [tailwind(), sitemap(), image()],
});
