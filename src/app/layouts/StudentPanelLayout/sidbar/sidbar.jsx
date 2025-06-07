import { Link, NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../../../redux/Store/menuSlice";
import { BookOpenCheck,HomeIcon, BookOpenText, CalendarHeart, FileHeart, KeyRound, LayoutDashboard, LucideUserCircle2, MessageCircleMore, Power,} from "lucide-react";
import { useTheme,useAccent }  from "../StudentPanel";
const Sidebar = () => {


  const itsOpen = useSelector((state) => state?.menu?.isOpen);
  const manuDispatch = useDispatch();

 
  const { themeColor } = useTheme();
  const { accentColor } = useAccent();



  return (
    <>
      <div 
       style={{ backgroundImage:themeColor}}
        className={`fixed top-0  w-[20rem]  h-[100%]   md:h-[160vh]  py-[10px] lg:h-[100%] border-solid   
         md:block md:static  md:h-[98%]  md:w-[23%]   md:rounded-2xl  -right-full   transition-all duration-1000    md:text-xs   lg:text-base
         ${itsOpen ? "right-0" : "-right-full"}
                `}
      >
        {itsOpen && (
          <button
            className="text-white  m-3  md:hidden "
            onClick={() => manuDispatch(closeMenu())}
          >
            <FiX size={30}    />
          </button>
        )}
        {console.log("itsOpen:", itsOpen)}

        <div className="flex   h-[30%]  flex-col  justify-center items-center mb-6">
          <Link   to="/" className="relative   text-white   left-[40%]  "   ><HomeIcon/></Link>
          <img
            src=""
            className="  w-[8rem] h-[8rem]   xl:w-[8rem] xl:h-[8rem]  lg:w-[6rem] lg:h-[6rem]   
                       md:w-[5rem] md:h-[5rem]    rounded-full mb-2  border  border-white"
          />
          <h3 className=" text-white  text-lg font-semibold">بیتا قنبری</h3>
        </div>

        <ul className="text-white  text-right ">
          <NavLink
            to="/Studentpanel/dashboard"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
            >
           داشبرد
           <LayoutDashboard/>
          </NavLink>

          <NavLink
            to="/Studentpanel/editprofile"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
            ویرایش پروفایل
            <LucideUserCircle2/>
          </NavLink>

          <NavLink
            to="/Studentpanel/mycourse"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
            دوره های من
            <BookOpenText/>
          </NavLink>

          <NavLink
            to="/Studentpanel/change-password"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
            تغییر رمز عبور
            <KeyRound />
          </NavLink>

          <NavLink
            to="/Studentpanel/logout"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
            خروج از حساب
            <Power/>
          </NavLink>

          <NavLink
            to="/Studentpanel/comment"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
            نظرات ثبت شده
            <MessageCircleMore />
          </NavLink>
          <NavLink
            to="/Studentpanel/myFavoritecourse"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
        دوره های مورد علاقه من
        <CalendarHeart/>
          </NavLink>
          <NavLink
            to="/Studentpanel/MyReservedCourse"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
        دوره های رزرو شده من
        <BookOpenCheck/>
          </NavLink>
          <NavLink
            to="/Studentpanel/MyFavoriteNews"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: accentColor,
                    color: '#fff',
                  }
                : {}
            }
            className='block py-2 px-4 flex justify-end  gap-3  rounded-lg cursor-pointer  m-2'
          >
        اخبار مورد علاقه من
        <FileHeart/>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
