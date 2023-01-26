import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
	const blog = await getCollection('blog');
	return rss({
		title: 'Blog | John Carlo Austria',
		description:
			"John Carlo Austria's Personal Portfolio, A frontend developer based in the Philippines.",
		site: 'https://jaycedotbin.me',
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}`,
		})),
		customData: `<language>en-us</language>`,
	});
}
