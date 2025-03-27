import { Filters } from "./filter/Filters"
import { SearchHeader } from "./SearchHeader/SearchHeader"

const Course = ()=>{
    return(
        <div className="flex justify-center gap-[32px] ">
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