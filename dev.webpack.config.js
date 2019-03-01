const nodeExternals = require('webpack-node-externals');

let config = require('./base.webpack.config');
config.externals = [nodeExternals()];
config.target = 'node';
module.exports = config;
