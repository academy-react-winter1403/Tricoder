import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import http from "../../../core/services/interceptor";

const ChangePasswordPage = () => {
    const initialValues = {
        currentPass: '',
        Password: '',
        RepeatPassword: ''
    };

    const validation = Yup.object({
        currentPass: Yup.string().required("رمز عبور فعلی الزامی است"),
        Password: Yup.string()
            .min(8, "رمز جدید باید حداقل ۸ کاراکتر باشد")
            .required("رمز عبور جدید الزامی است"),
        RepeatPassword: Yup.string()
            .oneOf([Yup.ref('Password'), null], "رمز عبور با تکرار آن مطابقت ندارد")
            .required("تکرار رمز عبور الزامی است")
    });

    const handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
        try {
            await http.post("/SharePanel/ChangePassword", {
                oldPassword: values.currentPass,
                newPassword: values.Password,
            });
            setStatus({ success: "رمز عبور با موفقیت تغییر کرد." });
            resetForm();
        } catch (error) {
            console.error(" خطا در تغییر رمز:", error);
            setStatus({ error: "خطا در تغییر رمز. لطفاً رمز فعلی را بررسی کنید." });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center h-[90%]" style={{ direction: "rtl" }}>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status }) => (
                    <Form className="bg-white p-6 w-full md:w-[40rem] flex flex-col items-center justify-center gap-5">
                        <div className="w-[90%]">
                            <label className="block mb-1 text-slate-500">رمز عبور فعلی</label>
                            <Field
                                type="password"
                                name="currentPass"
                                className="h-[45px] w-full border rounded-lg border-slate-300 outline-none hover:outline-purple-700 shadow-md"
                            />
                            <ErrorMessage name="currentPass" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-[90%]">
                            <label className="block mb-1 text-slate-500">رمز عبور جدید</label>
                            <Field
                                type="password"
                                name="Password"
                                className="h-[45px] w-full border rounded-lg border-slate-300 outline-none hover:outline-purple-700 shadow-md"
                            />
                            <ErrorMessage name="Password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-[90%]">
                            <label className="block mb-1 text-slate-500">تکرار رمز عبور جدید</label>
                            <Field
                                type="password"
                                name="RepeatPassword"
                                className="h-[45px] w-full border rounded-lg border-slate-300 outline-none hover:outline-purple-700 shadow-md"
                            />
                            <ErrorMessage name="RepeatPassword" component="div" className="text-red-500 text-sm" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#6033FE] w-[12rem] hover:bg-[#6033A0] text-white px-5 py-3 rounded-lg shadow"
                        >
                            {isSubmitting ? "در حال ارسال..." : "ثبت اطلاعات"}
                        </button>

                        {status?.success && <p className="text-green-600 mt-2">{status.success}</p>}
                        {status?.error && <p className="text-red-600 mt-2">{status.error}</p>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePasswordPage;
