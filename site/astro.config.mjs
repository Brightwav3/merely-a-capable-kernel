import { defineConfig } from "astro/config";

// GitHub Pages: https://brightwav3.github.io/M.A.R.K./
export default defineConfig({
  site: "https://brightwav3.github.io",
  base: "/M.A.R.K.",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
