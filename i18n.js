const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en',
    de: 'de',
    it: 'it',
  },
  all: {
    fr: 'fr',
    en: 'en',
    de: 'de',
    it: 'it',
  },
};

module.exports = new NextI18Next({
  defaultLanguage: 'fr',
  otherLanguages: ['en', 'de', 'it'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
});