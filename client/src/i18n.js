import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // fallbackLng: 'de',
    resources,
    lng: 'de', // Set the default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18next;
