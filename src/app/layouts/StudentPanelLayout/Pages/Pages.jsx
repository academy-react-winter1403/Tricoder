import { Outlet } from "react-router-dom";
import Basket  from "../../../../assets/icons/Basket.png"
import notification  from "../../../../assets/icons/notification.png"



const Pages = () => {
    return(
       <>
              <div  className="w-[100%]  h-[100%]   rounded-2xl bg-white  ">
                   <header  className="w[98%]  h-[4rem] flex  items-center  justify-between   p-6 ">
                   <div  className=" w-[4rem]    h-[2rem]     flex  justify-between"> 
                        <img   className="w-[25px]     h-[25px]   " src={Basket} alt="" />
                        <img    className="w-[25px]   h-[25px] " src={notification} alt="" />
                   </div>
                   <h1   className="  font-bold   text-slate-700  ">حساب کاربری</h1>
                   
                   </header>
                   <hr   className="w-[98%]   mx-auto   border-gray-500" />

               <Outlet/>
              </div>
       </>
    )
}

export default Pages;