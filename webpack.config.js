const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
		assetModuleFilename: '[name][ext]',
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
			{
				test: /manifest.json/,
				type: 'asset/resource',
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
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
			filename: 'popup.html',
		}),
		new HtmlWebpackPlugin({
			chunks: ['options'],
			template: './src/options/index.html',
			minify: 'auto',
			filename: 'options.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', 'public'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '...'],
	},
};
