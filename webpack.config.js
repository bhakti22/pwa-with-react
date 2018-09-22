const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // entry: {
  //   main: "./src/index.js",
  //   vendors: "./src/vendors.js"
  // },
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module:{
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: __dirname + '/.eslintrc'
          },
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: "./index.html"
    })
  ],
  sourceMap: true
}
