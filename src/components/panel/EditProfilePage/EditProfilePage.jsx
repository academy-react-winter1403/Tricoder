
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../../core/services/api/getUserInfo";
import { putUserInfo } from "../../../core/services/api/putUswrInfo";
import OnSetFormData from "../../../core/services/form-data/formData";
import { useAccent }  from '../../../app/layouts/StudentPanelLayout/StudentPanel'


const EditProfilePage = () => {
 const { accentColor } = useAccent();
  const [initialValues, setInitialValues] = useState(null);

  const GetProfileInfo = async () => {
    try {
      const callApi = await getUserInfo();
      const data = {
        FName: callApi?.fName,
        LName: callApi?.lName,
        UserAbout: callApi?.userAbout,
        HomeAdderess: callApi?.homeAdderess,
        NationalCode: callApi?.nationalCode,
        BirthDay: callApi?.birthDay,
      };
      setInitialValues(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const onSubmit = async (value) => {
    try {
      const res = OnSetFormData(value);
      const callApi = await putUserInfo(res);
      console.log(callApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProfileInfo();

  }, []);

  return (
    <div
      className="h-[90%] bg-white p-6 flex flex-col items-center justify-around"
      style={{ direction: "rtl" }} >

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >

        <Form className="w-[100%]  flex flex-col items-center   ">
          <div className="relative w-[10rem] h-[10rem] rounded-full overflow-hidden group mb-6">
            <img className="w-full h-full rounded-full border object-cover" alt="profile" />
            <div className="absolute  top-[7rem] inset-0 bg-black/50 flex items-center justify-center text-white group-hover:top-[5rem]  transition-all  duration-500  cursor-pointer">
              <Camera />
            </div>

          </div>

          <div className="  w-[85%]    flex   flex-wrap  gap-10 ">
            <div>
              <label htmlFor="FName" className="block mb-1">نام</label>
              <Field id="FName" name="FName" type="text" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
              <ErrorMessage name="FName" component="div" className="text-pink-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="LName" className="block mb-1">نام خانوادگی</label>
              <Field id="LName" name="LName" type="text" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
            </div>
            <div>
              <label htmlFor="NationalCode" className="block mb-1">کد ملی</label>
              <Field id="NationalCode" name="NationalCode" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
            </div>
            <div>
              <label htmlFor="HomeAdderess" className="block mb-1"> محل سکونت</label>
              <Field id="HomeAdderess" name="HomeAdderess" type="text" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
              <ErrorMessage name="HomeAdderess" component="div" className="text-pink-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="BirthDay" className="block mb-1">تاریخ تولد</label>
              <Field id="BirthDay" name="BirthDay" type="text" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
            </div>
            <div>
              <label htmlFor="NationalCode" className="block mb-1">درباره من</label>
              <Field id="UserAbout" name="UserAbout" type="text" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
            </div>
          </div>
          <div className="w-full mt-8 flex justify-between px-4">
            <button
                   style={{backgroundColor: accentColor}}
              type="submit"
              className=" w-[12rem] hover:bg-[#6033A0] text-white px-4 py-2 rounded-lg shadow"  >
              ثبت اطلاعات
            </button>
          </div>
        </Form>

      </Formik>
    </div>
  );
};

export default EditProfilePage;
