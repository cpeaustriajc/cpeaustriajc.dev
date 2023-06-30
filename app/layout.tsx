import '@/styles/globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://jaycedotbin.me/'
      : 'http://localhost:3000/'
  ),
  manifest:
    process.env.NODE_ENV === 'production'
      ? 'https://jaycedotbin.me/manifest.json'
      : 'http://localhost:3000/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
  title: {
    absolute: 'John Carlo Austria | Portfolio',
    default: 'John Carlo Austria | Portfolio',
  },
  description: "John Carlo Austria's Personal Site",
  alternates: {
    canonical: `https://jaycedotbin.me/`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jaycedotbin',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('h-full', inter.variable, roboto_mono.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'font-sans bg-background text-foreground h-full antialiased'
        )}
      >
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
