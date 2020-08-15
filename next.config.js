var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withCSS = require('@zeit/next-css');

const localeSubpaths = {};

module.exports = withCSS({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack: (config) => {
    // Perform customizations to webpack config
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    return config;
  },
});