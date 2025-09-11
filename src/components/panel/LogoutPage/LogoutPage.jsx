

import { LogOut, Power } from "lucide-react";
import { useState } from "react";
import { useAccent }  from '../../../app/layouts/StudentPanelLayout/StudentPanel'


 const LogoutPage = () => {
  const { accentColor } = useAccent();
  const [showModal, setShowModal] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/authentication/login"
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 to-white">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl px-10 py-12 text-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="bg-indigo-100 text-indigo-500 p-4 rounded-full">
            <LogOut className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">خروج از حساب</h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          با خارج شدن از حساب، برای ورود مجدد نیاز به وارد کردن اطلاعات دارید.
        </p>
        <button
           style={{backgroundColor: accentColor}}
          onClick={() => setShowModal(true)}
          className=" text-white text-lg px-8 py-3 rounded-lg shadow-md transition"
        >
          خروج از حساب
        </button>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-md text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">آیا مطمئنی؟</h2>
            <p className="text-sm text-gray-600 mb-6">
              آیا مطمئنی می‌خوای از حساب کاربری‌ت خارج بشی؟
            </p>
            <div className="flex justify-center gap-4">
              <button
               style={{backgroundColor: accentColor}}
                onClick={handleLogout}
                className=" text-white px-6 py-2 rounded-md text-sm"
              >
                بله، خارج شو
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-md text-sm"
              >
                نه، بی‌خیال
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

}



export default LogoutPage;

