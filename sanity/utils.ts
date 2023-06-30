import { groq } from 'next-sanity'
import { Post } from '@/types/Post'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getAbout(): Promise<any> {
  return sanityClient.fetch(
    groq`*[_type == "about"][0]{
            title,
            description,
            keywords,
            coverImage
    }`
  )
}

export async function getBlog(): Promise<any> {
  return sanityClient.fetch(
    groq`*[_type == "blog"][0]{
            title,
            description,
            keywords,
            coverImage
    }`
  )
}

export async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            publishedAt,
            exerpt,
            coverImage {
              asset->{
                _type,
                _id,
                altText,
                description,
                "tags": opt.media.tags[]->name.current,
                title
              }
            },
            keywords,
            "slug": slug.current,
            content,
    }
    `
  )
}

export async function getPost(slug: string): Promise<Post> {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            publishedAt,
            exerpt,
            coverImage,
            keywords,
            "slug": slug.current,
            content,
  }
  `,
    { slug }
  )
}
