import { Outlet } from "react-router-dom";





const Pages = () => {
    return(
       <>
              <div  className="w-[100%]  h-[100%]   rounded-2xl bg-white  ">
                   <header  className="w[98%]  h-[4rem] border flex  items-center  justify-between   p-3 ">
                   <div  className=" w-[5rem]    h-[2rem]   border"> </div>
                   <h1   className="  font-bold   text-slate-700  ">حساب کاربری</h1>
                   
                   </header>

               <Outlet/>
              </div>
       </>
    )
}

export default Pages;