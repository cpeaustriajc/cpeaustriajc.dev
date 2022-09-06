export interface Frontmatter {
	description: string;
	title: string;
	date: {
		format: string;
		content: string;
	};
	topics: Array<string>;
	image_name: string;
	image_alt: string;
	draft: boolean;
}
