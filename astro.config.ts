import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import remarkToc from "remark-toc";

const remarkReadingTime = () => {
	// @ts-ignore
	return (tree, { data }) => {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);

		data.astro.frontmatter.minutesRead = readingTime.text;
	};
};

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkToc, remarkReadingTime],
		extendDefaultPlugins: true,
	},
	site: "https://jaycedotbin.github.io",
	integrations: [sitemap(), image()],
});
