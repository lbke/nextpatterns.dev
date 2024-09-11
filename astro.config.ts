import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  devToolbar: {
    enabled: true,
  },

  integrations: [tutorialkit()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: "https://nextpatterns.dev"
});