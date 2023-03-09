import { z, defineCollection, image } from "astro:content";

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
    cover: image(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
