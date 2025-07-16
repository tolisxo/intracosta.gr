import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import en from '../public/locales/en/translation.json';
import de from '../public/locales/de/translation.json';
import el from '../public/locales/el/translation.json';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  el: {
    translation: el,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;