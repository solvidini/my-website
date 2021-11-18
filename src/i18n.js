import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import english from './locales/en/translation.json'
import polish from './locales/pl/translation.json'
import spanish from './locales/es/translation.json'

const resources = {
  en: {
    translation: english
  },
  pl: {
    translation: polish
  },
  es: {
    translation: spanish
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['en', 'pl', 'es'],
    supportedLngs: ['en', 'pl', 'es'],
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n