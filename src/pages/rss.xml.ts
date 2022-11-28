import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: 'Blog | John Carlo Austria',
		description:
			"John Carlo Austria's Personal Portfolio, A frontend developer based in the Philippines.",
		site: 'https://jaycedotbin.me',
		items: import.meta.glob('./**/*.md'),
		customData: `<language>en-us</language>`,
	});
