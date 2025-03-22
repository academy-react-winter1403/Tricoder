import { Outlet } from "react-router-dom";
import Basket  from "../../assets/icons/Basket.png"
import notification  from "../../assets/icons/notification.png"
import PanlsMenuButton from "./panelsMenuButton";



                                 
const Pages = () => {



    return(
       <>
              <div  className="w-[100%]   h-[100%]   rounded-2xl bg-white  ">
                   <header  className="w[98%]  h-[4rem] flex  items-center  justify-between   p-6 ">
                   <div  className=" w-[4rem]    h-[2rem]     flex  justify-between"> 
                        <img   className="w-[25px]     h-[25px]   " src={Basket} alt="" />
                        <img    className="w-[25px]   h-[25px] " src={notification} alt="" />
                   </div>


                   <div  className="flex   items-center  text-slate-500  ">
                   <h1   className="  font-bold    ">حساب کاربری</h1>
                  < PanlsMenuButton/>  
                   </div>
                   </header>
                   <hr   className="w-[98%]   mx-auto   border-slate-500" />

               <Outlet/>



              </div>
       </>
    )
}

export default Pages;