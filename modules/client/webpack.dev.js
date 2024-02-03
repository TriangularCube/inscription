const { mergeWithRules, CustomizeRule } = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const common = require('./webpack.common')

const merged = mergeWithRules({
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: CustomizeRule.Prepend,
    },
  },
})(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './templates/index.html',
      environment: 'dev',
    }),
  ],
  devServer: {
    compress: true,
    port: 1234,
    historyApiFallback: true,
    hot: true,
  },
})

module.exports = merged