import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Camera } from "lucide-react";
import * as Yup from "yup";
import http from "../../../core/services/interceptor/index";
import { useDispatch } from 'react-redux';
import { setAvatar } from "../../../redux/Store/profileSlice";

const EditProfilePage = () => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    fName: '',
    lName: '',
    nationalCode: '',
    email: '',
    phoneNumber: '',
    userAbout: '',
    birthDay: '',
    homeAdderess: '',
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataRes = await http.get("/SharePanel/GetProfileInfo");
        console.log("بعد از آپدیت گرفتن اطلاعات:", DataRes.data);
  
        if (DataRes?.data) {
          const userData = DataRes.data;
          setInitialValues({
            fName: userData.fName || '',
            lName: userData.lName || '',
            nationalCode: userData.nationalCode || '',
            email: userData.email || '',
            phoneNumber: userData.phoneNumber || '',
            userAbout: userData.userAbout || '',
            birthDay: userData.birthDay || '',
            homeAdderess: userData.homeAdderess || '',
          });
  
          
          if (userData.userImage && userData.userImage.length > 0) {
            setPreview(userData.userImage[0]);
          } else {
            setPreview("/default-avatar.png"); 
          }
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const validationSchema = Yup.object({
    fName: Yup.string().required("نام الزامی است"),
    lName: Yup.string().required("نام خانوادگی الزامی است"),
    nationalCode: Yup.string().required("کد ملی الزامی است").matches(/^\d{10}$/, "کد ملی باید 10 رقمی باشد"),
    phoneNumber: Yup.string().required("شماره موبایل الزامی است"),
    userAbout: Yup.string().required("لطفاً درباره‌ی خودتان بنویسید"),
    birthDay: Yup.string().required("تاریخ تولد الزامی است"),
    homeAdderess: Yup.string().required("آدرس محل سکونت الزامی است"),
  });

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

 
  const handleSubmit = async (values) => {
    setLoading(true);
    setMessage('');
  
    const sanitizedValues = { ...values };
  
    console.log("🧪 بررسی مقدار فیلدها:", sanitizedValues);
  
    try {
      console.log("📤 داده متنی برای آپدیت:", JSON.stringify(sanitizedValues, null, 2));
  
      await http.put("/SharePanel/UpdateProfileInfo", sanitizedValues);
  
      if (file) {
        const formData = new FormData();
        formData.append('userImage', file);
  
        const res = await http.post("/SharePanel/UpdateUserImage", formData);
  
        if (res?.data?.userImage) {
          dispatch(setAvatar(res.data.userImage));
        }
      }
  
      setMessage("پروفایل با موفقیت به‌روزرسانی شد.");
    } catch (err) {
      console.error("❌ خطا در ذخیره اطلاعات:", err);
      console.error("📛 جزئیات خطا:", err.response?.data?.ErrorMessage || err.response?.data);
      setMessage("خطا در ذخیره پروفایل!");
    } finally {
      setLoading(false);
    }
  };
  
  
  
  return (
    <div className="h-[90%] bg-white p-6 flex flex-col items-center justify-around" style={{ direction: "rtl" }}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
   
      >
        {() => (
          <Form className="w-[100%]  flex flex-col items-center">
            <div className="relative w-[10rem] h-[10rem] rounded-full overflow-hidden group mb-6">
              <img
                className="w-full h-full rounded-full border object-cover"
                src={preview || "/default-avatar.png"}
                alt="profile"
              />
              <div className="absolute top-[7rem] inset-0 bg-black/50 flex items-center justify-center text-white group-hover:top-[5rem] transition-all duration-500 cursor-pointer">
                <Camera />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            <div className="w-[85%] flex flex-wrap gap-10">
              <div>
                <label className="block mb-1">نام</label>
                <Field name="fName" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="fName" component="div" className="text-pink-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1">نام خانوادگی</label>
                <Field name="lName" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="lName" component="div" className="text-pink-500 text-sm mt-1" />

              </div>

              <div>
                <label className="block mb-1">کد ملی</label>
                <Field name="nationalCode" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="nationalCode" component="div" className="text-pink-500 text-sm mt-1" />

              </div>

              <div>
                <label className="block mb-1">شماره موبایل</label>
                <Field name="phoneNumber" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="phoneNumber" component="div" className="text-pink-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1">تاریخ تولد</label>
                <Field type="date" name="birthDay" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="birthDay" component="div" className="text-pink-500 text-sm mt-1" />

              </div>

              <div>
                <label className="block mb-1">ایمیل</label>
                <Field type="email" name="email" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="email" component="div" className="text-pink-500 text-sm mt-1" />

              </div>

              <div>
                <label className="block mb-1">محل سکونت</label>
                <Field name="homeAdderess" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="homeAdderess" component="div" className="text-pink-500 text-sm mt-1" />

              </div>

              <div>
                <label className="block mb-1">درباره من</label>
                <Field name="userAbout" className="w-[17rem] h-[45px] border rounded-lg border-slate-300 shadow-md" />
                <ErrorMessage name="userAbout" component="div" className="text-pink-500 text-sm mt-1" />

              </div>
            </div>

            <div className="w-full mt-8 flex justify-between px-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#6033FE] w-[12rem] hover:bg-[#6033A0] text-white px-4 py-2 rounded-lg shadow"
              >
                {loading ? "در حال ذخیره..." : "ذخیره تغییرات"}
              </button>
            </div>

            {message && <p className="text-green-600 mt-4">{message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfilePage;
