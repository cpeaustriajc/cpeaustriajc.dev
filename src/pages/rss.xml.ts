import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return rss({
    title: "John Carlo Austria's Posts | Web Dev, Computer Engineer",
    description:
      "John Carlo Austria's Personal Portfolio, A Computer Engineer based in the Philippines.",
    site: "https://cpeaustriajc.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
