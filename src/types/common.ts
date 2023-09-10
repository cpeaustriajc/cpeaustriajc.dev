import type { ImageMetadata } from "astro";

export type CardProps = {
  title: string;
  coverImage: ImageMetadata;
  coverImageAlt: string;
  link: string;
};

export type SEOProps = {
  title: string;
  description: string;
  image?: ImageMetadata;
  imageAlt?: string;
  keywords: string[];
};
