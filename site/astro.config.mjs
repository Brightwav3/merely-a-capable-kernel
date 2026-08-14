import { defineConfig } from "astro/config";

// GitHub Pages: https://brightwav3.github.io/merely-a-capable-kernel/
export default defineConfig({
  site: "https://brightwav3.github.io",
  base: "/merely-a-capable-kernel",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
