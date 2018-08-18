const webpackMerge = require('webpack-merge');
const path = require('path');

/**
 * 
 * @param {string} presetsDir Presets folder directory path
 * @param {Object} env Environment variables object
 */
module.exports = (presetsDir, env) => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const presetConfigs = mergedPresets.map(preset => path.resolve(presetsDir, `webpack.${preset}.js`))
         .map(presetConfig => require(presetConfig)(env));
  
  return webpackMerge({}, ...presetConfigs);
};