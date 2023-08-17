<script>
  import { createDropdownMenu, melt } from "@melt-ui/svelte";
  import { fly } from "svelte/transition";

  const {
    elements: { menu, item, trigger, arrow },
    states: { open },
  } = createDropdownMenu();
</script>

<header
  class="lg:px-40 p-4 lg:py-10 inline-flex justify-between items-center w-full"
>
  <a href="/">
    <img
      src="/logo.svg"
      width="48"
      height="48"
      alt="John Carlo Austria's Logo"
    />
  </a>
  <nav
    class=" bg-neutral-950 border rounded-full py-2 px-4 border-neutral-800 hidden md:block"
  >
    <ul class="flex flex-row gap-4 items-center">
      <li>
        <a
          href="https://read.cv/jaycedotbin"
          rel="noopener noreferrer"
          target="_blank"
          class="font-medium text-sm leading-6 text-neutral-50"
        >
          Resume
        </a>
      </li>
      <li>
        <a href="/posts" class="font-medium text-sm leading-6 text-neutral-50">
          Posts
        </a>
      </li>
      <li>
        <a
          href="/projects"
          class="font-medium text-sm leading-6 text-neutral-50"
        >
          Projects
        </a>
      </li>
    </ul>
  </nav>
  <a
    href="mailto:cpe.austria.johncarlo@gmail.com"
    class="text-neutral-50 rounded-full min-w-[4rem] min-h-[2rem] justify-center items-center md:inline-flex gap-2 bg-violet-600 px-4 py-1 font-medium text-sm leading-6 hidden"
    >Contact</a
  >
  <button
    type="button"
    class="text-neutral-50 rounded-full justify-center items-center inline-flex md:hidden gap-2 bg-violet-600 px-4 py-1 font-medium text-sm leading-6"
    {...$trigger}
    use:trigger
    ><svg
      width="32"
      height="32"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      /></svg
    ><span class="sr-only">Hamburger Menu</span></button
  >

  {#if open}
    <ul
      class="z-10 max-w-[300px] min-h-[420px]"
      {...$menu}
      use:menu
      transition:fly={{ duration: 150, y: -10 }}
    >
      <li {...$item} use:item>Resume</li>
      <li {...$item} use:item>Posts</li>
      <li {...$item} use:item>Projects</li>
      <li {...$item} use:item>Contact</li>
      <div {...arrow} use:arrow />
    </ul>
  {/if}
</header>
