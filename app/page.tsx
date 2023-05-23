import About from './about.mdx';

export const metadata = {
  title: 'About',
  description: 'About me',
};

export default function Home() {
  return (
    <main className="max-w-prose">
      <About />
    </main>
  );
}
