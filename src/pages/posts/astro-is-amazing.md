---
layout: ../../layouts/MarkdownLayout.astro
title: Astro Is Amazing!
description:
    Building my personal site with Astro is so good! I would recommend Astro if you want to rebuild
    your personal site!
date:
    format: 2022-04-06
    content: Aug 4, 2022
topics:
    - astro
    - webdev
    - technology
image_name: astro
image_alt: The Banner for Astro, a Static Site Generator
draft: false
---

## Table of Contents

~~As of this writing, Astro has finally reached it's release candidate stage and will probably have
a stable release on the end of this year.~~

~~Even though it is still in this state, it already looks promising because it provides amazing
developer experience, and you can use it to build personal portfolio perfectly because it is simple
by design, there are no extra features that you would find when building web applications.~~

[Astro][astro-homepage] has reached **v1.0.0**! Read more about it in this [blog
post][astro-1.0-post].

## What makes Astro stand out to its other competitors?

### Astro is great! because Astro is...

#### Content focused

It is meant to be for people who would only want text content in their websites with minimal
interactivity. This means that this is good for people who want to build their websites to market
their products, or do a publishing site for writing articles, documentation sites for information
about a certain technology, blogs, personal portfolios and ecommerce sites.

Frameworks like **[Next.js][nextjs-homepage]** can also do this, but it is built on top of React
which is a javascript library for building interactive sites meaning it could potentially add
unnecessary javascript which can slow down your website. It is also not designed to be simple but
flexible, it can do server side, static site, and client side plus it also has a feature called
incremental static regeneration which means in the [Next.js documentation][nextjs-docs].

> Next.js allows you to create or update static pages after you’ve built your site. Incremental
> Static Regeneration (ISR) enables you to use static-generation on a per-page basis, **without
> needing to rebuild the entire site**. With ISR, you can retain the benefits of static while
> scaling to millions of pages.

Next.js is a great framework but can be overkill if you only want a simple website that rarely gets
update or new content; this is where Astro shines as a web framework.

#### Server focused

With server-side rendering first in mind, this will make it easier for the browser to render as it
is already have been rendered in the server before it is viewed in the browser compared to
`create-react-app` or vanilla `vite` which only does client side rendering by default.

> **Note:** you can do server side rendering in vite by using the [vite-ssr] plugin but Astro has it
> by default and has some good features that makes it easier to use

This can also be done by using other server side framework like PHP, Wordpress, Laravel, Ruby on
Rails, etc.

But the great thing about Astro is that it uses native browser languages like HTML, CSS (SASS is
also supported), JS (Typescript is also supported).

Compared to Single Page Applications, where the browser has to handle some work that the server
should be doing.

#### Fast!

The [Astro compiler][astro-compiler] is written in [Go][go-homepage], the programming language that
[esbuild][esbuild-homepage] uses. Go is a modern programming language that is used to build
[Cloud and Network Services](https://go.dev/solutions/cloud),
[Command-line Interfaces (CLIs)](https://go.dev/solutions/cloud),
[Web Applications](https://go.dev/solutions/webdev), to suppport
[Development Operations & Site Reliability Engineering](https://go.dev/solutions/devops), in this
case, the Astro team used it to build a compiler that is distributed as WASM which makes it
extremely fast.

Pairing with [Vite][vite-homepage] under the hood, it results in a fast compilation time with a
great developer experience making you build faster websites!

[Astro's][astro-homepage] goal is to [**make it impossible to build a slow website with
it.**][astro-fast-by-default]

#### Easy!

While building my website with Astro only, it really felt familiar, this is because it has a JSX
syntax similar to react, it also uses other syntax and features that are used in [vue][vue-homepage]
and [svelte][svelte-homepage] like the [Single File Component][vue-sfc], making it easier to build
Astro components.

This is because one of the designs of Astro was to **make it accessible to every web developer**.

For example, you can use react by just adding typing the command:

```sh
# Using NPM
npx astro add react
# Using YARN
yarn astro add react
# Using PNPM
pnpm dlx astro add react
```

Also, Astro was heavily influenced by HTML; any kind of html is valid in Astro! It is basically a
combination of the best features of [React (JSX)][react-jsx], [Vue][vue-css-scoping] and
[Svelte][svelte-css-scoping] (CSS Scoping).

It is minimal by design and complexity is **opt-in**, or in other words, you can make it complex
incrementally!

#### Fully featured to be flexible

**Astro is an all-in-one web framework that comes with everything that a web developer needs to
build a website.** Astro already includes a component syntax, file-based routing, asset handling, a
build process, bundling, optimizations, data-fetching, and others. These are already good enough for
you to build a website; Although you don't need to know all of these really well to build a good
website.

It is extendable by adding integrations like [TailWind][tailwind-homepage] for utility styling,
[React][react-homepage] or [Svelte][svelte-homepage] (I highly recommend pairing
[Svelte][svelte-homepage] with Astro!) for client-side or interactive components. It basically IS an
all-in-one web framework!

## Basically...

Astro is AMAZING, I definitely made the right decision when I was deciding what stack to use to
build my personal site, I am really glad I used [astro][astro-homepage] as it is so good at what it
is supposed to do! I am wishing the best of luck for the Astro team and I hope that Astro becomes
even more popular as time goes on!

## References

### Astro Links

-   [Astro 1.0 Post][astro-1.0-post]
-   [Astro Compiler][astro-compiler]
-   [Astro Documentation][astro-documentation]
-   [Astro is fast by default][astro-fast-by-default]
-   [Astro Homepage][astro-homepage]

### ESBuild Links

-   [ESBuild Homepage][esbuild-homepage]

### Go Links

-   [Go Homepage][go-homepage]
-   [Go for Cloud and Network Services Development][go-solutions-cloud]
-   [Go for Command-line Interfaces][go-solutions-clis]
-   [Go for Web Development][go-solutions-webdev]

### Next.js Links

-   [Next.js Documentation][nextjs-docs]
-   [Next.js Homepage][nextjs-homepage]

### TailWind CSS Links

-   [TailWind Homepage][tailwind-homepage]
-   [TailWind Documentation][tailwind-docs]

### Vite Links

-   [Vite][vite-homepage]
-   [Vite SSR][vite-ssr]

[astro-1.0-post]: https://astro.build/blog/astro-1/
[astro-compiler]: https://github.com/withastro/compiler/
[astro-documentation]: https://docs.astro.build/en/getting-started/
[astro-fast-by-default]: https://docs.astro.build/en/concepts/why-astro/#fast-by-default
[astro-homepage]: https://astro.build
[esbuild-homepage]: https://esbuild.github.io/
[go-homepage]: https://go.dev/
[go-solutions-cloud]: https://go.dev/solutions/cloud
[go-solutions-clis]: https://go.dev/solutions/clis
[go-solutions-webdev]: https://go.dev/solutions/webdev
[go-solutions-devops]: https://go.dev/solutions/devops
[nextjs-homepage]: https://nextjs.org/
[nextjs-docs]: https://nextjs.org/docs
[react-docs]: https://reactjs.org/docs
[react-jsx]: https://reactjs.org/docs/introducing-jsx.html
[react-homepage]: https://reactjs.org
[svelte-homepage]: https://svelte.dev
[vite-homepage]: https://vitejs.dev
[vite-ssr]: https://github.com/frandiox/vite-ssr
[vue-homepage]: https://vuejs.org
[vue-sfc]: https://vuejs.org/guide/scaling-up/sfc.html
[tailwind-docs]: https://tailwindcss.com/docs/installation
[tailwind-homepage]: https://tailwindcss.com
