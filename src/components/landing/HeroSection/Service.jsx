import React from 'react'
import { ChartIcon } from '../../../assets/fonts/icons/landing/servicesIcon/ChartIcon'
import { JobIcon } from '../../../assets/fonts/icons/landing/servicesIcon/JobIcon'
import { PersonalCard } from '../../../assets/fonts/icons/landing/servicesIcon/PersonalCard'

const Service = () => {
    const service=[
        {
            icon:<ChartIcon/>,
            title:"سادگی خدمات ",
            desc:"سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
        },
        {
            icon:<JobIcon/>,
            title:"فرصت های شغلی",
            desc:"سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "

        },
        {
            icon:<PersonalCard/>,
            title:"مدرک معتبر",
            desc:"سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
          
        }
    ]
  return (
    <div className='w-320 h-97.5  mx-20 mt-20
    max-md:w-100 max-md:mt-7'>
        <div className='w-70 h-18 border-b-4 b border-[#2196F3] mx-125
        max-md:h-9 max-md:w-30 max-md:mx-20 '>
        <p className='text-[40px] text-center 
        max-md:text-xl max-md:'>خدمات ما</p> 
            </div> 
            <div className='h-70  my-20 flex gap-8 
            max-md:flex-col max-md:-my-5  max-md:gap-1 '>

          {service.map((data,ind)=>(
                 <div className='bg-[#FAFEFF2E] h-70 w-99 border-[2px] border-[#fff3f33b] rounded-3xl
                 max-md:w-70  max-md:h-46'>
                 <div className='max-md:-mx-15'>{data.icon}</div>
                 <p className='text-2xl font-black text-center leading-12 
                 max-md:text-xl'>{data.title}</p>
                 <p className='text-base font-bold text-center text-[#455A64]
                 max-md:text-xs'>{data.desc}</p>
                 </div>
 
          ))}
            </div>
           
    </div>
  )
}

export {Service} 
