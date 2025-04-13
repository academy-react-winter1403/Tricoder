import React from 'react'
import HtmlCourse from "../../../assets/icons/htmlcourse.svg";
import heart from "../../../assets/icons/heart.svg";
import note from "../../../assets/icons/note-2.svg";
import clock from "../../../assets/icons/blackClock.svg";
import UseCourseDate from '../Hooks/useCourseData';

const CourseHeader = ({coursedid}) => {

    const {course , loading , error}  =
     UseCourseDate(coursedid);

    if (loading) return <p>در حال بارگذاری...</p>
    if (error) return <p>{error}</p>

  return (
    <div className='w-[100%]  '>
      <div   className='h-[36rem]'>

       
        <img src={course?.imageAddress}   className=''
          alt="" />

       <div className='relative   bottom-[92%] right-[5%]   rounded-full   p-2 w-[78px]   h-[2.5rem]  bg-white  flex items-center justify-around'>
          <h2   className='text-[#F44336]'>12</h2>
          <img src={heart}  alt="" />
        </div>


        <div className='relative   bottom-[7rem] right-[70%]   rounded-full   p-2  w-[6rem]   h-[2.5rem]  bg-white  flex items-center justify-around'>
          <img src={note} alt="" />
          <h2 className='font-bold text-sm   text-[#263238] '>202درس</h2>

        </div>

        <div className='relative   bottom-[9.5rem]  right-[85%]  rounded-full  p-2  w-[6rem]   h-[2.5rem]  bg-white   flex items-center justify-around'>
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