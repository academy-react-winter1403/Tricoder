import { Outlet } from "react-router-dom";
import Pages from "./Pages/Pages";
import Sidebar from "./sidbar/sidbar"



export const StudentPanel =() => {
    return(
      <>
        <div  className="    w-[100%]  h-[100vh]  bg-[#EEF2FF]   flex  p-7 gap-7">
            <Pages/>
            <Sidebar/>
            <Outlet/>
        </div>
      </>
    )
}


  