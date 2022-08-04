const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de', 'it'],
  },
  localePath: path.resolve('./public/locales'),
};