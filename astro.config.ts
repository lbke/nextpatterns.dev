import tutorialkit from "@tutorialkit/astro";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  devToolbar: {
    enabled: true,
  },

  integrations: [
    tutorialkit({
      defaultRoutes: "tutorial-only", // so we keep control over "/"
    }),
    sitemap(),
    icon({
      include: {
        tabler: ["chevron-down", "chevrons-right"],
        hugeicons: [
          "globe-02",
          "github-01",
          "new-twitter",
          "linkedin-02",
          "target-02",
          "mouse-11",
          "computer-programming-01",
          "security-lock",
          "wrench-01",
          "book-04",
          "robotic",
          "diamond-02",
        ],
      },
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: "https://nextpatterns.dev",
  vite: {
    plugins: [yaml()],
  },
});
