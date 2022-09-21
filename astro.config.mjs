import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: "https://fireisgood.github.io/",
  base: "/astro-testing-site",
  outDir: "./docs",
});
