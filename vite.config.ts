// import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
	optimizeDeps: {
		exclude: [
			'format',
			'editor.all',
			// Exclude drizzle-orm and database dependencies to prevent caching
			// of D1 database bindings. This ensures migrations are always reflected.
			'drizzle-orm',
			'drizzle-orm/d1',
			'drizzle-orm/sqlite-core',
		],
		include: ['monaco-editor/esm/vs/editor/editor.api'],
		force: true, // Force re-optimization on every start
	},

	// build: {
	//     rollupOptions: {
	//       output: {
	//             advancedChunks: {
	//                 groups: [{name: 'vendor', test: /node_modules/}]
	//             }
	//         }
	//     }
	// },
	plugins: [
		react(),
		svgr(),
		cloudflare({
			configPath: 'wrangler.jsonc',
			experimental: { remoteBindings: true },
		}), // Add the node polyfills plugin here
		// nodePolyfills({
		//     exclude: [
		//       'tty', // Exclude 'tty' module
		//     ],
		//     // We recommend leaving this as `true` to polyfill `global`.
		//     globals: {
		//         global: true,
		//     },
		// })
		tailwindcss(),
		// sentryVitePlugin({
		// 	org: 'cloudflare-0u',
		// 	project: 'javascript-react',
		// }),
	],

	resolve: {
		alias: {
			// 'path': 'path-browserify',
			// Add this line to fix the 'debug' package issue
			debug: 'debug/src/browser',
			// "@": path.resolve(__dirname, "./src"),
			'@': path.resolve(__dirname, './src'),
            'shared': path.resolve(__dirname, './shared'),
            'worker': path.resolve(__dirname, './worker'),
		},
		// Force Vite to use platform's Tailwind CSS v4, not parent's v3
		dedupe: ['tailwindcss'],
	},

	// Configure for Prisma + Cloudflare Workers compatibility
	define: {
		// Ensure proper module definitions for Cloudflare Workers context
		'process.env.NODE_ENV': JSON.stringify(
			process.env.NODE_ENV || 'development',
		),
		global: 'globalThis',
		// '__filename': '""',
		// '__dirname': '""',
	},

	worker: {
		// Handle Prisma in worker context for development
		format: 'es',
	},

	server: {
		allowedHosts: true,
	},

	// Clear cache more aggressively
	cacheDir: 'node_modules/.vite',

	build: {
		sourcemap: true,
	},
});
