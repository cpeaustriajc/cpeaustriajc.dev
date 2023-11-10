---
title: Obsidian's new properties feature and how it became the perfect feature for Astro
description: The people at obsidian created a new feature called properties which are frontmatter metadata making it a perfect local CMS for Astro
coverImage: ~/assets/images/posts/using-obsidian-as-a-cms.jpg
coverImageAlt: The logo of Astro at the top and Obsidian at the bottom with a plus icon in the middle
publishDate: 2023-10-15T23:25:00
author: john-carlo-austria
keywords:
  - Obsidian
  - Astro
  - CMS
  - Blog
draft: false
---

Obsidian introduced a new editing feature called properties, in the help section of obsidian, it states that properties help you organize information about a note. Adding properties to a note helps you track structured data such as text, links, dates and numbers.

The properties feature supports the following types:

- Text
- List
- Number
- Checkbox
- Date
- Date & Time

Which are basically basic data types for `yaml` files, which means that when you use markdown files in Astro which supports properties for content collections, it is the perfect way to write markdown files because of the powerful and beautiful markdown editing experience provided by Obsidian and the type safety of Astro's content collection is the perfect combination for a local Content Management System for content heavy sites using the web framework.

To get started with using Obsidian, I opened the content folder in my personal site repository and create a vault in it.
![Open The Vault](~/assets/gifs/open-vault.gif)
Next, I ignored the dot obsidian folder if you are not syncing with git, so append it to your `.gitignore` file

```diff
...
+ .obsidian

```

After that, I created an `_templates` folder in your content collections so that it can be used to create templates for blog posts for obsidian to use in the templates core plugin.

It should look like this:

```
├───_templates
└───posts
```

that way, the Astro compiler will not read the templates folder but can still be seen and specified in obsidian's templates plugin configuration.

In the template folder, I created a `post.md` file with the properties that reflect the ones specified in the `config.ts` file:

```md
---
title:
description:
coverImage:
coverImageAlt:
publishDate:
author:
keywords:
draft: true
---
```

Then after that, I just create a new markdown file with a title format of `YYYY-MM-DD-post-title.md` and use the template

The template can be created by the command palette:
![Insert template by opening the command palette and searching for Templates: Insert Template](~/assets/gifs/insert-template-obsidian.gif)
The down side is that obsidian won't preview image files since it reads images differently. Hopefully there will be a plugin in obsidian that will solve it, as of now, this way works.
