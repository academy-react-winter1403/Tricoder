

import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Camera}  from "lucide-react"
import * as Yup from "yup";
import  http from "../../../core/services/interceptor/index";

 const EditProfilePage = () => {
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
      http.get("/SharePanel/GetProfileInfo") 
        .then(res => {
          const data = res.data;
          setInitialValues({
            fName: data.fName || "",
            lName: data.lName || "",
            nationalCode: data.nationalCode || "",
            phoneNumber: data.phoneNumber || "",
            birthDay: data.birthDay || "",
            email: data.email || ""
          });
        });
    }, []);
  
    const validationSchema = Yup.object({
      fName: Yup.string().required("نام الزامی است"),
      phoneNumber: Yup.string().required("شماره موبایل الزامی است"),
    });



    const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await http.put("/User/UpdateUser", values);
          alert("اطلاعات با موفقیت ذخیره شد");
          console.log(response.data);
        } catch (error) {
            console.error("🛑 Axios error:", error);
            if (error.response) {
              console.log("✅ Server responded:", error.response.data);
            }else {
              console.log("🚨 Error in setting up the request:", error.message);
            }
            alert("خطا در اتصال به سرور");
          } finally {
            setSubmitting(false);
          }
      };
  
  
    return (
      <div className="   h-[90%] bg-white p-6   flex flex-col  items-center  justify-around  "   style={{direction:"rtl"}}>
            <div  className="w-[10rem]   h-[10rem]   rounded-full   overflow-hidden">
                <img  className="w-[10rem]   h-[10rem]   rounded-full   border" src="" alt="" />
                    <div  className="w-[10rem]   h-[5rem]  bg-slate-900/50  relative  bottom-[3.5rem]    transition-all duration-500   hover:bottom-[5rem] text-white flex justify-center   pt-4 ">
                    <Camera/>
                    </div>
            </div>
        <Formik  validationSchema={validationSchema} onSubmit={handleSubmit}   >
          <Form className="flex  flex-wrap gap-[3rem]  w-[100%]   lg:w-[85%] ">
            <div>
              <label className="block mb-1">نام</label>
              <Field name="fName" className="w-[17rem]  h-[45px]  border-3  rounded-lg   border-slate-300     hover:outline-[2px]   outline-[1px] outline-white   hover:outline-purple-700  shadow-md" />
              
              <ErrorMessage name="fName" className="text-pink-500 text-sm" component="div" />
            </div>
            <div>
              <label className="block mb-1">نام خانوادگی</label>
              <Field name="lName"  className="w-[17rem]  h-[45px]  border-3 rounded-lg   border-slate-300     hover:outline-[2px]   outline-[1px] outline-white  hover:outline-purple-700   shadow-md"/>
            </div>
            <div>
              <label className="block mb-1">کد ملی</label>
              <Field name="nationalCode" className="w-[17rem]   h-[45px]  border-3  rounded-lg   border-slate-300     hover:outline-[2px]   outline-[1px] outline-white hover:outline-purple-700   shadow-md" />
            </div>
            <div>
              <label className="block mb-1">شماره موبایل</label>
              <Field name="phoneNumber"  className="w-[17rem]  h-[45px]  border-3 rounded-lg   border-slate-300     hover:outline-[2px]    outline-[1px] outline-white  hover:outline-purple-700   shadow-md" />
              <ErrorMessage name="phoneNumber" className="text-pink-500    text-sm" component="div" />
              
            </div>
            <div>
              <label className="block mb-1">تاریخ تولد</label>
              <Field name="birthDay" type="date"  className="w-[17rem]   h-[45px]   border-3  rounded-lg   border-slate-300   outline-[1px] outline-white   hover:outline-[2px]  hover:outline-purple-700    shadow-md" />
            </div>
            <div>
              <label className="block mb-1">ایمیل</label>
              <Field
               name="email" type="email" className="w-[17rem]  h-[45px]   border-3  rounded-lg   border-slate-300   outline-[1px] outline-white   hover:outline-[2px]     hover:outline-purple-700   shadow-md" />

            </div>
           
          </Form>
        </Formik>

        <div className="w-[82%]   h-[3rem]  flex justify-between">
              
              <button onClick={handleSubmit}  className="bg-[#6033FE]   w-[12rem] hover:bg-[#6033A0]  text-white px-4 py3 rounded-lg shadow">
                ثبت اطلاعات
              </button>
              <button>
                بازگشت
                </button>
            </div>
      </div>
      

);
}

export default EditProfilePage;


