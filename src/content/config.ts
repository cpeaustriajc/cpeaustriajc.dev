import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        date: z.object({
            format: z.date(),
            content: z.string(),
        }),
        topics: z.array(z.string()),
        image_name: z.string(),
        image_alt: z.string(),
        draft: z.boolean()
    })
});

export const collections = {
	blog: blogCollection,
};
