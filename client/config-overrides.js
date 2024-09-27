// config-overrides.js
const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    new Dotenv()
  ]);
  return config;
};
