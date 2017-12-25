const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
})

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// loaders - executa em ordem oposta
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es-2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [

				]
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			// ...
		})
	]
};