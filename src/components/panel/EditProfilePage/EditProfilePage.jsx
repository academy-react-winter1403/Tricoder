import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Camera } from "lucide-react";
import * as Yup from "yup";
import http from "../../../core/services/interceptor/index";
import { useDispatch } from 'react-redux';
import { setAvatar } from "../../../redux/Store/profileSlice"

const EditProfilePage = () => {
  const [initialValues, setInitialValues] = useState(undefined);
  const [preview, setPreview] = useState(undefined);
  const fileRef = useRef(null);

  const dispatch = useDispatch();


  useEffect(() => {


    http.get("/SharePanel/GetProfileInfo").then((res) => {
      const data = res;
      setInitialValues({
        fName: data.fName || "",
        lName: data.lName || "",
        nationalCode: data.nationalCode || "",
        phoneNumber: data.phoneNumber || "",
        birthDay: data.birthDay || "",
        email: data.email || "",
        avatar: null,
      });
      setPreview(data.avatarUrl || "/default-avatar.png");
    });
  }, []);


  const validationSchema = Yup.object({
    fName: Yup.string().required("نام الزامی است"),
    phoneNumber: Yup.string().required("شماره موبایل الزامی است"),
  });







  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      console.log(values)

      for (const key in values) {
        if (values[key]) {
          formData.append(key, values[key]);
        }
      }




      const response = await http.put("/SharePanel/UpdateProfileInfo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("اطلاعات با موفقیت ذخیره شد");
      console.log(response.data);
    } catch (error) {
      console.error("🛑 خطا:", error);
      alert("خطا در بروزرسانی اطلاعات");
    }
  };




  return (
    <div
      className="h-[90%] bg-white p-6 flex flex-col items-center justify-around"
      style={{ direction: "rtl" }}
    >

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="w-[100%]  flex flex-col items-center   ">
            <div className="relative w-[10rem] h-[10rem] rounded-full overflow-hidden group mb-6">
              <img
                className="w-full h-full rounded-full border object-cover"
                src={preview}
                alt="profile"
              />
              <div
                className="absolute   top-[7rem] inset-0 bg-black/50 flex items-center justify-center text-white group-hover:top-[5rem]  transition-all  duration-500  cursor-pointer"
                onClick={() => fileRef.current.click()}
              >
                <Camera />
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setPreview(previewUrl);
                    setFieldValue("avatar", file);
                    dispatch(setAvatar(previewUrl));


                  }
                }}

              />
            </div>

            <div className="  w-[85%]    flex   flex-wrap  gap-10 ">
              <div>
                <label className="block mb-1">نام</label>
                <Field
                  name="fName"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
                <ErrorMessage
                  name="fName"
                  component="div"
                  className="text-pink-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block mb-1">نام خانوادگی</label>
                <Field
                  name="lName"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
              </div>

              <div>
                <label className="block mb-1">کد ملی</label>
                <Field
                  name="nationalCode"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
              </div>

              <div>
                <label className="block mb-1">شماره موبایل</label>
                <Field
                  name="phoneNumber"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-pink-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block mb-1">تاریخ تولد</label>
                <Field
                  name="birthDay"
                  type="date"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
              </div>

              <div>
                <label className="block mb-1">ایمیل</label>
                <Field
                  name="email"
                  type="email"
                  className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md"
                />
              </div>
            </div>



            <div className="w-full mt-8 flex justify-between px-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6033FE] w-[12rem] hover:bg-[#6033A0] text-white px-4 py-2 rounded-lg shadow"
              >
                {isSubmitting ? "در حال ذخیره..." : "ثبت اطلاعات"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfilePage;
