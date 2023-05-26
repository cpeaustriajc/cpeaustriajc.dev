import { groq } from 'next-sanity';
import { Post } from '@/types/Post';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            publishedAt,
            exerpt,
            coverImage,
            keywords,
            slug,
            content,
    }
    `
  );
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
            slug,
            content,
  }
  `,
    { slug }
  );
}
