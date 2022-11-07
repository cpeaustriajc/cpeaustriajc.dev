---
layout: ../../layouts/Markdown.astro
title: Marathon Updates (November 7, 2022)
description:
    After a few months of it not being maintaned I would be happy to say that marathon is still going being developed! This blog post will tackle on how it will handle the migration from pages to the new app directory.
pubDate: 2022-11-07
date:
    format: 2022-11-07
    content: November 07, 2022
topics:
    - devlog
    - education
    - javascript
    - typescript
    - react
    - nextjs
image_name: marathon-engineering-2
image_alt:
    Latest updates about the next major version of marathon and how it will be migrated to the new nextjs app directory.
draft: false
---

# Marathon Updates

I have to admit that I have not been productive these past few months because this current semester, my college had a huge difficulty spike leaving me having to go in and out of developing the app, adding that with new major version updates of the stack that Marathon uses making it hard to actually develop since there will be a lot of breaking changes once some of these releases have landed. And in JavaScript land, breaking changes are really painful because there are a lot of code that you will have to rewrite for it to be able to get it back up again.

But if done right, it could potentially improve your app because the stack that Marathon uses has a lot to offer with the new updates that it is getting!

Let's start with the new Next.js version that vercel recently released version `13`.

## Next.js 13

> **NOTE**: Nextjs 13 IS STABLE and the only features that are unstable are the
> `@next/font` module, the `app` directory, and turbopack.

Nextjs 13 is considered stable as of Wednesday, October 26th 2022, introducing new experimental features where the most important one is the new `app` directory.

This is the next big thing in Next.js because it is an improvement to the current stable `pages` directory by introducing the following features:

- **Layouts**
- **Server Components**
- **Streaming**
- **Support for Data Fetching**

I am personally very excited with the new app directory, and I believe it will serve as a great starting point for building new pages that require a more complex interface (CMS, Dashboards, etc.) that also maintains state across navigations, avoid expensive re-renders, and enable advance routing patterns. You can also nest layouts and colocate application code within a directory.

### How Marathon will use the new `app` directory

Marathon will use the new `app` directory to be able to build a more complex pages like the CMS and the Dashboard, and as soon as the `app` directory becomes more stable the rest of the pages will gradually be migrated to the `app` directory.

## tRPC

tRPC also introduces a major version bump where there is nothing notably new, just some changes in the api like making it more elegant and more simpler.

But there is a change that tRPC might not be used in the future especially with the heavy use of React Server Components in the `app` directory, as of now, tRPC only lives because of the valuable features it provides.


# Summary

In conclusion, I believe the only things that will change in Marathon is that it will be migrated to the new `app` directory.
