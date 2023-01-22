import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {}
		}
	}
};

export default config;
