// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PUBLIC_SITE_URL can carry a sub-path (e.g. GitHub Pages project site):
//   https://user.github.io/sdiek-marketing  ->  site = origin, base = /sdiek-marketing
const siteUrl = new URL(process.env.PUBLIC_SITE_URL || 'https://sdiekmarketing.com');
const base = siteUrl.pathname.replace(/\/$/, '') || '/';

export default defineConfig({
  site: siteUrl.origin,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
      filter: (page) => page.includes('/en/') || page.includes('/ar/'),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
