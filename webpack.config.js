const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		contentScript: './src/content-script/index.ts',
		background: './src/background/index.ts',
		main: './src/content-script/webpage-main-script.ts',
		options: './src/options/index.tsx',
		popup: './src/popup/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'notepad-extension-build'),
		filename: '[name].bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ['popup'],
			template: './src/popup/index.html',
			minify: 'auto',
		}),
	],
};
