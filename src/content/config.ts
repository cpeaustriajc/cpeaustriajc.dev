import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string().transform((str) => new Date(str)),
      keywords: z.array(z.string()),
      coverImage: image()
        .refine((img) => img.width >= 360, {
          message: "Cover Image must be at least 1200 pixels wide!",
        }),
      coverImageAlt: z.string(),
      draft: z.boolean(),
    }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      link: z.string().url(),
      coverImage: image(),
      coverImageAlt: z.string(),
    }),
});

const skillsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      link: z.string().url(),
      coverImage: image()
        .refine((img) => img.width >= 360, {
          message: "Cover Image must be at least 360 pixels wide!",
        }),
      coverImageAlt: z.string(),
    }),
});

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  skills: skillsCollection,
};
