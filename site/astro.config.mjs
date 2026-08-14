import { defineConfig } from "astro/config";

// GitHub Pages: https://brightwav3.github.io/merely-a-responsive-kernel/
export default defineConfig({
  site: "https://brightwav3.github.io",
  base: "/merely-a-responsive-kernel",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
