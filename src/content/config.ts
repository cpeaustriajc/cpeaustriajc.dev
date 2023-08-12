import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date().default(() => new Date()),
      keywords: z.array(z.string()),
      coverImage: image(),
      draft: z.boolean(),
    }),
});

export const collections = {
  posts: postCollection,
};
