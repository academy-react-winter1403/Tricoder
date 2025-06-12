import React from 'react'
import { ChartIcon } from '../../../assets/fonts/icons/landing/servicesIcon/ChartIcon'
import { JobIcon } from '../../../assets/fonts/icons/landing/servicesIcon/JobIcon'
import { PersonalCard } from '../../../assets/fonts/icons/landing/servicesIcon/PersonalCard'
import { motion } from "framer-motion";

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


    const container = {
      hidden: { opacity: 0 },
      show: {
          opacity: 1,
          transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2
          }
      }
  };

  const item = {
      hidden: { opacity: 0, y: 50 },
      show: {
          opacity: 1,
          y: 0,
          transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
          }
      }
  };

  const hoverEffect = {
      scale: 1.03,
      boxShadow: "0 15px 35px -10px rgba(33, 150, 243, 0.3)",
      transition: { type: "spring", stiffness: 400 }
  };


   
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={container}
    className='   mx-30 mt-80      max-lg:mx-23 '>
        <motion.div
        variants={item}  
        className='w-70 h-18 border-b-4 b  mx-125  border-[#2196F3]  border-b-gradient-to-r from-[#2196F300] via-[#2196F3] to-[#2196F300] 
        max-md:h-9 max-md:w-30  max-md:hidden  max-lg:hidden '>

          <p className='text-[40px] text-center 
          max-md:text-xl '>خدمات ما</p> 

        </motion.div> 
            <motion.div className='h-70  my-20 flex gap-8 
            max-lg: max-md:mt-28    max-lg: max-lg:flex-col max-lg:gap-2'>

          {service.map((data,ind)=>(

                 <motion.div
                 key={ind}
                 variants={item}
                 whileHover={hoverEffect}
                 style={{boxShadow: ind % 2 === 1 ? '0 9px 32px -14px ' : '',}} 
                 className='bg-[#FAFEFF2E] h-70 w-99 border-[2px] border-[#fff3f33b] rounded-3xl
                  max-lg:w-66 max-lg:h-58 max-lg:px-2 LandingTeacher'>
                    <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className='max-lg:-mr-20'>{data.icon}</motion.div>

                  
    
                    <p className='text-2xl font-black text-center leading-12 
                    max-md:text-xl max-lg:leading-8'>{data.title}</p>
                    <p className='text-base font-bold text-center text-[#455A64]
                    max-md:text-xs max-xl:text-sm max-lg:text-[8px]'>{data.desc}</p>
                 </motion.div>
 
          ))}
            </motion.div>
           
    </motion.div>
  )
}

export {Service} 
