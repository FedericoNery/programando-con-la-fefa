// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://federiconery.github.io/',
    base: '/programando-con-la-fefa',
	integrations: [mdx(), sitemap()],
});
