import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation:{
            logo:"HegxaSquad",
            courses:"Courses",

        }
      },
        fa: {
            translation:{
                logo:"هگزا اسکواد",
            courses:"دوره ها",

            }
    }
  },

       lng: localStorage.getItem("language"),
    fallbackLng: localStorage.getItem("language"),

    interpolation: {
      escapeValue: false, 
    }
  
})

export default i18n;
