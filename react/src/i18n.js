import i18n from "i18next";
import tr from "./assets/translations/tr.json"
import en from "./assets/translations/en.json"
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
