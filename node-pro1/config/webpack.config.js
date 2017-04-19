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
			}
		]
	}
}
