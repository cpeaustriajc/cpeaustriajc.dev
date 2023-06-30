import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CANONICAL_URL } from '@/lib/utils'
import { getBlog, getPosts, urlFor } from '@/sanity/utils'
import { format, parse } from 'fecha'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata() {
  const blog = await getBlog()

  const coverImage = urlFor(blog.coverImage)
    .format('jpg')
    .width(1200)
    .height(630)
    .url()

  return {
    metadataBase: new URL(CANONICAL_URL),
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [coverImage],
      url: CANONICAL_URL,
    },
    twitter: {
      images: coverImage,
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      creator: '@jaycedotbin',
      creatorId: '1653679343472877573',
    },
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="px-1 md:px-2 my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {posts.map((post) => {
          const builtImage = urlFor(post.coverImage).width(640).height(360)

          return (
            <Card className="w-[380px]" key={post._id}>
              <Link href={`/blog/post/${post.slug}`}>
                <CardHeader className="pt-0 px-0">
                  <Image
                    src={builtImage.url()}
                    width={builtImage.options.width}
                    height={builtImage.options.height}
                    alt={post.coverImage.altText}
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
          )
        })}
      </div>
    </main>
  )
}
