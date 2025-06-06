import React, { useEffect, useState } from 'react'
import { DeleteCourse } from "../../../assets/icons/studentPanel/DeleteCourse";
import { LikeIcon } from '../../../assets/fonts/icons/landing/courseIcon/LikeIcon';
import { FullHeart } from '../../../assets/fonts/icons/newsDetail/FullHeart';
import http from '../../../core/services/interceptor';
import axiosInstance from "../../../core/services/interceptor/axiosInstance"



const MyFavoriteCourse = () => {
const [myFav, setMyFav] = useState([]);

const getMyFavoriteCourse = async () => {
  try {
    const res = await axiosInstance.get("/SharePanel/GetMyFavoriteCourses")
    setMyFav(res.data.favoriteCourseDto)
    console.log("favorite courses response:", res.data.favoriteCourseDto);
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    getMyFavoriteCourse();
  }, [])


  console.log("favorite courses response:", myFav);

  // const favoriteCourse = [
  //   {
  //     courseType: "ری اکت",
  //     courseTeacher: " نام مدرس دوره",
  //     startDate: "1402/7/19",
  //     coursePrice: "35000 تومان",
  //     delete: <FullHeart />
  //   },
  //   {
  //     courseType: "نکست ",
  //     courseTeacher: " نام مدرس دوره",
  //     startDate: "1402/7/18",
  //     coursePrice: "95000 تومان",
  //     delete: <FullHeart />
  //   },

  // ]
  return (
    <div className="flex flex-col px-11 pt-15 rtl gap-6 w-full">
      {/* عنوان ستون‌ها در دسکتاپ */}
      <div className="hidden md:flex bg-[#6033FE] text-white text-center py-4 gap-[5rem] w-full rounded-[10px] whitespace-nowrap">
        <p className="flex-1">مدیریت</p>
        <p className="flex-1">قیمت</p>
        <p className="flex-1">تاریخ شروع</p>
        <p className="flex-1">مدرس</p>
        <p className="flex-1">نام دوره</p>
        <p className="flex-1">تصویر</p>
      </div>
  
      {/* لیست علاقه‌مندی‌ها */}
    {myFav.map((data) => (
        <div
        
          className="flex flex-col md:flex-row gap-4 text-right text-sm md:text-center bg-gray-200 md:py-3.5 md:px-13 rounded-[10px] leading-8"
        >
          {/* موبایل */}
          {/* <div className="md:hidden flex flex-col gap-1 p-4">
            <p><span className="font-bold">نام دوره:</span> {data.courseTitle}</p>
            <p><span className="font-bold">مدرس:</span> {data.teacheName}</p>
            <p><span className="font-bold">تاریخ شروع:</span> {data.lastUpdate}</p>
            <p><span className="font-bold">نوع:</span> {data.typeName}</p>
            <img
              src={data.tumbImageAddress}                                     
              alt="course"
              className="w-full h-auto rounded-md mt-2"
            />
            <div className="flex items-center gap-2 mt-2">
              <div className="border-2 border-black w-6 h-6 rounded-[4px]"></div>
              <button className="text-red-500 font-bold"><FullHeart /></button>
            </div>
          </div>
   */}
          {/* دسکتاپ */}
          <div className="hidden md:flex justify-between w-full items-center gap-4"    key={data.favoriteId}  >
            <button className="text-red-500 font-bold"><FullHeart /></button>
            <p className="flex-1">{data.typeName}</p>
            <p className="flex-1">{data.lastUpdate}</p>
            <p className="flex-1">{data.teacheName}</p>
            <p className="flex-1">{data.courseTitle}</p>
            <div className="flex-1">
              <img
                src={data.tumbImageAddress}
                alt="course"
                className="w-20 h-auto rounded-md mx-auto"
              />
            </div>
          </div>
        </div>
      ))}
      </div>
  );
  
}
export { MyFavoriteCourse }