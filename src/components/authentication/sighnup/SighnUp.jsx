import { Field, Formik } from "formik"
import { Form, useNavigate } from "react-router-dom"
import { Button } from "../../common/button/button"
import { useState } from "react"
import { useSelector } from "react-redux"
import http from "../../../core/services/interceptor"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const SignUp = ()=>{
    const [password,setPassword] = useState()
    const [repeatPassword,setRepeatPassword] = useState()
    const [gmail,setGmail] = useState()
    const phoneNumber = useSelector((state) => {return state.auth.phoneNumber});

        
    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const userInfo ={
            gmail:gmail,
            phoneNumber:phoneNumber,
            password:password && repeatPassword
        }

        console.log(userInfo);
        


        if (password ===repeatPassword) {
            const response = await http.post("/Sign/Register", userInfo)
            toast.success("خوش آمدید", {
                theme: "colored",
                className: "custom-toast",
            });
            navigate("/")
        }
        else{
            toast.error("اطلاعات ورودی نادرست است", {
                theme: "colored",
                className: "custom-toast",
            });
        }
    }

  

    return(
        <div className=" w-58 h-60 m-auto mb-4">
           <div>
                
                    <form 
                    onSubmit={(e) => handleSubmit(e)}
                    >
                        <input 
                        name="gmail"
                        type="text"
                        onChange={(e) => setGmail(e.target.value)}
                        className="border-1 w-full h-9 rounded-2xl border-gray-300 my-2  font-yekan-400 text-[11px] text-right
                        pr-4 tracking-tight outline-none" 
                        placeHolder="ایمیل"/>

                        <input  
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-1  w-full h-9 rounded-2xl border-gray-300 font-yekan-400 text-[11px] text-right pr-4
                        tracking-tight outline-none" 
                        placeHolder="رمز عبور"/>

                        <input  
                        name="repeatPass"
                        type="password"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="border-1  w-full h-9 rounded-2xl border-gray-300 font-yekan-400 text-[11px] text-right pr-4
                        tracking-tight mt-2 outline-none" 
                        placeHolder=" تکرار رمز عبور "/>

                        <div className="w-full h-11 flex justify-end items-center">
                            <div className="flex">
                                <label htmlFor="rememberMe" className="text-[9px]  font-yekan-500 text-[#455A64]"> من را بخاطر بسپار </label>
                                
                                <input type="checkbox" id="rememberMe" className="hidden peer "  />
                                <span className="border-1 w-3 h-3 block ml-1 rounded-[5px] border-[#455A64]
                                peer-checked:bg-[#2196F3] peer-checked:border-none "></span>
                            </div>
                        </div>

                        <Button> ورود به حساب  </Button>
                    </form>
                
            </div>

            
        </div>
    )
}

export {SignUp}



  // const getPassword =(e)=>{
    //     if (e === password) {
    //         setRepeatPassword(e)
    //     }
    //     else{
            
            
    //     }
    // }