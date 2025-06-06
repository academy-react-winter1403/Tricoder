import Sidebar from "./sidbar/sidbar";
import PanlsMenuButton from "../panelsMenuButton";
import Basket from "../../../assets/icons/Basket.png";
import { useLocation } from "react-router-dom";
import { LucidePaintbrush, Paintbrush, Paintbrush2, Paintbrush2Icon, PaintbrushVertical, PaintbrushVerticalIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence , motion } from "framer-motion";
const StudentPanel = ({ children }) => {

 const [sidebarColor, setSidebarColor] = useState(' linear-gradient(to bottom, #a855f7, #6366f1)'); // رنگ پیش‌فرض سایدبار
  const [isHovered, setIsHovered] = useState(false);

 const colors = ['linear-gradient(to bottom, #a855f7, #6366f1)', 
  ' linear-gradient(0deg,rgba(250, 0, 87, 1) 0%, rgba(255, 148, 193, 1) 100%)',
   'linear-gradient(0deg,rgba(69, 122, 196, 1) 0%, rgba(171, 220, 255, 1) 100%)',
    'linear-gradient(0deg,rgba(63, 158, 131, 1) 0%, rgba(200, 255, 145, 1) 100%)'];


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
    <>
      <div className="   w-[100%]     h-auto   min-h-[110vh]    bg-[#EEF2FF]   flex  p-7 gap-7 " style={{ direction: "ltr" }}>
        <div className="md:w-[80%]  w-[99%]  h-[100%]  ">
          <div className="w-[100%]  min-h-[100vh] max-h-auto  rounded-2xl bg-white ">
            <header className="w[98%]  h-[4rem] flex  items-center  justify-between   p-6 ">
              <div className=" w-[12rem]    h-[2rem]     flex  gap-[10px]">
                <img className="w-[25px]     h-[25px]   " src={Basket} alt="" />
                <div className="flex gap-[5px]  "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <Paintbrush />
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className=" w-[7rem]   h-[2.5rem]  rounded-xl  shadow-xl/30  flex gap-[2px] items-center  justify-center "
                      >
                        {colors.map((color) => (
                          <div
                            key={color}
                            className="border  w-[1.5rem] h-[1.5rem]  rounded-full"
                            style={{ backgroundImage: color }}
                            onClick={() => setSidebarColor(color)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex   items-center  text-slate-500  ">
                <h1 className="  font-bold    ">{title}</h1>

              </div>
            </header>
            <hr className="w-[98%]   mx-auto   border-slate-500" />

            {children}
          </div>
        </div>
        <Sidebar   color={sidebarColor} />
      </div>
    </>
  );
};

export default StudentPanel;
