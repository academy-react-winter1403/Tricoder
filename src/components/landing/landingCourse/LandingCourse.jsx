import React from 'react'
import { Note } from '../../../assets/fonts/icons/landing/courseIcon/Note'
import { Clock } from '../../../assets/fonts/icons/landing/courseIcon/Clock'
import { Calender } from '../../../assets/fonts/icons/landing/courseIcon/Calender'
import { LikeIcon } from '../../../assets/fonts/icons/landing/courseIcon/LikeIcon'

const LandingCourse = () => {
    const course=[
        {
            img:"./public/landing/course/React.png",
            title:"دوره جامع React JS صفر تا صد",
            note:"202درس",
            time:"14ساعت",
            date:"1اذر1402",
            teacher:"دکتر بحرالعلوم",
            student:"256دانش اموز",
            like:12,
            price:5000
        },
        {
            img:"./public/landing/course/Notejs.png",
            title:"دوره جامع .net core صفر تا صد",
            note:"205درس",
            time:"18ساعت",
            date:"6اذر1407",
            teacher:"دکتر اصغری",
            student:"286دانش اموز",
            like:12,
            price:43000
        },
        {
            img:"./public/landing/course/Html5.png",
            title:"دوره جامع HTML 5 صفر تا صد",
            note:"276درس",
            time:"10ساعت",
            date:"6اذر1404",
            teacher:"دکتراسفندیاری",
            student:"206دانش اموز",
            like:13,
            price:60000
        },
        {
            img:"./public/landing/course/phyton.png",
            title:"دوره جامع pyton صفر تا صد",
            note:"376درس",
            time:"12ساعت",
            date:"6اذ1404",
            teacher:"دکتر قاسمی",
            student:"276دانش اموز",
            like:12,
            price:68000
        },
    ]
  return (
    <div className=' mx-30  my-40 flex  flex-col justify-center
     max-md:w-100 max-md:mt-70  '>
         <div className='w-70 h-18 border-b-4 b border-[#2196F3] mx-125
          max-md:h-9 max-md:w-30   max-lg:hidden '>
        <p className='text-[40px] text-center whitespace-nowrap 
         max-md:text-xl'>دوره‌های اموزشی  </p> 
            </div> 
            <div className='h-97  my-12 gap-8 flex
            max-md:grid grid-cols-2 max-xl:grid max-xl:grid-cols-2 max-xl:gap-x-90 max-lg:items-center  max-lg:-mr-20 max-lg:gap-9  '>

                {course.map((data,ind)=>(
                             <div key={ind} className='w-74 h-97 bg-[#FFFFFF] rounded-3xl p-4  shadow-2xl flex-col
                            max-lg:w-60 '>
                             <img   src={data.img} alt=''
                             className='max-md:w-43'/>
                             <p className='font-bold text-base font-yekan-600 my-4 
                             max-md:text-xs'>{data.title}</p>
                             <div className='w-66 h-10 rounded-3xl  bg-[#ECEFF1]  whitespace-nowrap my-3.5 flex justify-between py-2.5 px-4
                             max-md:w-45 max-md: max-md:'>
                                <div className='  w-14.5 flex  
                                max-md:mx-2'>
                                <div className='max-md:hidden'> <Note/></div>
                                 <p className='text-xs font-medium mr-1'>{data.note}</p>
                                </div>
             
                                <div className=' w-14.5 flex 
                                max-md:mx-2'>
                                <div className='max-md:hidden'> <Clock/></div>
                                 <p className='text-xs font-medium mr-1 tracking-tight'>{data.time}</p>
                                </div>
             
                                <div className=' w-14.5 flex  
                               max-md:mx-4 '>
                                <div className='max-md:hidden '> <Calender/></div>
                                 <p className='text-xs font-medium mr-1 '>{data.date}</p>
                                </div>
             
                             </div>
             
                             <div className='text-sm flex justify-between  my-4 
                             max-md:whitespace-nowrap'>
                                 <span className='font-bold whitespace-nowrap
                                 max-md:text-xs'>مدرس:  <span className='max-md:text-xs whitespace-nowrap font-normal'>{data.teacher} </span></span>
                                 <p className=' whitespace-nowrap
                                 max-md:mr-4 max-md:text-xs'>{data.student}  </p>
                             </div>
             
                                 <div className='flex gap-30 my-2.5
                                 max-md:gap-14'>
                                     <div className='w-13 h-8 rounded-3xl bg-[#FFEBEE] flex gap-1'>
                                         <LikeIcon/>
                                         <p className='text-[#F44336] leading-8.5'>{data.like}</p>
                                     </div>
                                     <div className='leading-10 '>
                                         <span className='text-[#2196F3] font-bold pl-1.5
                                         max-md:pl-1 max-md:text-sm'>{data.price}</span>
                                         <span className='max-md:text-sm'>تومان</span>
                                     </div>
             
             
                                 </div>
             
                          </div>
                ))}

    

            </div>
            <div className='w-fit bg-[#2196F3] rounded-[80px] px-6 py-3 mx-140
            max-md:mx-35 max-md:mt-110 '>
                <p className='font-bold text-center text-white  whitespace-nowrap '>مشاهده همه</p>

            </div>


      
    </div>
  )
}

export {LandingCourse} 
