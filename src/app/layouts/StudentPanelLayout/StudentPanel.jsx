import { Outlet } from "react-router-dom";
import Pages from "./Pages/Pages";
import Sidebar from "./sidbar/sidbar"





const StudentPanel =() => {
    return(
      <>
        <div  className="    w-[100%]  h-[100vh]  bg-[#EEF2FF]   flex  p-7 gap-7">
           <div   className="w-[80%]  h-[98%]    ">
            <Outlet/>
            </div>
            <Sidebar/>

        </div>
      </>
    )
}


export  default StudentPanel;

  