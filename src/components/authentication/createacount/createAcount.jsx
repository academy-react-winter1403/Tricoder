import { Button } from "../../common/button/button";
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion";
import { useState } from "react";
import http from "../../../core/services/interceptor";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../../redux/phoneNumberSlice";
import { setItem } from "../../../core/services/common/storage.services";

const CreateAcount = () => {
  const dispatch = useDispatch();
  
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  console.log(phoneNumber);
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userNumber = {
      phoneNumber: String(phoneNumber),
    };

    try {
      const response = await http.post("/Sign/SendVerifyMessage", userNumber);
      console.log(response);
      setItem(response)
      toast.success(" شماره با موفقیت ثبت شد ", {
        theme: "colored",
        className: "custom-toast",
      });

      navigate("/authentication/code");
    } catch (error) {
      toast.error(" شماره نامعتبر است ", {
        theme: "colored",
        className: "custom-toast",
      });
    }
  };

  return (
    <div className="w-58 h-36 m-auto mb-4">
      <div>
        <form onSubmit={(values) => handleSubmit(values)}>
          <input
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))} 
            type="text"
            name="phoneNumber"
            className="border-1 w-full h-9 rounded-2xl border-gray-300 my-2  font-yekan-400 text-[11px] text-right
                        pr-4 tracking-tight outline-none"
            placeHolder="شماره موبایل"
          />
          <Button>دریافت کد تایید</Button>
          <AuthSuggestion
            link={"/authentication/login"}
            question={"حساب کاربری دارید؟ "}
            suggest={"وارد شوید  "}
          />
        </form>
      </div>
    </div>
  );
};

export { CreateAcount };
