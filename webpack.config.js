module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules\/(?!(react-native-calendars))/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-runtime', 'transform-class-properties']
          }
        }
      }
    ]
  }
};
