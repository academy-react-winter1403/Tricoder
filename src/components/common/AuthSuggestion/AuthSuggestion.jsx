import { Link } from "react-router-dom"

const AuthSuggestion = ({question,suggest,link})=>{
    return(
        <div className="mt-1">
            
            <span className="text-[10px] font-yekan-500 text-[#455A64] "> {question}</span>
            <Link to={link} className="text-[10px] font-yekan-500 text-[#2196F3]">{suggest} </Link>
            
        </div>
    )
}

export {AuthSuggestion}