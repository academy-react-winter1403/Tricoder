import React, { useEffect } from 'react'
import HtmlCourse from "../../../assets/icons/htmlcourse.svg";
import heart from "../../../assets/icons/heart.svg";
import HeartEmpty from "../../../assets/icons/HeartEmpty.png"
import note from "../../../assets/icons/note-2.svg";
import clock from "../../../assets/icons/blackClock.svg";
import UseCourseDate from '../Hooks/useCourseData';
import { useParams } from 'react-router-dom';
import { AddToFavorite , removeFromFavorites , getMyFavorites } from '../../../core/services/api/favoriteService';
import { useState } from 'react';




const CourseHeader = () => {

  const { courseId } = useParams()
  const { course, loading, error } = UseCourseDate(courseId);

  const [isFavorite, setIsFavorite] = useState(false);



  const handleAddToFavorites = async () => {

    if (isFavorite) return;
    try {
      await AddToFavorite(courseId);
      setIsFavorite(true)
      alert("به علاقه‌مندی‌ها اضافه شد!");
    } catch (error) {
      alert("خطا در افزودن به علاقه‌مندی‌ها", error);
    }
  };











  if (loading) return <p>در حال بارگذاری...</p>
  if (error) return <p>{error}</p>




   






  return (
    <div className='w-[100%]  '>
      <div className='h-[36rem]'>


        <img src={course?.imageAddress == null ? HtmlCourse : course?.imageAddress} className='w-[100%]   h-[100%]  rounded-2xl'
          alt="" />

        {/* {favorite button} */}
        <div className='relative   bottom-[92%] right-[5%]   rounded-full   p-2 w-[50px]   h-[2.5rem]  bg-white  flex items-center justify-around'
          onClick={handleAddToFavorites}  >
          <img src={isFavorite ? heart : HeartEmpty} alt="" />
        </div>


        <div className='relative   bottom-[7rem] md:right-[60%]  right-[45%]   rounded-full   p-2  w-[6rem]   h-[2.5rem]  bg-white  flex items-center justify-around'>
          <img src={note} alt="" />
          <h2 className='font-bold text-sm   text-[#263238] '>202درس</h2>

        </div>

        <div className='relative   bottom-[9.5rem]  md:right-[80%] right-[70%]   rounded-full  p-2  w-[6rem]   h-[2.5rem]  bg-white   flex items-center justify-around'>
          <img src={clock} alt="" />
          <h2 className=' font-bold text-sm   text-[#263238]  '>12ساعت</h2>
        </div>


      </div>

      <h2 className='text-right  font-bold     text-2xl text-[#263238]' >
        {course?.title}
      </h2>

      <p className='text-right m-3 font-normal  text-base  text-[#455A64] leading-6'>
        {course?.describe}
      </p>

    </div>
  )
}


export default CourseHeader;