import { getPosts } from '@/sanity/utils';
import { format, parse } from 'fecha';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-prose mx-auto">
      <h1>Blog</h1>

      {posts.map((post) => (
        <div className='flex flex-row justify-between' key={post._id}>
          <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>

          <time dateTime={post.publishedAt}>{format(parse(post.publishedAt, 'isoDateTime')!, 'longDate')}</time>
        </div>
      ))}
    </main>
  );
}
