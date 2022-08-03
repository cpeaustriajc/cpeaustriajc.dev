<script lang="ts">
  import { onMount } from "svelte";

  let theme: string = "light";
  let rememberSetting: boolean = false;
  let doc: HTMLElement;

  onMount(() => {
    doc = document.documentElement;
    getCurrentTheme();
  });

  function getCurrentTheme(): void {
    const localStorageTheme = localStorage.getItem("theme");

    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    if (localStorageTheme !== null) {
      theme = localStorageTheme;
    }

    setCurrentTheme();
  }

  function setCurrentTheme(): void {
    if (theme === "light") {
      doc.setAttribute("data-theme", "light");
    } else {
      doc.setAttribute("data-theme", " dark");
    }
  }

  function toggleTheme(): void {
    if (theme === "light") {
      theme = "dark";
      doc.setAttribute("data-theme", "dark");
    } else {
      theme = "light";
      doc.setAttribute("data-theme", "light");
    }

    if (rememberSetting) {
      localStorage.setItem("theme", theme);
    }
  }
</script>

<button
  title={`Enable ${theme === "dark" ? "Light" : "Dark"} Theme`}
  on:click={toggleTheme}
  class="theme-switch btn"
>
  {theme === "dark" ? "Light" : "Dark"}
</button>

<style scoped>
  .theme-switch {
    cursor: pointer;
    touch-action: manipulation;
  }

  /* Utilities */
  .btn {
    background-color: var(--accent-primary);
    border: unset;
    border-radius: 24px;
    color: var(--on-accent-primary);
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    padding: 8px 16px;
    text-transform: capitalize;
  }
</style>
