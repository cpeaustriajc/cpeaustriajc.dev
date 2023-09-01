import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string().transform((str) => new Date(str)),
      keywords: z.array(z.string()),
      coverImage: image().refine((img) => img.width >= 1200, {
        message: "Cover Image must be at least 1200 pixels wide!",
      }),
      coverImageAlt: z.string(),
      draft: z.boolean(),
    }),
});

export const collections = {
  posts: postCollection,
};
