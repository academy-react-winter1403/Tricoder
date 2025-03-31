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
    //
  return (
    <div className=' h-97  mx-30 mt-20 
   '>
        <div  className='w-70 h-18 border-b-4 b  mx-125  border-[#2196F3]  border-b-gradient-to-r from-[#2196F300] via-[#2196F3] to-[#2196F300] 
        max-md:h-9 max-md:w-30  max-md:hidden max-lg:bg-red '>
        <p className='text-[40px] text-center 
        max-md:text-xl '>خدمات ما</p> 
            </div> 
            <div className='h-70  my-20 flex gap-8 
            max-lg: max-md:mt-28 max-lg:grid-cols-2 max-lg:grid-rows-2   max-lg:'>

          {service.map((data,ind)=>(
                 <div style={{boxShadow: ind % 2 === 1 ? '0 9px 32px -14px ' : '',}} className='bg-[#FAFEFF2E] h-70 w-99 border-[2px] border-[#fff3f33b] rounded-3xl
               '>
                 <div className='max-md:-mx-15 max-xl:-mx-9'>{data.icon}</div>
                 <p className='text-2xl font-black text-center leading-12 
                 max-md:text-xl max-lg:leading-7'>{data.title}</p>
                 <p className='text-base font-bold text-center text-[#455A64]
                 max-md:text-xs max-xl:text-sm'>{data.desc}</p>
                 </div>
 
          ))}
            </div>
           
    </div>
  )
}

export {Service} 
