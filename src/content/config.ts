import { defineCollection, reference, z } from "astro:content";

function refineTitle() {
  return {
    check: (title: string) => title.length >= 50 || title.length <= 60,
    message: "Title must be between 50 and 60 characters!",
  };
}

function refineDescription() {
  return {
    check: (desc: string) => desc.length >= 50 || desc.length <= 160,
    message: "Description must be between 50 and 160 characters!",
  };
}

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().refine(refineTitle),
      description: z.string().refine(refineDescription),
      publishDate: z.date(),
      keywords: z.array(z.string()),
      author: reference("authors"),
      coverImage: image().refine((img) => img.width >= 1200, {
        message: "Cover Image must be at least 1200 pixels wide!",
      }),
      coverImageAlt: z.string().refine(refineDescription),
      draft: z.boolean(),
    }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string().refine(refineTitle),
      link: z.string().url(),
      description: z.string().refine(refineDescription),
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
      title: z.string().refine(refineTitle),
      description: z.string().refine(refineDescription),
      image: image(),
      imageAlt: z.string().refine(refineDescription),
      keywords: z.array(z.string()),
    }),
});

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  authors: authorsCollection,
  meta: metaCollection,
};
