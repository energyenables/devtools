const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    panel: './src/panel/index.js',
    devtools: './src/devtools/index.js',
    background: './src/background/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: '.' },
        { from: 'public/icons', to: 'icons' }
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/panel.html',
      filename: 'panel.html',
      chunks: ['panel']
    }),
    new HtmlWebpackPlugin({
      template: './public/devtools.html',
      filename: 'devtools.html',
      chunks: ['devtools']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
