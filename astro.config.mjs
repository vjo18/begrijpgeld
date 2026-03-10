import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

const repository = process.env.GITHUB_REPOSITORY;
const owner = repository?.split("/")[0];
const repo = repository?.split("/")[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && !!repository;

const siteUrl = isGitHubPages
  ? `https://${owner}.github.io/${repo}`
  : "https://tijdvermogen.be";

const basePath = isGitHubPages ? `/${repo}` : undefined;

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [sitemap(), icon()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (_tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
