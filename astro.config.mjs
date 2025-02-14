// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: process.env.ASTRO_SITE || 'https://federiconery.github.io/',
    base: process.env.ASTRO_BASE || '/programando-con-la-fefa',
    integrations: [mdx(), sitemap(), tailwind()],
});