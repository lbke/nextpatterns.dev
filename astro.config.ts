import tutorialkit from "@tutorialkit/astro";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

const redirects = import.meta.env.PROD
  ? {}
  : {
      // In prod, "/" is the landing page, in dev we redirect to first pattern
      "/": {
        destination: "/p/get-started/welcome",
        status: 302 as const,
      } as const,
    };
export default defineConfig({
  devToolbar: {
    enabled: true,
  },

  integrations: [
    tutorialkit({
      defaultRoutes: "tutorial-only", // homepage is on "/"
    }),
    sitemap(),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: "https://nextpatterns.dev",
  // @ts-ignore
  redirects: {
    ...redirects,
  },
});
