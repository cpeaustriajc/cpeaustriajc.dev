<script lang="ts">
  import { clsx } from "clsx";

  export let coverImage: string;
  export let coverImageAlt: string;
  export let title: string;
  export let link: string;
  export let orientation: "portrait" | "landscape";

  const aspectRatio = clsx(
    orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
  );
</script>

<a href={link} target="_blank">
  <article
    class={`relative w-full h-full shadow-2xl shadow-neutral-900 ${aspectRatio}`}
  >
    <img
      class={`-z-10 absolute h-full w-full ${aspectRatio}`}
      src={coverImage}
      alt={coverImageAlt}
    />
    <div
      class={`flex flex-col h-full justify-center items-center motion-safe:xl:opacity-0 motion-safe:xl:hover:opacity-100 motion-safe:xl:hover:backdrop-blur-lg motion-reduce:opacity-100 motion-reduce:shadow-inner backdrop-brightness-[.25] motion-reduce:transition-none transition-all motion-safe:ease-in-out motion-safe:duration-500 shadow-2xl min-w-[320px]`}
    >
      <h3 class="text-neutral-50 text-5xl font-bold">{title}</h3>
    </div>
  </article>
</a>
