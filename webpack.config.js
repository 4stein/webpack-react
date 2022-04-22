const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let node = "development";
let target = "web";
let plugins = [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
];

if(process.env.NODE_ENV === "production") {
	node = "production";
	target = ['web', 'es5'];
	// target = ".browserslistrc";
	
} else {
	plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
	mode: node,
	target: target,

	entry: "./src/index.js",

	output: {
		path: path.join(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",  // "asset/inline",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader, 
						options: { publicPath: "" },
					},
					"css-loader", 
					"sass-loader"
				],
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
		]
	},

	plugins: plugins,

	resolve: {
		extensions: [".js", ".jsx"],
	},

	devtool: "source-map",
  devServer: {
  	static: {
      directory: path.join(__dirname, "dist"),
    },
    
    compress: true,
    port: 3000,
    hot: true,
  },
};