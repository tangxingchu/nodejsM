var webpack = require('webpack');
var path = require('path');
var projectPath = __dirname + path.resolve("..");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: projectPath + "/app/main.js",
	output: {
		path: projectPath + "/build",
		filename: "[name]-[hash].js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	devServer: {
		contentBase: projectPath + "/public",//本地服务器所加载的页面所在的目录
		colors: true,
		historyApiFallback: true,
		inline: true	//实时刷新
	}
}
