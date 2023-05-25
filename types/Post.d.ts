import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string;
    _createdAt: string;
    coverImage: string;
    title: string;
    exerpt: string;
    slug: string;
    keywords: string[];
    publishedAt: string;
    draft: boolean;
    content: PortableTextBlock;
};
