const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssLoader =
  process.env.NODE_ENV === "development"
    ? "style-loader"
    : MiniCssExtractPlugin.loader;
const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "./nonograms/src/", "index.js"), //"./nonograms/src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./nonograms/src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [cssLoader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".css"],
  },
};
