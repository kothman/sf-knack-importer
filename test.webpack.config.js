const nodeExternals = require('webpack-node-externals');
const config = require('./base.webpack.config');

config.externals = [nodeExternals()];
config.devtool = 'inline-cheap-module-source-map';
module.exports = config;
