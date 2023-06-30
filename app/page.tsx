import { getAbout, urlFor } from '@/sanity/utils'

export async function generateMetadata() {
  const about = await getAbout()

  const coverImage = urlFor(about.coverImage)
    .format('jpg')
    .width(1200)
    .height(630)
    .url()

  return {
    title: about.title,
    description: about.description,
    keywords: about.keywords,
    openGraph: {
      title: about.title,
      description: about.description,
      images: [coverImage],
    },
    twitter: {
      images: coverImage,
      card: 'summary_large_image',
      title: about.title,
      description: about.description,
      creator: '@jaycedotbin',
      creatorId: '1653679343472877573',
    },
  }
}

export default function Home() {
  return (
    <main className="max-w-prose mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am a programmer based in Laguna, PH. I am currently studying at
        Pamantasan ng Lungsod ng San Pablo.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I started programming in 2016 by playing around with computer graphics
        and creating shader configurations in various games. Since then, I
        learned multiple programming languages, libraries, frameworks, and
        tools.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am currently focusing on web development because I believe that the
        web is the future and investing in it is a good idea. I wanted to be a
        part of a community where there is something always new in the corner
        and something that hypes me up everytime.
      </p>
    </main>
  )
}
