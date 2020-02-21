const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'index_bundle.js'
    },
    mode: "production",
    module: {
      rules:[
          {
              test: /\.html$/,
              use: [
                  {
                      loader: "html-loader",
                      options: { minimize: true }
                  }
              ]
          },
          {
              test: /\.(js|jsx)$/,
              exclude: "/node_modules",
              use: ['babel-loader'],
          },
          {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
        // new MiniCssExtractPlugin({
        //     filename: 'style.css'
        // })
        // new CleanWebpackPlugin()
    ]
};