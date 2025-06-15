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
           News:"News and Article",
           dashbored:"Dashbored",
           title1:"Web Design Learning Platform",
           title2:"Programming Learning ",
           title3:"A live and interactive learning resource with access to over 7,000 educational videos",
           search:"?what do you want",
           info1:"Teacher",
           info2:"Minutes",
           info3:"people",
           services1:"Simplicity of Services",
           services2:"job Opportunities",
           services3:"Valid Certificate",
           servicesDesc:"Easy access to and receipt of services from all parts of the country with  fees and no need for in-person visits throughout the registration process.",
           serviceTitle:"Our Services",
           courseTitle:"Training Courses",
           courseLesson:"276Lesson",
           courseTime:"10hour",
           courseDate:"6june1404",
           courseTeacher:"Teacher:",
           coursePrice:"Dollar",
           ViewAll:"View All",

           categoryData:"Data Analysis",
           categoryGame:"game",
           categorySecurity:"Network Security",
           categotyDesign:"WebDesign",
           categoryDesc:"Loren Ipsum is placeholder text with nonsensical content, used in the printing industry and by graphic designers.",

           TopProfessors:"Top Professors",

           NewsTitle:"News and Article",
           NewsView:"22Views",
           NewsPost:"How to make effective studying easier for you",
           NewsDesc:"Lorem Ipsum is a fictional text produced by the printing industry with the simplicity of incomprehensible text and graphic designers using texts, but also newspapers  in columns and rows, as necessary and for current technological conditions.",
         
          footerTitle:"Our goal is to provide easy access and services from all parts of the country with the lowest rates and without the need for in-person visits throughout the entire registration process",
           footer2:"Sign up to receive news via email.",
           footerBlue:"Let me know",
           footerT1:"Training courses",
           aboutUs:"AboutUs",
           footerRules:"Rules and regulations",

          

        }
      },
        fa: {
            translation:{
                logo:"هگزا اسکواد",
                courses:"دوره ها",
                teachers:"اساتید",
                ContactUs:"ارتباط با ما",
                News:"اخبار مقالات ",
                dashbored:"داشبورد",
                title1:" پلتفرم اموزش طراحی وب ",
                title2:"    مرجع اموزش برنامه نویسی",
                title3:"  مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به  زبان فارسی . ",
                search:"چی میخوای یاد بگیری ؟",
                info1:"مدرس مجرب",
                info2:"دقیقه اموزش",
                info3:"نفر دانشجو",
                services1:"سادگی خدمات",
                services2:"فرصت های شغلی",
                services3:"مدرک معتبر",
                servicesDesc:"سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ",
                serviceTitle:"خدمات ما",
                courseTitle:"دوره‌های اموزشی",
                courseLesson:"276درس",
                courseTime:"10ساعت",
                courseDate:"6اذر1404",
                courseTeacher:"مدرس: ",
                coursePrice:"تومان",
                
                ViewAll:"مشاهده همه ",

                categoryData:"تحلیل داده",
                categoryGame:" بازی",
                categorySecurity:"امنیت شبکه",
                categotyDesign:"وب دیزاین",
                categoryDesc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",

                TopProfessors:"اساتید برتر",

                NewsTitle:"اخبار و مقالات",
                NewsView:"22بازدید",
                NewsPost:"چگونه مطالعه موثر را برای شما آسانتر کنیم.",
                NewsDesc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.",

                footerTitle:"هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت",
                footer2:"برای دریافت اخبار از طریق ایمیل ثبت نام کنید",
                footerBlue:"خبرم کن",
                footerT1:"دوره های اموزشی",
                aboutUs:"درباره ما",
                footerRules:"قوانین و مقررات",

                

     
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
