const { mergeWithRules, CustomizeRule } = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const path = require('path')

const merged = mergeWithRules({
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: CustomizeRule.Prepend,
    },
  },
})(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
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
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './templates/index.html',
      environment: 'prod',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          },
          // name: 'vendors',
          // chunks: 'all',
        },
      },
    },
  },
  // https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
})

module.exports = merged
