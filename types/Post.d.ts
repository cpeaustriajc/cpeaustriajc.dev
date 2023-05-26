import { PortableTextBlock } from 'sanity';

export type Post = {
  _id: string;
  _createdAt: string;
  coverImage: {
    _ref: string;
    _type: string;
  };
  title: string;
  exerpt: string;
  slug: {
    current: string;
    _type: string;
  };
  keywords: string[];
  publishedAt: string;
  draft: boolean;
  content: PortableTextBlock;
};
