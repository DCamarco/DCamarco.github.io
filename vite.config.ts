import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), nodeResolve({ preferBuiltins: true })],
	optimizeDeps: {
		exclude: ['rollup']
	}
});
