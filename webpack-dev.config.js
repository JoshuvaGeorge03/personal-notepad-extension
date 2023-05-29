const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

const devConfig = {
	mode: 'development',
	watch: true,
	watchOptions: {
		aggregateTimeout: 600,
		ignored: ['/node_modules'],
	},
	devtool: 'cheap-source-map',
};

module.exports = {
	...merge(commonConfig, devConfig),
};
