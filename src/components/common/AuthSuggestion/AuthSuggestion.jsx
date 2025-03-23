const AuthSuggestion = ({question,suggest})=>{
    return(
        <div className="mt-1">
            
            <span className="text-[9px] font-yekan-500 text-[#455A64] "> {question}</span>
            <span className="text-[9px] font-yekan-500 text-[#2196F3]">{suggest} </span>
            
        </div>
    )
}

export {AuthSuggestion}