const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

function generateHtmlPlugins (templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
	return templateFiles.map(item => {
		const parts = item.split('.')
		const name = parts[0]
		const extension = parts[1]

		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			hash: true,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
		})
	})
}

const htmlPlugins = generateHtmlPlugins('src/pug/views/');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		port: 8080,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'stage-2']
					}
				}
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000000
					}
				}
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader', 'import-glob-loader']
				})
			},
			{
				test: /\.(jade|pug)$/,
				// use: ['raw-loader', 'pug-html-loader']
				use: {
					loader: 'pug-loader',
					options: {
						pretty: '  ',
						exports: false,
						debug: false,
						compileDebug: false,
						cache: true,
						data: {
							require: require
						}
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new webpack.HotModuleReplacementPlugin(),
	]
	.concat(htmlPlugins)
}