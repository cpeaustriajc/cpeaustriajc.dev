import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import type { ViteUserConfig } from "astro/config";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

const viteUserConfig: ViteUserConfig = {
	ssr: {
		noExternal: ["@fontsource/inter"],
	},
};

// https://astro.build/config
export default defineConfig({
	markdown: { remarkPlugins: [remarkToc], extendDefaultPlugins: true },
	site: "https://jaycedotbin.github.io",
	integrations: [tailwind(), sitemap(), image()],
	vite: viteUserConfig,
});
