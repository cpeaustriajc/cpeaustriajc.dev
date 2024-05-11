import { defineCollection, reference, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      keywords: z.array(z.string()),
      author: reference("authors"),
      coverImage: image().refine((img) => img.width >= 360, {
        message: "Cover Image must be at least 1200 pixels wide!",
      }),
      coverImageAlt: z.string(),
      draft: z.boolean(),
    }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      link: z.string().url(),
      description: z.string(),
      status: z.enum(["active", "archived"]),
      site: z.string().url(),
    }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      name: z.string(),
      picture: z.string(),
    }),
});

const metaCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      keywords: z.array(z.string()),
    }),
});

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  authors: authorsCollection,
  meta: metaCollection,
};
