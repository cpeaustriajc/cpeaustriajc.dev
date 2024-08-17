---
title: How to fix the @apply and @tailwind warnings in VSCode
description: A tutorial on how to fix the @apply and @tailwind warning when using VS Code with TailwindCSS
coverImage: ./2023-09-08-tailwindcss-at-apply-warning.jpg
coverImageAlt: CSS Code in a computer screen
publishDate: 2023-09-08T08:30:24
author: cpeaustriajc
keywords:
  - Tutorial
  - TailwindCSS
  - VS Code
draft: false
---

You bootstrap a new project with TailwindCSS and VSCode hits you with the line saying that the @apply and @tailwind rule doesn't exist.

There are two ways to fix this warning.

You can associate the global stylesheet that contains the `@apply` and `@tailwind` rule with `tailwindcss` using the `files.associations` property in your `settings.json`

```json
{
  // ... Rest of your config
  "files.associations": {
    "*.css": "tailwindcss"
  }
  // ... Rest of your config
}
```

This was a solution provided by a [discussion](https://github.com/tailwindlabs/tailwindcss/discussions/5258#discussioncomment-1979394) in the tailwindcss repository

Add this to your `.vscode/settings.json`:

```json
{
  "css.customData": [".vscode/tailwind.json"]
}
```

Paste this in `.vscode/tailwind.json`:

````json
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `screens` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#tailwind"
        }
      ]
    },
    {
      "name": "@apply",
      "description": "Use the `@apply` directive to inline any existing utility classes into your own custom CSS. This is useful when you find a common utility pattern in your HTML that you’d like to extract to a new component.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
        }
      ]
    },
    {
      "name": "@responsive",
      "description": "You can generate responsive variants of your own classes by wrapping their definitions in the `@responsive` directive:\n```css\n@responsive {\n  .alert {\n    background-color: #E53E3E;\n  }\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#responsive"
        }
      ]
    },
    {
      "name": "@screen",
      "description": "The `@screen` directive allows you to create media queries that reference your breakpoints by **name** instead of duplicating their values in your own CSS:\n```css\n@screen sm {\n  /* ... */\n}\n```\n…gets transformed into this:\n```css\n@media (min-width: 640px) {\n  /* ... */\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#screen"
        }
      ]
    },
    {
      "name": "@variants",
      "description": "Generate `hover`, `focus`, `active` and other **variants** of your own utilities by wrapping their definitions in the `@variants` directive:\n```css\n@variants hover, focus {\n   .btn-brand {\n    background-color: #3182CE;\n  }\n}\n```\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#variants"
        }
      ]
    }
  ]
}
````

Thats it! Those were the two ways to fix the unknown rule when using TailwindCSS, hope it helped!
