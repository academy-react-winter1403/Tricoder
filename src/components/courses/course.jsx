import { Outlet } from "react-router-dom"
import {Filters} from "./filters/Filters"
import {SearchHeader} from "./SearchHeader/SearchHeader"


const Course = ()=>{
    return(
        <div 
        className="flex justify-center gap-[32px] flex-row-reverse w-full border-1 overflow-hidden ">
            <div>
                <SearchHeader/>
                
            </div>
            <div>
                <Filters/>
            </div>
            
        </div>
    )
}

export {Course}