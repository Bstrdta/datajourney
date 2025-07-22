import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import frHome from './locales/fr/home.json';
import enHome from './locales/en/home.json';
import frServices from './locales/fr/services.json';
import enServices from './locales/en/services.json';
import frPortfolio from './locales/fr/portfolio.json';
import enPortfolio from './locales/en/portfolio.json';
import frBlog from './locales/fr/blog.json';
import enBlog from './locales/en/blog.json';
import frAbout from './locales/fr/about.json';
import enAbout from './locales/en/about.json';

const resources = {
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    portfolio: frPortfolio,
    blog: frBlog,
    about: frAbout
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    portfolio: enPortfolio,
    blog: enBlog,
    about: enAbout
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    defaultNS: 'common',
    
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;