// frontend/config-overrides.js
const webpack = require('webpack');

module.exports = function override(config) {
  // Adding polyfills for process and stream
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve('process/browser'),  // Polyfill for process
    stream: require.resolve('stream-browserify'),  // Polyfill for stream
  };

  // Adding the ProvidePlugin to inject 'process' globally
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',  // Inject process globally
    }),
  ];

  // Resolving 'process/browser' issue by ensuring extensions are fully specified
  config.resolve.alias = {
    ...config.resolve.alias,
    'process/browser': require.resolve('process/browser'),
  };

  return config;
};
