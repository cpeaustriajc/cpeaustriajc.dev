import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), lit()]
});