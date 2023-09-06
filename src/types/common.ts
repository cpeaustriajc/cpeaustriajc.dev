import type { ImageMetadata } from "astro";

export type CardProps = {
  title: string;
  coverImage: ImageMetadata;
  coverImageAlt: string;
  link: string;
};
