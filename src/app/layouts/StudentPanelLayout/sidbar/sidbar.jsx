import { Link, NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../../../redux/Store/menuSlice";

const Sidebar = () => {
  const itsOpen = useSelector((state) => state.menu.isOpen);
  const manuDispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed top-0  w-[20rem]  h-[100%] border-solid   bg-gradient-to-b from-purple-500 to-indigo-500 
         md:block md:static  md:h-[98%]  md:w-[20%]   md:rounded-2xl  -right-full   transition-all duration-1000    md:text-sm   lg:text-lg
         ${itsOpen ? "right-0" : "-right-full"}
                `}
      >
        {itsOpen && (
          <button
            className="text-white  m-3  md:hidden "
            onClick={() => manuDispatch(closeMenu())}
          >
            <FiX size={30} />
          </button>
        )}
        {console.log("itsOpen:", itsOpen)}

        <div className="flex   h-[30%]  flex-col  justify-center items-center mb-6">
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
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            داشبرد
          </NavLink>

          <NavLink
            to="/Studentpanel/editprofile"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            ویرایش پروفایل
          </NavLink>

          <NavLink
            to="/Studentpanel/mycourse"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            دوره های من
          </NavLink>

          <NavLink
            to="/Studentpanel/change-password"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            تغییر رمز عبور
          </NavLink>

          <NavLink
            to="/Studentpanel/logout"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            خروج از حساب
          </NavLink>

          <NavLink
            to="/Studentpanel/comment"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
            نظرات ثبت شده
          </NavLink>
          <NavLink
            to="/Studentpanel/myFavoritecourse"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
        دوره های مورد علاقه من
          </NavLink>
          <NavLink
            to="/Studentpanel/MyReservedCourse"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
        دوره های رزرو شده من
          </NavLink>
          <NavLink
            to="/Studentpanel/MyFavoriteNews"
            className={({ isActive }) =>
              ` block py-2 px-4  ${
                isActive && "bg-[#6033FE]"
              }    rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]/50`
            }
          >
        اخبار مورد علاقه من
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
