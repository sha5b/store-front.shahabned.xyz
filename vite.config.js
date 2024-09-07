import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
	  port: process.env.PORT || 3000,  // Use the port provided by Railway
	  host: '0.0.0.0',  // Make sure the app is accessible externally
	}
});
