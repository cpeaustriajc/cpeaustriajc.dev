export const metadata = {
  title: 'About',
  description: 'About me',
};

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
  );
}
