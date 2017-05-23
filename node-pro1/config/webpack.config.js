var webpack = require('webpack');
var path = require('path');
var projectPath = path.resolve(__dirname, "..");
module.exports = {
	entry: {
		divtest: projectPath + "/reactjs/test_div.js",
		reduxtest: projectPath + "/reactjs/redux_test.js"
	},
	output: {
		path: projectPath + "/build",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				use: {
					loader: "json"
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['es2015', 'react']
					}
				}
			}
		]
	}
}
