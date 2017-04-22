const path = require('path');
const webpack = require('webpack');
module.exports = {
	context: path.resolve(__dirname, './src/js'),
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	resolveLoader: {
		alias: {
			'copy': 'file-loader?name=[path][name].[ext]&context=./src',
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	}
};