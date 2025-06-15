import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation:{
            logo:"HegxaSquad",
            courses:"Courses",
            teachers:"Teachers",
           ContactUs:"Contact Us",


        }
      },
        fa: {
            translation:{
                logo:"هگزا اسکواد",
            courses:"دوره ها",
            teachers:"اساتید",
              ContactUs:"ارتباط با ما",

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
