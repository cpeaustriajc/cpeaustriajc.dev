import { z, defineCollection, reference } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string().transform((str) => new Date(str)),
      keywords: z.array(z.string()),
      author: reference('authors'),
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

const skillsCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      icon: z.string(),
      description: z.string(),
    }),
});

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  skills: skillsCollection,
  authors: authorsCollection,
};
