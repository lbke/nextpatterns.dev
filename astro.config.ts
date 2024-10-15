import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: {
    enabled: true,
  },

  integrations: [
    tutorialkit(),
    sitemap(),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: "https://nextpatterns.dev"
});