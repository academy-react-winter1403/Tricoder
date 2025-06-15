import Sidebar from "./sidbar/sidbar";
import PanlsMenuButton from "../panelsMenuButton";
import Basket from "../../../assets/icons/Basket.png";
import { useLocation } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import ColorSelectore from './ColorSelectore'


export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);


export const AccentContext = createContext();
export const useAccent = () => useContext(AccentContext);





const StudentPanel = ({ children }) => {


  const [themeColor, setThemeColor] = useState(' linear-gradient(to bottom, #a855f7, #6366f1)');
  const [accentColor, setAccentColor] = useState('#6033FE'); // رنگ پرت

  const colors = [
    { base: 'linear-gradient(to bottom, #a855f7, #6366f1)', accent: '#6033FE' },
    { base: ' linear-gradient(0deg,rgba(250, 0, 87, 1) 0%, rgba(255, 148, 193, 1) 100%)', accent: '#D62273' },
    { base: 'linear-gradient(0deg,rgba(69, 122, 196, 1) 0%, rgba(171, 220, 255, 1) 100%)', accent: '#275C91' },
    { base: 'linear-gradient(0deg,rgba(63, 158, 131, 1) 0%, rgba(200, 255, 145, 1) 100%)', accent: '#3D8F3D' },
  ];

  const handleColorChange = (color) => {
    setThemeColor(color.base);
    setAccentColor(color.accent);
  };



  const location = useLocation();
  const path = location.pathname;

  const routeTitle = {
    '/Studentpanel/change-password': 'تغییر رمز عبور',
    '/Studentpanel/comment': 'نظرات ثبت شده',
    '/Studentpanel/mycourse': 'دوره های من',
    '/Studentpanel/dashboard': 'داشبورد',
    '/Studentpanel/editprofile': 'ویرایش پروفایل',
    '/Studentpanel/logout': 'خروج از حساب',
    '/Studentpanel/myFavoritecourse': 'دوره های مورد علاقه من',
    '/Studentpanel/MyFavoriteNews': 'اخبار های مورد علاقه من',
    '/Studentpanel/MyReservedCourse': 'دوره های رزرو شده من',
  }


  const title = routeTitle[path] || "عنوان پیش فرض";




  return (
    < AccentContext.Provider value={{ accentColor }}>
      <ThemeContext.Provider value={{ themeColor }}>
        <div className="   w-[100%]     h-auto   min-h-[110vh]    bg-[#EEF2FF]   flex  p-7 gap-7 " style={{ direction: "ltr" }}>
          <div className="md:w-[80%]  w-[99%]  h-[100%]  ">
            <div className="w-[100%]  min-h-[100vh] max-h-auto  rounded-2xl bg-white ">
              <header className="w[98%]  h-[4rem] flex  items-center  justify-between   p-6 ">
                <div className=" w-[12rem]    h-[2rem]     flex  gap-[10px]">
                  <img className="w-[25px]     h-[25px]   " src={Basket} alt="" />
                  <ColorSelectore colors={colors} onSelect={handleColorChange} />

                </div>

                <div className="flex   items-center  text-slate-500  ">
                  <h1 className="  font-bold    ">{title}</h1>

                </div>
              </header>
              <hr className="w-[98%]   mx-auto   border-slate-500" />

              {children}
            </div>
          </div>
          <Sidebar />
        </div>
      </ThemeContext.Provider>
    </AccentContext.Provider>

  );
};

export default StudentPanel;
