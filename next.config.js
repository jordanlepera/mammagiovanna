// const withPlugins = require("next-compose-plugins");

// module.exports = withPlugins([], {});
const { i18n } = require('./next-i18next.config');

module.exports = {
  swcMinify: true,
  output: 'standalone',
  i18n,
  // // COMMENT THIS FEATURE IN DEV
  // experimental: {
  //   outputStandalone: true,
  // },
};