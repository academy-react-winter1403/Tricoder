import { Formik, Form, Field, ErrorMessage } from "formik";


const ChangePasswordPage = () => {
    return (
        <div className="flex justify-center  h-[90%]" style={{ direction: "rtl" }}>
            <Formik className="   bg-white p-6   " >
                <Form className="  w-[100%] flex flex-col  items-center  justify-center  gap-5   ">
                    <div className="w-[90%]   md:w-[50%]  " >
                        <lable className="block mb-1   text-slate-500">رمز عبور فعلی</lable>
                        <Field name="currentPass" className=" h-[45px]   w-[100%]   border-3 rounded-lg   border-slate-300   outline-[1px] outline-white   hover:outline-[2px]    hover:outline-purple-700   shadow-md"></Field>
                    </div>
                    <div className="w-[90%]   md:w-[50%]">
                        <lable className="block mb-1   text-slate-500">رمز عبور جدید</lable>
                        <Field name="Password" className="  h-[45px]  w-[100%]   border-3 rounded-lg   border-slate-300    outline-[1px] outline-white  hover:outline-[2px]     hover:outline-purple-700   shadow-md"></Field>
                    </div>
                    <div className="w-[90%]   md:w-[50%]">
                        <lable className="block mb-1   text-slate-500">تکرار رمز عبور جدید</lable>
                        <Field name="RepeatPassword" className="h-[45px]  w-[100%]   border-3 rounded-lg   border-slate-300    outline-[1px] outline-white  hover:outline-[2px]     hover:outline-purple-700   shadow-md"></Field>
                    </div>
                    <button className="bg-[#6033FE]   w-[12rem] hover:bg-[#6033A0]  text-white px-5 py-3 rounded-lg shadow">
                        ثبت اطلاعات
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default ChangePasswordPage;