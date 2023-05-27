import { getPost, urlFor } from '@/sanity/utils';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { components } from '@/components/ui/portable-text-components';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  const coverImage = urlFor(post.coverImage).format('jpg').width(1200).height(630).url();

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === 'production'
        ? 'https://jaycedotbin.me/'
        : 'http://localhost:3000'
    ),
    title: post.title,
    description: post.exerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.exerpt,
      images: [coverImage],
    },
  };
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <main className="max-w-prose mx-auto my-4">
      <header className="space-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
      </header>
      <article>
        <PortableText components={components} value={post.content} />
      </article>
    </main>
  );
}
