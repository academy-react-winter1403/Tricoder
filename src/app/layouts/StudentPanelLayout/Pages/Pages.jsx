import { Outlet } from "react-router-dom";





const Pages = () => {
    return(
       <>
              <div  className="w-[100%]  h-[100%]   rounded-2xl bg-white  ">
              

               <Outlet/>
              </div>
       </>
    )
}

export default Pages;