import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts", ({data}) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return rss({
    title: "Posts | John Carlo Austria",
    description:
      "John Carlo Austria's Personal Portfolio, A frontend developer based in the Philippines.",
    site: "https://jaycedotbin.me",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
