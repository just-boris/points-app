const path = require('path');

module.exports = {
  title: require('./package.json').name,
  components: './src/components/**/index.js',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  updateWebpackConfig(webpackConfig) {
    webpackConfig.entry.push(require.resolve('./src/index.css'));
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push({
      test: /\.js$/,
      include: dir,
      loader: 'babel',
      query: {
        presets: ['react-app']
      }
    }, {
      test: /\.css$/,
      include: dir,
      loader: 'style!css'
    });
    return webpackConfig;
  },
};
