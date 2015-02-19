module.exports = {
  entry: './index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/.tmp',
    filename: 'term.js'
  },
  module: {
    loaders: [
      // This loader matches .js and .jsx files
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  watch: true,
  keepalive: true
}