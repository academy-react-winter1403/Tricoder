import React from 'react'
import teacherImg from "../../../assets/images/teacherimage.png";
import teacherIcon from "../../../assets/icons/teacher.svg";
import UseCourseDate from '../Hooks/useCourseData';

const TeacherInfo = ({courseid}) => {


  const {course , loading , error} = UseCourseDate(courseid);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;
 

  return (


   
  
     <div    className=' m-auto  flex    items-center gap-4    w-[100%]     md:w-[80%]   h-[100px] rounded-2xl  shadow-2xl pr-3 pl-2 mt-10 '>
     <img src={teacherImg}   alt="" />
    <div>
      <span   className='flex     '>
        <img src={teacherIcon} alt="" />
        {course?.teacherName}
      </span>
      <span   className='text-[#455A64]    text-xs '>
      
      </span>
    </div>
       
    </div>
   
  
   
  )
}


export default TeacherInfo;
