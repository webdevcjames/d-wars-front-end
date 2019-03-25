const path = require("path");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "./public",
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        enforce: "pre",
        enforce: "post",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
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
    ],
  },
  resolve: {
    extensions: [".js", ".styl"]
  },
  plugins: [],
}