import { getPosts } from '@/sanity/utils';
import { format, parse } from 'fecha';
import Link from 'next/link';

export const revalidate = 60;

export const metadata = {
  title: 'Blog - John Carlo Austria',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-prose mx-auto my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        All Posts
      </h1>

      {posts.map((post) => (
        <div className="flex flex-row justify-between my-4" key={post._id}>
          <Link
            href={`/blog/post/${post.slug}`}
          >
            {post.title}
          </Link>

          <time dateTime={post.publishedAt}>
            {format(parse(post.publishedAt, 'isoDateTime')!, 'longDate')}
          </time>
        </div>
      ))}
    </main>
  );
}
