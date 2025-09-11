import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../common/button/button";
import { AuthSuggestion } from "../../common/AuthSuggestion/AuthSuggestion";
import { useRef, useState } from "react";
import http from "../../../core/services/interceptor";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Code = ({ length = 5, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);
  const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const userCode = {
      verifyCode: otp.join(""),
    };
    try {
      const response = await http.post("/Sign/VerifyMessage", {
        phoneNumber,
        verifyCode:userCode.verifyCode
    });
    toast.success("ورود با موفقیت انجام شد", {
        theme: "colored",
        className: "custom-toast",
    });
    navigate("/authentication/signup")
    console.log(response);
    
    } catch (error) {
        console.log(error);
        toast.error("اطلاعات ورودی نادرست است", {
            theme: "colored",
            className: "custom-toast",
        });
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus(); 
    }
  };
  const handlePaste = (e) => {
    e.preventDefault(); 
    const pasteData = e.clipboardData.getData("text"); 
    if (!/^\d*$/.test(pasteData)) return; 

    const pasteArray = pasteData.split("").slice(0, length); 
    setOtp(pasteArray.concat(Array(length - pasteArray.length).fill(""))); 

    
    const lastFilledIndex = pasteArray.length - 1;
    if (inputsRef.current[lastFilledIndex]) {
      inputsRef.current[lastFilledIndex].focus();
    }
  };

  return (
    <div className=" w-57 h-55 m-auto mb-4 ">
      <p className="font-yekan-500 text-[11px] text-right  text-[#455A64]">
        کد به شماره {phoneNumber} ارسال شد، در صورت اشتباه بودن شماره آنرا
        <Link className="underline decoration-sky-600 text-sky-600">
          {" "}
          تغییر دهید{" "}
        </Link>
      </p>
      <form onSubmit={e => handleSubmit(e)}  >
        <div className="mt-2 h-15 flex justify-center items-center gap-2 font-yekan-500">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <h4 className="font-yekan-500 mt-2 text-[#2196F3]">1:23</h4>
        </div>
        
        <div className="flex justify-center">
          <button
          onClick={() => onSubmit(otp.join(""))}
          className="text-[10px] px-9 py-[11px] rounded-3xl bg-[#2196F3] text-white font-yekan-500"
        >
          ساخت حساب کابری
        </button>
        </div>
        
      </form>

      <div className="flex justify-center">
        <AuthSuggestion question={"کدارسال نشد؟"} suggest={"ارسال دوباره"} />
      </div>

      
    </div>
  );
};

export { Code };

{
  /* <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                <input type="text" className="block  border-1 w-10 h-10 rounded-2xl border-gray-300 leading-10 text-fontColor-1 text-center outline-[#2196F3]"/>
                 */
}
