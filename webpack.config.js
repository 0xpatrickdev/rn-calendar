module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /(src)/,
        query: {
            presets: ['react', 'es2015', 'stage-0'],
        }
      },
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /(node_modules\/react-native-calendars)/,
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