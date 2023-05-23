import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        {...props}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className="scroll-m-20 text-2xl font-semibold tracking-tight"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className="scroll-m-20 text-xl font-semibold tracking-tight"
      />
    ),
    p: (props) => (
      <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />
    ),
    blockquote: (props) => (
      <blockquote {...props} className="mt-6 border-l-2 pl-6 italic" />
    ),
    ul: (props) => (
      <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />
    ),
    ol: (props) => (
      <ol {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />
    ),
    table: (props) => (
      <div className="my-6 w-full overflow-y-auto">
        <table {...props} className="w-full" />
      </div>
    ),
    td: (props) => (
      <td
        {...props}
        className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      />
    ),
    th: (props) => (
      <th
        {...props}
        className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      />
    ),
    tr: (props) => <tr {...props} className="m-0 border-t p-0 even:bg-muted" />,
    ...components,
  };
}
