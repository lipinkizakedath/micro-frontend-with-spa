const { merge } = require('webpack-merge');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
    },
  },

  plugins: [
    new ModuleFederation({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8082/remoteEntry.js',
        auth: 'auth@http://localhost:3000/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
