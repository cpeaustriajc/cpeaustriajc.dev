import image from "@astrojs/image";
import lit from "@astrojs/lit";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	integrations: [
		image(),
		tailwind(),
		sitemap({
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
		}),
		lit(),
	],
	site: "https://jaycedotbin.github.io",
	vite: {
		ssr: {
			noExternal: ["@fontsource/inter"],
		},
	},
});
