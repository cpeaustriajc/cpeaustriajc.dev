import '@/styles/globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
