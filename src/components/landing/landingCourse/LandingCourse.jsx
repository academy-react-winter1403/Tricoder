import React, { useEffect, useState } from 'react'
import { Note } from '../../../assets/fonts/icons/landing/courseIcon/Note'
import { Clock } from '../../../assets/fonts/icons/landing/courseIcon/Clock'
import { Calender } from '../../../assets/fonts/icons/landing/courseIcon/Calender'
import { LikeIcon } from '../../../assets/fonts/icons/landing/courseIcon/LikeIcon'
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import http from '../../../core/services/interceptor'
import { useGetPostsQuery, usePostToDynamicUrlMutation } from '../../../core/services/interceptor/reduxIndex'
import { useTranslation } from "react-i18next"



const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
};
  
const cardHover = {
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
};
  
const buttonTap = {
    scale: 0.95,
    transition: { duration: 0.1 }
};

const LandingCourse = () => {

             const {t} =useTranslation()
   

 
  
    

      const [postToDynamicUrl] = usePostToDynamicUrlMutation();
      console.log(postToDynamicUrl)
    
      const {data,error, isLoading } = useGetPostsQuery("/Home/GetCoursesTop?Count=4")
        console.log(data)
    
      if (data != undefined){
        console.log(data)
      }
      else if(data === undefined){
        console.error(error)
      }

  
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants} 
    className=' mx-30  my-40 flex  flex-col justify-center
      max-md:mt-80 max-md:mx-27  '>
        <motion.div 
        variants={itemVariants}
        className='w-70 h-18 border-b-4 b border-[#2196F3] mx-125
        max-md:h-9 max-md:w-30   max-lg:hidden '>

            <p className='text-[40px] text-center whitespace-nowrap 
            max-md:text-xl'>{t("courseTitle")} </p>

        </motion.div> 
            <div
                
            className='  my-12 gap-x-8 flex
             max-lg:gap-y-4  max-lg:flex-col '>
                
           
                {data?.map((data,ind)=>(
                     
                        <motion.div 
                        variants={itemVariants}
                        whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        key={ind} 
                        className={`w-74 h-97 bg-[#FFFF] rounded-3xl p-4  shadow-2xl flex-col 
                         max-lg:h-fit max-md:w-60 max-lg:justify-center landingInput`}>
                             <motion.img    
                             src={(data.tumbImageAddress) ? data.tumbImageAddress : "/newsDetail/notfound.jpg"}
                             alt=''
                             whileHover={{ scale: 1.05 }}
                             className='max-md:w-60  h-43 '/>
                             
                             <p className='font-bold text-base font-yekan-600 my-4 
                             max-md:text-xs'>{data.title}</p>

                             <div className='w-66 h-10 rounded-3xl  bg-[#ECEFF1]  whitespace-nowrap my-3.5 flex justify-between py-2.5 px-4 landingInput
                             max-md:w-54 max-md: max-md:'>
                                <div className='  w-14.5 flex  
                                max-md:mx-2'>
                                    <div className='max-md:hidden'> <Note/></div>
                                    <p className='text-xs font-medium mr-1'>{t("courseLesson")}</p>
                                </div>
             
                                <div className=' w-14.5 flex 
                                max-md:mx-1'>
                                    <div className='max-md:hidden'> <Clock/></div>
                                    <p className='text-xs font-medium mr-1 tracking-tight'>{t("courseTime")}</p>
                                </div>
             
                                <div className=' w-14.5 flex  
                               max-md:mx-2 '>
                                    <div className='max-md:hidden '> <Calender/></div>
                                    <p className='text-xs font-medium mr-1 '>{t("courseDate")}</p>
                                </div>
             
                             </div>
             
                             <div className='text-sm flex justify-between  my-4 
                             max-md:whitespace-nowrap'>
                                 <span className='font-bold whitespace-nowrap
                                 max-md:text-xs'>{t("courseTeacher")} <span className='max-md:text-xs whitespace-nowrap font-normal'>{data.teacherName} </span></span>
                                 <p className=' whitespace-nowrap
                                 max-md:mr-4 max-md:text-xs'>{data.like}  </p>
                             </div>
             
                                 <div className='flex gap-24 my-2.5
                                 max-md:gap-14'>
                                     <div className='w-13 h-8 rounded-3xl bg-[#FFEBEE] flex gap-0.5'>
                                         <LikeIcon/>
                                         <p className='text-[#F44336] leading-8.5'>{data.likeCount}</p>
                                     </div>
                                     <div className='leading-10 '>
                                         <span className='text-[#2196F3] font-bold pl-1.5
                                         max-md:pl-1 max-md:text-sm'>{data.cost}</span>
                                         <span className='max-md:text-sm'>{t("coursePrice")}</span>
                                     </div>
             
             
                                 </div>
             
                        </motion.div>
                ))}
               

            </div>
            
            <Link to={"/courses"}>
                <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={buttonTap}
                className='w-fit bg-[#2196F3] rounded-[80px] px-6 py-3 mx-140 max-lg:hidden'
            >
                <p className='font-bold text-center text-white whitespace-nowrap'>{t("ViewAll")}</p>
            </motion.div>
            </Link>
            
        </motion.div>
    )
}

export {LandingCourse}