import React from 'react'
import { LittleRectangle } from '../../../assets/fonts/icons/landing/category/LittleRectangle'
import { GroupIcon } from '../../../assets/fonts/icons/landing/category/GroupIcon'
import { CircleIcon } from '../../../assets/fonts/icons/landing/category/CircleIcon'
import { BigRectangle } from '../../../assets/fonts/icons/landing/category/BigRectangle'
import { TextIcon } from '../../../assets/fonts/icons/landing/category/TextIcon'
import { DataIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/DataIcon'
import { GameIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/GameIcon'
import { WebIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/WebIcon'
import { Design } from '../../../assets/fonts/icons/landing/category/littleIcon/Design'
import { motion } from "framer-motion";

const LandingCategory = () => {

  const CategoryItem = [
    {
      icon: <DataIcon />,
      title: "تحلیل داده",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 1
    },
    {
      icon: <GameIcon />,
      title: "بازی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 2

    },
    {
      icon: <WebIcon />,
      title: "امنیت شبکه",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 3
    },
    {
      icon: <Design />,
      title: "وب دیزاین",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 2
    }

  ]



  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      rotateY: 90,
      scale: 0.5
    },
    show: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const floatingIcons = {
    hidden: { y: 0 },
    show: (i) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };


  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }} 
    className='h-188 my-45
    max-md:my-39 max-xl:my-80 '>

      <motion.div 
      variants={floatingIcons}
      custom={1}
      className='max-md:hidden max-xl:hidden'>
        <LittleRectangle />
      </motion.div>

     <motion.div
     variants={floatingIcons}
     custom={2} 
     className='max-md:hidden max-xl:hidden'> 
        <GroupIcon />
     </motion.div>

      <div className='absolute top-725 right-153
      max-md:hidden max-xl:hidden'>  <CircleIcon /> </div>
      <div className='absolute right-110 top-610
      max-md:top-690 max-md:right-3 max-xl:top-673- max-xl:right-50 landingBigIcon'><BigRectangle /></div>
      <div className='absolute right-20 top-660
      max-md:hidden max-xl:top-560 max-xl:hidden'><TextIcon /></div>

      <motion.div
      variants={container} 
      className='w-172   absolute top-580 right-170 grid grid-cols-2 grid-rows-2 gap-8 
      max-md:right-7 max-md:top-700 max-md:gap-5 max-md:w-102 max-xl:right-50 max-xl:top-700 '>

        {CategoryItem.map((data, ind) => (
          <motion.div 
          key={ind} 
          className='bg-white w-82 h-82 rounded-3xl shadow-2xl relative
          max-md:w-51 max-md:h-57 landingInput' 
          variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px -15px rgba(33, 150, 243, 0.4)",
              transition: { type: "spring", stiffness: 300 }
            }}
            style={{ 
              top: ind % 2 === 1 ? '30px' : '0px',
              transformOrigin: "center bottom"
            }} >

              <motion.div 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className='mx-28 pt-10
              max-md:mx-11 max-md:pt-4'>{data.icon}
              </motion.div>
              
              <p className='font-black text-2xl text-center mt-6
              max-md:text-xl max-md:mt-2'>{data.title}</p>
              <p className='text-[#455A64] text-center mt-5 tracking-tight mx-10
              max-md:text-[11px] max-md:mt-1'>{data.desc}</p>
          </motion.div>

        ))}



      </motion.div>
    </motion.div>
  )
}

export { LandingCategory } 
