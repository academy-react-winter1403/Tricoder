import React from 'react'
import { FullHeart } from '../../../assets/fonts/icons/newsDetail/FullHeart'
import { PanelReserve } from '../../../assets/fonts/icons/userPanel/PanelReserve'

 const MyReservedCourse = () => {
  const favoriteCourse=[
    {
      courseType:"ری اکت",
      courseTeacher:" نام مدرس دوره",
      startDate:"1402/7/19",
      coursePrice:"35000 تومان",
      delete:<FullHeart/>
  },
  {
      courseType:"نکست ",
      courseTeacher:" نام مدرس دوره",
      startDate:"1402/7/18",
      coursePrice:"95000 تومان",
      delete:<FullHeart/>
  },
   
]
  return (
    <div className=" flex flex-col px-11 pt-15 rtl gap-6 w-full 
    ">

        <div className="flex gap-36 bg-[#6033FE] text-white  text-center py-4 w-full px-9  whitespace-nowrap rounded-[10px] 
        max-lg:gap-5 max-md:text-xs">
               <p> مدیریت</p>
               <p>قیمت</p>
               <p>تاریخ شروع</p>
               <p>مدرس</p>
               <p> نام دوره</p>
            <p>تصویر</p>
          
           
           
            
         

        </div>
        {favoriteCourse.map((data,ind) =>(
                  <div key={ind} className="flex gap-32.5 text-center py-3.5 w-full px-10 whitespace-nowrap rounded-[10px] bg-gray-200 justify-center leading-8
                  max-lg:gap-5 max-md:text-xs max-md:gap-4">
                         <PanelReserve/>
                         <p>{data.coursePrice}</p>
                         <p>{data.startDate}</p>
                         <p>{data.courseTeacher}</p>
                         <p> {data.courseType}</p>
                     <div className="border-2 border-black w-6 h-6 rounded-[4px]"></div>
                  
                
                  
                 
                
     
                 </div>
        ))}

  

    </div>
  )
  
}
 export{MyReservedCourse}