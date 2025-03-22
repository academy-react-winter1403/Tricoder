
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../../../redux/Store/menuSlice";

 const Sidebar = () => {

  const itsOpen = useSelector((state)=> state.menu.isOpen);
 const manuDispatch=useDispatch();


    return(
 <>
        <div  className={`fixed top-0  w-[20rem]  h-[100%] border-solid   bg-gradient-to-b from-purple-500 to-indigo-500 
         md:block md:static  md:h-[98%]  md:w-[20%]   md:rounded-2xl  -right-full   transition-all duration-1000
         ${
                itsOpen?"right-0":
                "-right-full"}
                `} >

                   {itsOpen&& (
                               <button  className="text-white  m-3  md:hidden " 
                               onClick={()=>
                                manuDispatch(closeMenu())}>
                               <FiX  size={30}/>
                               </button>
       
                   )}
                   {console.log("itsOpen:", itsOpen)}
              

                <div className="flex   h-[30%]  flex-col  justify-center items-center mb-6">
                      <img src="" className="w-[8rem] h-[8rem] rounded-full mb-2  border  border-white"  />
                      <h3 className=" text-white  text-lg font-semibold">بیتا قنبری</h3>
               </div>



                <ul  className="text-white  text-right  text-base">
                      

                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link   to="dashboard">داشبرد</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="editprofile">ویرایش پروفایل</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="mycourse">دوره های من</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="change-password">تغییر رمز عبور</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="logout">خروج از حساب</Link>
                    </li>
                    <li className="py-2 px-4      rounded-lg cursor-pointer  m-2   hover:bg-[#6033FF]">
                            <Link to="comment">نظرات ثبت شده</Link>
                    </li>
                </ul>
        </div>
</>
 )
}


export default Sidebar;

