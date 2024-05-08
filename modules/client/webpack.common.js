const path = require('node:path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.tsx?$/i,
        loader: 'esbuild-loader',
        options: {
          target: 'ES2020',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [new CleanWebpackPlugin()],
}
