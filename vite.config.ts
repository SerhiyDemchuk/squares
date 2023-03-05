import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react()],
	resolve: {
	// 	alias: {
	// 		'@': path.resolve(__dirname, 'src/'),
	// 		'@shared': path.resolve(__dirname, 'src/shared'),
	// 		'@pages': path.resolve(__dirname, 'src/pages'),
	// 		'@entities': path.resolve(__dirname, 'src/entities'),
	// 		'@app': path.resolve(__dirname, 'src/app'),
	// },
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
			{
				find: '@entities',
				replacement: path.resolve(__dirname, 'src/entities'),
			},
			{
				find: '@shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{
				find: '@app',
				replacement: path.resolve(__dirname, 'src/app'),
			},
			{
				find: '@features',
				replacement: path.resolve(__dirname, 'src/features'),
			},
		],
	},
});
