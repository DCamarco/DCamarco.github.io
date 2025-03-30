import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	}
};

export default config;
