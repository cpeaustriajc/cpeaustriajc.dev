import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client';
import { Post } from '@/types/Post';

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            publishedAt,
            exerpt,
            "slug": slug.current,
            content,
    }
    `
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            publishedAt,
            exerpt,
            "slug": slug.current,
            "coverImage": coverImage.asset->url,
            content,
  }
  `,
    { slug }
  );
}
