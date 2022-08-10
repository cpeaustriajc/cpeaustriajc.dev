---
layout: ../../layouts/MarkdownLayout.astro
title: Astro Is Amazing!
description:
    Building my personal site with Astro is so good! I would recommend Astro if you want to rebuild
    your personal site!
date: Aug 4, 2022
image_url: /assets/astro.png
image_alt: The banner for Astro, a static site generator
---

~~As of this writing, Astro has finally reached it's release candidate stage and will probably have
a stable release on the end of this year.~~

~~Even though it is still in this state, it already looks promising because it provides amazing
developer experience, and you can use it to build personal portfolio perfectly because it is simple
by design, there are no extra features that you would find when building web applications.~~

Asto has reached **v1.0.0**! Read more about it in this
[blog post](https://astro.build/blog/astro-1/).

## What makes Astro stand out to its other competitors?

### Astro is great! because Astro is...

#### Content focused

It is meant to be for people who would only want text content in their websites with minimal
interactivity. This means that this is good for people who want to build their websites to market
their products, or do a publishing site for writing articles, documentation sites for information
about a certain technology, blogs, personal portfolios and ecommerce sites.

Frameworks like **[Next.js](https://nextjs.org)** can also do this, but it is built on top of React
which is a javascript library for building interactive sites meaning it could potentially add
unnecessary javascript which can slow down your website. It is also not designed to be simple but
flexible, it can do server side, static site, and client side plus it also has a feature called
incremental static regeneration which means in the Next.js [documentation](https://nextjs.org/docs)

> Next.js allows you to create or update static pages after you’ve built your site. Incremental
> Static Regeneration (ISR) enables you to use static-generation on a per-page basis, **without
> needing to rebuild the entire site**. With ISR, you can retain the benefits of static while
> scaling to millions of pages.

Next.js is a great framework but can be overkill if you only want a simple website that rarely gets
update or new content; this is where astro shines as a web framework.

#### Server focused

With server-side rendering first in mind, this will make it easier for the browser to render as it
is already have been rendered in the server before it is viewed in the browser compared to
`create-react-app` or vanilla `vite` which only does client side rendering by default.

> **Note:** you can do server side rendering in vite by using the
> [vite-ssr](https://github.com/frandiox/vite-ssr) plugin but astro has it by default and has some
> good features that makes it easier to use

This can also be done by using other server side framework like PHP, Wordpress, Laravel, Ruby on
Rails, etc.

But the great thing about Astro is that it uses native browser languages like HTML, CSS (SASS is
also supported), JS (Typescript is also supported)

Compared to Single Page Applications, where the browser has to handle some work that the server
should be doing.
