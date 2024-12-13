import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(50).max(60),
      description: z.string().min(50).max(160),
      publishDate: z.coerce.date(),
      keywords: z.array(z.string()),
      author: reference("authors"),
      coverImage: image(),
      coverImageAlt: z.string().min(50).max(160),
      draft: z.boolean(),
    }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "src/data/projects" }),
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
  loader: glob({ pattern: "**/*.json", base: "src/data/authors" }),
  schema: () =>
    z.object({
      name: z.string(),
      picture: z.string(),
    }),
});

const metaCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "src/data/meta" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(50).max(60),
      description: z.string().min(50).max(160),
      image: image(),
      imageAlt: z.string().min(50).max(160),
      keywords: z.array(z.string()),
    }),
});

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  authors: authorsCollection,
  meta: metaCollection,
};
