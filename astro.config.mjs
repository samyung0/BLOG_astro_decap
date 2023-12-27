import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.partialty.com",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://blog.partialty.com/admin/',
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
});
