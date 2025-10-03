import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ru from "./ru.json";
import uk from "./uk.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ru: { translation: ru },
        uk: { translation: uk },
    },
    lng: "en",          // язык по умолчанию
    fallbackLng: "en",  // запасной
    interpolation: { escapeValue: false },
});

export default i18n;
