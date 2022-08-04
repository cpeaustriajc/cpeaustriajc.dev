import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		image(),
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
				},
			},
		}),
		mdx(),
	],
	site: "https://jaycedotbin.github.io",
	vite: {
		ssr: {
			noExternal: ["@fontsource/inter"],
		},
	},
});
