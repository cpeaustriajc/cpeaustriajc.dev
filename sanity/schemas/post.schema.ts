import { defineArrayMember, defineField, defineType } from 'sanity'

const postSchema = defineType({
  name: 'post',
  type: 'document',
  title: 'Posts',
  fields: [
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'exerpt',
      title: 'Exerpt',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image', options: { hotspot: true } }),
        defineArrayMember({
          type: 'code',
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'JSON', value: 'json' },
              { title: 'C++', value: 'cpp' },
            ],
            withFilename: true,
          },
        }),
      ],
    }),
  ],
  initialValue: {
    publishedAt: new Date().toISOString(),
  },
})

export default postSchema
