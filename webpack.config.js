const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


const config = {
	mode: "development",
	target: "web",

	entry: "./src/index.js",

	devServer: {
  	static: {
      directory: path.join(__dirname, "dist"),
    },
    
    compress: true,
    port: 3000,
    hot: true,
  },

	module: {
		rules: [
			{
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
          }
        }
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        type: "asset",  // "asset/inline",
        exclude: /fonts/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: "file-loader"
      },
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "main.[fullhash].css" }),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
	],

	resolve: {
		extensions: [".js", ".jsx", ".tsx", ".ts"],
	},

	devtool: "source-map",
  output: {
  	filename: "bundle.[fullhash].js",
		path: path.join(__dirname, "dist"),
		assetModuleFilename: "images/[fullhash][ext][query]",
	},
};

if (currentTask == "build") {
  config.mode = "production";
  config.target = ['web', 'es5'];
  config.plugins.push(new CleanWebpackPlugin(), new WebpackManifestPlugin());
}

module.exports = config;