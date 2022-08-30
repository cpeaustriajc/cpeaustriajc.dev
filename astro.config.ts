import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import type { ViteUserConfig } from "astro/config";
import { defineConfig } from "astro/config";

const viteUserConfig: ViteUserConfig = {
	site: "https://astronaut.github.io",
	ssr: {
		noExternal: ["@fontsource/inter"],
	},
};

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap(), svelte()],
	site: "https://jaycedotbin.github.io",
	vite: viteUserConfig,
});
