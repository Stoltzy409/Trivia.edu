module.exports = {
  entry: './src/client/app/components/Main.jsx',
  output: {
    filename: './src/client/dist/app-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
