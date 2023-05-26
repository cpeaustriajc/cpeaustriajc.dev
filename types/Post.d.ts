import { PortableTextBlock } from 'sanity';

export type Post = {
  _id: string;
  _createdAt: string;
  coverImage: {
    _id: string;
    _type: string;
    altText: string;
    description: string;
    tags: string[];
    title: string;
  };
  title: string;
  exerpt: string;
  slug: string;
  keywords: string[];
  publishedAt: string;
  draft: boolean;
  content: PortableTextBlock;
};
