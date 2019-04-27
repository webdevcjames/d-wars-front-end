const webpack = require("webpack");
const path = require("path");
const dotenv = require('dotenv').config({path: __dirname + "/.env"});

const CopyPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: {
      index: "index.html",
    },
    host: "0.0.0.0",
    https: true,
    index: "index.html",
    open: true,
    port: 3000,
    public: "localhost:3000",
    hot: true,
    watchOptions: {
      aggregateTimeout: 500,
      poll: true,
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      containers: path.resolve(__dirname, "src/containers/"),
      fonts: path.resolve(__dirname, "assets/fonts/"),
      images: path.resolve(__dirname, "assets/images/"),
      stylus: path.resolve(__dirname, "src/stylus/"),
      types: path.resolve(__dirname, "src/types/"),
    },
    extensions: [ ".ts", ".tsx", ".js", ".jsx", ".styl", ".jpg", ".png" ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json")
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node-modules/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        include: [ path.resolve(__dirname, "assets/fonts/") ],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ]
      },
      {
        test: /\.(jpg|png)$/,
        include: [ path.resolve(__dirname, "assets/images/") ],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },
            { loader: "stylus-loader" },
          ]
        })
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node-modules/,
        use: {
          loader: "eslint-loader",
          options: {
            configFile: ".eslintrc.js"
          }
        }
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
    new ExtractTextPlugin({
      filename: "bundle.css"
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        preferPathResolver: "webpack"
      }
    }),
    new CopyPlugin([
      { from: "./public/index.html" }
    ]),
    new webpack.HotModuleReplacementPlugin({})
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: true,
  },
}