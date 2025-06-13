import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "../../common/button/button";
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion";
import { use, useState } from "react";

import http from "../../../core/services/interceptor";

import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setItem } from "../../../core/services/common/storage.services";

const Login = () => {

  const [phoneOrGmail, setPhoneOrGmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  console.log(remember);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      phoneOrGmail: phoneOrGmail,
      password: password,
      rememberMe: remember,
    };

    try {
      console.log(user)

      const data = await http.post("/Sign/Login", user);
      if (data.success) {
        toast.success("ورود با موفقیت انجام شد", {
          theme: "colored",
          className: "custom-toast",
        });
  
        setItem("token", data?.token);
        navigate("/");
      } else {
        toast.error("ورود با موفقیت انجام نشد", {
          theme: "colored",
          className: "custom-toast",
        });
      }
   
    } catch (error) {
      toast.error("اطلاعات ورودی نادرست است", {
        theme: "colored",
        className: "custom-toast",
      });
    }
  };

  return (
    <div className=" w-58 h-55 m-auto mb-4">
      <div>
        <form
          onSubmit={(values) => onSubmit(values)}
          // validationSchema={validation}
        >
          <div>
            <input
              name="email"
              type="text"
              onChange={(e) => setPhoneOrGmail(e.target.value)}
              className="border-1 w-full h-9 rounded-2xl border-gray-300 my-2  font-yekan-400 text-[11px] text-right
                            pr-4 tracking-tight outline-none"
              placeHolder="ایمیل یا شماره موبایل"
            />

            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-1  w-full h-9 rounded-2xl border-gray-300 font-yekan-400 text-[11px] text-right pr-4
                            tracking-tight outline-none"
              placeHolder="رمر عبور"
            />

            <div className="w-full h-11 flex justify-between items-center">
              <span className="text-[10px] font-yekan-500 text-[#2196F3]">
                {" "}
                رمز عبور را فراموش کردم{" "}
              </span>
              <div className="flex">
                <label
                  htmlFor="rememberMe"
                  className="text-[10px]  font-yekan-500 text-[#455A64]"
                >
                  {" "}
                  من را بخاطر بسپار{" "}
                </label>
                <input
                  name="rememberMe"
                  type="checkbox"
                  id="rememberMe"
                  className="hidden peer"
                  onClick={
                    remember == false
                      ? () => setRemember(true)
                      : () =>
                          setRemember(false) && remember == true
                            ? () => setRemember(false)
                            : () => setRemember(true)
                  }
                />
                <label htmlFor="rememberMe"
                  className="border-1 w-3 h-3 block mr-[2px] rounded-[5px] border-[#455A64]
                                    peer-checked:bg-[#2196F3] peer-checked:border-none peer-checked:bg-[url(src/assets/icons/Vector.png)]"
                ></label>
              </div>
            </div>

            <div className=" flex justify-center">
              <Button  > دریافت کد تایید </Button>
            </div>

            <div className=" flex justify-center">
              <AuthSuggestion
              link={"/Studentpanel/dashboard"}
              question={"حساب کاربری ندارید؟ "}
              suggest={"ثبت نام "}
              />
            </div>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
