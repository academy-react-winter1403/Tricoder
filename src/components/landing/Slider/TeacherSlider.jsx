import React, { useState } from 'react'
import {  SliderIcon } from '../../../assets/fonts/icons/landing/slider/Slider'
import { Teacher1 } from '../../../assets/fonts/icons/landing/slider/teacher/Teacher1'
import { RightBtn } from '../../../assets/fonts/icons/landing/slider/RightBtn'
import { LeftBtn } from '../../../assets/fonts/icons/landing/slider/LeftBtn'

const TeacherSlider = () => {

    const [Slider , setSlider]=useState(0)

   

    const SlideItem=[
      {
        img:"./public/landing/slider/teacher1.png",
        title:"سالار حیدری",
        desc:"بکند, node js, .netcore, database",
      },
      {
        img:"./public/landing/slider/teacher2.png",
        title:" بهاره یزدانی",
        desc:"طراحی محصول و رابط کاربری",
      },
      {
        img:"./public/landing/slider/teacher3.png",
        title:" مسعود هشمتی",
        desc:"ریکت و انگلار",
      },
      {
        img:"./public/landing/slider/teacher4.png",
        title:"  دکتر بحرالعلوم",
        desc:"برنامه نویسی تحت فرانت و بکند",
      },
 

 

    ]

  return (
    <div className='my-25 bg-[#E3F2FD] h-187 pt-16
    max-md:h-150 max-xl:my-70'>
        <div className='h-130    mx-29 relative  '>

        <div className='w-70 h-18 border-b-4 b border-[#2196F3] mx-125
        max-md:h-9 max-md:w-30 max-md:mx-13  max-xl:mx-78'>
        <p className='text-[40px] text-center whitespace-nowrap
         max-md:text-xl '>اساتید برتر </p> 
        </div> 

        <div className='h-111  b mt-22 flex gap-1 items-center  
        max-md:w-115 max-md:-mr-29  max-md:mt-6'>
      

            {SlideItem.map((data,ind)=>(
                  <div className='w-74 h-95.5 relative rounded-3xl ' style={{marginTop: ind % 2 === 0 ? '80px' : '0px',}}>

                  <div className='bg-white  w-17 h-7 rounded-3xl flex items-center gap-0.5 absolute top-12 right-12
                  max-md:hidden max-xl:hidden'>
                  <div className='mr-1'> <SliderIcon/></div>
                    <p className='text-xs text-[#2196F3] mt-0.5 '> 202دوره</p>
                  </div>
    
                  <img className="w-full
                  max-md:" src={data.img} alt=''/>
                 
                  <div className='-mt-5 
                  max-md:mt-3'>
                  <p className='text-2xl font-bold text-center
                  max-md:text-sm'>{data.title}</p>
                  <p className='text-[#455A64] text-center
                  max-md:text-[13px]'>{data.desc} </p>
                  </div>
                </div>
             ))}
            <button className='absolute  right-276 
            max-md:right-63 max-md:top-70 max-xl:right-180 max-xl:top-70' ><LeftBtn/></button>
            <button className='absolute -right-8
            max-md:-right-36  max-md:top-70 max-xl:top-70' ><RightBtn/></button>
          
        </div>
             <div className='w-24 h-4 flex mx-138 gap-6 mt-9
             max-md:-mt-20 max-md:mx-17 max-xl:mx-96'>
              <div className='w-4 h-4 bg-[#2196F3] rounded-3xl
              max-md:w-3 max-md:h-3'></div>
              <div className='w-4 h-4 bg-[#2196F3] rounded-3xl
               max-md:w-3 max-md:h-3'></div>
              <div className='w-4 h-4 bg-[#ffff] rounded-3xl border-2 border-[#2196F3]
               max-md:w-3 max-md:h-3'></div>

             </div>

        </div>
      
    </div>
  )
}

export {TeacherSlider} 
