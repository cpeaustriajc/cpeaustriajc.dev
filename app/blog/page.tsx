import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPosts, urlFor } from '@/sanity/utils';
import { format, parse } from 'fecha';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export const metadata = {
  title: 'Blog - John Carlo Austria',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="px-1 md:px-2 my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {posts.map((post) => {
          const builtImage = urlFor(post.coverImage)
            .width(640)
            .height(360)
            .format('webp');

          return (
            <Card className="w-[380px]" key={post._id}>
              <Link href={`/blog/post/${post.slug.current}`}>
                <CardHeader className="pt-0 px-0">
                  <Image
                    src={builtImage.url()}
                    width={builtImage.options.width}
                    height={builtImage.options.height}
                    alt={post.title}
                    priority
                    className="rounded-t-md aspect-video"
                  />
                  <div className="px-2">
                    <CardTitle>{post.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-2">
                  <CardDescription>{post.exerpt}</CardDescription>
                </CardContent>
                <CardFooter className="px-2">
                  <time dateTime={post.publishedAt}>
                    {format(
                      parse(post.publishedAt, 'isoDateTime')!,
                      'longDate'
                    )}
                  </time>
                </CardFooter>
              </Link>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
