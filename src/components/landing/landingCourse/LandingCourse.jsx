import React from 'react'
import { Note } from '../../../assets/fonts/icons/landing/courseIcon/Note'
import { Clock } from '../../../assets/fonts/icons/landing/courseIcon/Clock'
import { Calender } from '../../../assets/fonts/icons/landing/courseIcon/Calender'
import { LikeIcon } from '../../../assets/fonts/icons/landing/courseIcon/LikeIcon'
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

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
            max-md:text-xl'>دوره‌های اموزشی  </p>

        </motion.div> 
            <div
                
            className='  my-12 gap-x-8 flex
             max-lg:gap-y-4  max-lg:flex-col'>

                {course.map((data,ind)=>(
                        <motion.div 
                        variants={itemVariants}
                        whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        key={ind} 
                        className={`w-74 h-97 bg-[#FFFF] rounded-3xl p-4  shadow-2xl flex-col 
                         max-lg:h-fit max-md:w-60 max-lg:justify-center `}>
                             <motion.img    
                             src={data.img} 
                             alt=''
                             whileHover={{ scale: 1.05 }}
                             className='max-md:w-60'/>
                             
                             <p className='font-bold text-base font-yekan-600 my-4 
                             max-md:text-xs'>{data.title}</p>

                             <div className='w-66 h-10 rounded-3xl  bg-[#ECEFF1]  whitespace-nowrap my-3.5 flex justify-between py-2.5 px-4
                             max-md:w-54 max-md: max-md:'>
                                <div className='  w-14.5 flex  
                                max-md:mx-2'>
                                    <div className='max-md:hidden'> <Note/></div>
                                    <p className='text-xs font-medium mr-1'>{data.note}</p>
                                </div>
             
                                <div className=' w-14.5 flex 
                                max-md:mx-1'>
                                    <div className='max-md:hidden'> <Clock/></div>
                                    <p className='text-xs font-medium mr-1 tracking-tight'>{data.time}</p>
                                </div>
             
                                <div className=' w-14.5 flex  
                               max-md:mx-2 '>
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
                <p className='font-bold text-center text-white whitespace-nowrap'>مشاهده همه</p>
            </motion.div>
            </Link>
            
        </motion.div>
    )
}

export {LandingCourse}