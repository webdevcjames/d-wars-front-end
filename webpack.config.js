var webpack = require('webpack');
const path = require("path");
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

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
    host: "localhost",
    https: true,
    index: "index.html",
    open: true,
    port: 3000,
    public: "localhost:3000",
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
      stylus: path.resolve(__dirname, "src/stylus/"),
      types: path.resolve(__dirname, "src/types/"),
    },
    extensions: [ ".ts", ".tsx", ".js", ".jsx", ".styl" ]
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
        test: /\.(png|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader?limit=100000",
            options: {},
          },
        ]
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "stylus-loader" },
        ]
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
    })
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: true,
  },
}