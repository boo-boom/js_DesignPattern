const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/6-单例模式",
  output: {
    path: __dirname,
    filename: "./release/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "./release"), // 设置根目录
    open: true, // 打开浏览器
    port: 9000 // 端口
  }
};
