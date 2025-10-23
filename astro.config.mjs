// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nullvoyager47.github.io',
	base: '/BlogWebsite',
	output: "static",
	integrations: [mdx(), sitemap()],
	build: {
    assets: 'assets'
  }
});
