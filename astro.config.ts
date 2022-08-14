import type { SitemapOptions } from "@astrojs/sitemap";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import type { ViteUserConfig } from "astro/config";
import { defineConfig } from "astro/config";

const sitemapOptions: SitemapOptions = {
	customPages: [
		"https://jaycedotbin.vercel.app/about",
		"https://jaycedotbin.vercel.app/blog",
		"https://jaycedotbin.vercel.app/resume",
		"https://jaycedotbin.vercel.app/uses",
		"https://jaycedotbin.vercel.app/posts/astro-is-amazing",
	],
	i18n: {
		defaultLocale: "en",
		locales: {
			en: "en-US",
		},
	},
};
const viteUserConfig: ViteUserConfig = {
	ssr: {
		noExternal: ["@fontsource/inter"],
	},
};

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	integrations: [tailwind(), sitemap(sitemapOptions), svelte()],
	site: "https://jaycedotbin.github.io",
	vite: viteUserConfig,
});
