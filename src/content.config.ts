import { defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const postCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/data/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(50).max(60),
      description: z.string().min(50).max(160),
      publishDate: z.coerce.date(),
      keywords: z.array(z.string()),
      author: reference('authors'),
      coverImage: image(),
      coverImageAlt: z.string().min(50).max(160),
      draft: z.boolean(),
    }),
})

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/data/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      link: z.url(),
      description: z.string(),
      status: z.enum(['active', 'archived']),
      site: z.url(),
    }),
})

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/data/authors' }),
  schema: () =>
    z.object({
      name: z.string(),
      picture: z.string(),
      url: z.url(),
    }),
})

const metaCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/data/meta' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(50).max(60),
      description: z.string().min(50).max(160),
      image: image(),
      imageAlt: z.string().min(50).max(160),
      keywords: z.array(z.string()),
    }),
})

export const collections = {
  posts: postCollection,
  projects: projectsCollection,
  authors: authorsCollection,
  meta: metaCollection,
}
