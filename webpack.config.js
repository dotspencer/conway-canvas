var path = require('path');

var htmlPlugin = require('html-webpack-plugin');
var htmlPluginConfig = new htmlPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html'
});

var extractPlugin = require('extract-text-webpack-plugin');
var extractPluginConfig = new extractPlugin('style.css');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    path: path.resolve(__dirname + '/build/'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [htmlPluginConfig, extractPluginConfig]
};
