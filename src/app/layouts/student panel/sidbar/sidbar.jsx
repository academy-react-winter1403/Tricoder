
import { Link } from "react-router-dom";

export const Sidebar = () => {



    return(
        <>
           <div  className="w-[20%]   h-[98%] rounded-2xl border-solid   bg-gradient-to-b from-purple-500 to-indigo-500 "  >
                <button>

                </button>


                <div className="flex   h-[30%]  flex-col  justify-center items-center mb-6">
                      <img src="" className="w-[8rem] h-[8rem] rounded-full mb-2  border"  />
                      <h3 className=" text-white  text-lg font-semibold">بیتا قنبری</h3>
                </div>



                <ul  className="text-white  text-right  text-base">
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/dashboard">داشبرد</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/editprofile">ویرایش پروفایل</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/courses">دوره های من</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/change-password">تغییر رمز عبور</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/logout">خروج از حساب</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="/comment">نظرات ثبت شده</Link>
                    </li>
                </ul>
           </div>
        </>
    )
}


