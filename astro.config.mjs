// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://niftygamesstudios.in',
  output: 'static',
  trailingSlash: 'ignore',
  // Keep CSS readable by older browsers (Safari 14, older Chromebooks), same as the Astro 5 output.
  vite: { build: { cssTarget: ['chrome90', 'safari14', 'firefox90'] } },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
