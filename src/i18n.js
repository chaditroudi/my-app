// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en.json';
import de from './locals/de.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Use this language if the key is not found in the selected language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
