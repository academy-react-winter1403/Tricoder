import { Link } from "react-router-dom"
import { Button } from "../../common/button/button"
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion"

const Code = ()=>{
    return(
        <div className=" w-57 h-55 m-auto mb-4 ">
            <p className="font-yekan-500 text-[9px] text-right tracking-normal text-[#455A64]"> 
                 کد به شماره  989118045177+ ارسال شد، در صورت   اشتباه بودن شماره آنرا 
                <Link className="underline decoration-sky-600 text-sky-600"> تغییر دهید </Link> 
            </p>
            <div className="mt-2 h-15 flex justify-center items-center gap-2 font-yekan-500">
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block  border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
            </div>
            <h4 className="font-yekan-500 mt-2 text-[#2196F3]">
                1:23
            </h4>
            <Button text={"ورود به حساب "}/>
            <AuthSuggestion question={"کدارسال نشد؟"} suggest={"ارسال دوباره"}/>
        </div>
    )
}

export {Code}