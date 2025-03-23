import { Field, Formik } from "formik"
import { Form } from "react-router-dom"
import { Button } from "../../common/button/button"
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion"


const Login = ()=>{
    return(
        <div className=" w-58 h-55 m-auto mb-4">
           
            <div>
                <Formik>
                    <Form>
                        <Field 
                        className="border-1 w-full h-9 rounded-2xl border-gray-300 my-2  font-yekan-400 text-[11px] text-right
                        pr-4 tracking-tight outline-none" 
                        placeHolder="ایمیل یا شماره موبایل"/>

                        <Field  
                        className="border-1  w-full h-9 rounded-2xl border-gray-300 font-yekan-400 text-[11px] text-right pr-4
                        tracking-tight outline-none" 
                         placeHolder="رمر عبور"/>
                    </Form>
                </Formik>
            </div>
            <div className="w-full h-11 flex justify-between items-center">
                <span className="text-[9px] font-yekan-500 text-[#2196F3]"> رمز عبور را فراموش کردم </span>
                <div className="flex">
                    <label htmlFor="rememberMe" className="text-[9px]  font-yekan-500 text-[#455A64]"> من را بخاطر بسپار </label>
                    <input type="checkbox" id="rememberMe" className="hidden peer"  />
                    <span className="border-1 w-3 h-3 block ml-1 rounded-[5px] border-[#455A64]
                    peer-checked:bg-[#2196F3] peer-checked:border-none "
                    ></span>

                </div>
            </div>
            <Button text={"دریافت کد تایید"}/>
            <AuthSuggestion question={"حساب کاربری ندارید؟ "} suggest={"ثبت نام "}/>
        </div>
        
    )
}

export {Login}