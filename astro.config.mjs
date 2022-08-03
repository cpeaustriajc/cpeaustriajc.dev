import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "jaycedotbin.github.io",
  integrations: [image(), svelte()],
});
