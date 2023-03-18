import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    topics: z.array(z.string()),
    cover: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
