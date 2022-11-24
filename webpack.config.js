const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      // { test: /\.js$/, use: "babel-loader" },
      // { test: /\.vue$/, use: "vue-loader" },
      // { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.(jpe?g|PNG|gif|svg)$/i,
        // loader: "file-loader?name=app/images/[name].[ext]",
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
