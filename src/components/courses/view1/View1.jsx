import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Heart } from '../../../../public/icons/heart'
import { Note } from '../../../../public/icons/Note'
import Calender from '../../../../public/icons/Calender'
import { Clock } from '../../../../public/icons/Clock'
import { Link } from 'react-router-dom'

const View1 = ({ data }) => {
  const cardRef = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateAmountX = -((y - centerY) / centerY) * 5
    const rotateAmountY = ((x - centerX) / centerX) * 5

    rotateX.set(rotateAmountX)
    rotateY.set(rotateAmountY)
  }

  const resetRotation = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

 return (
    <Link to={`/courseDetail/${data.courseId}`}>
      <motion.div
        ref={cardRef}
        className='w-[294px] flex justify-center flex-row-reverse gap-[31px] flex-wrap'
        initial={{ opacity: 0, y: 50, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ perspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <motion.div
          className='relative border-1 w-[296px] h-[389px] rounded-[24px] bg-white overflow-hidden landingInput text'
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d'
          }}
          whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >

         
          <motion.div
            className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"
            animate={{ left: ['-150%', '150%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className='w-[264px] m-auto'>

           
            <motion.div
              className='border-1 w-[264px] h-[180px] rounded-[20px] mt-[16px] overflow-hidden'
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={data.tumbImageAddress} alt="courseImg" className='w-full h-full object-cover' />
            </motion.div>

            <div className='w-[169px] h-[25px] text-[16px] font-yekan-700 place-self-start mt-[16px] text-fontColor-1 whitespace-nowrap courseTab'>
              {data.title}
            </div>

            <div className='w-[264px] h-[40px] rounded-[24px] mt-[12px] bg-[#ECEFF1] flex items-center justify-center gap-[24px]  landingInput text'>
              <div className='h-[19px] text-[12px] font-yekan-500 flex gap-[2px]'>
                <Note />
                202 درس
              </div>
              <div className='h-[19px] text-[12px] font-yekan-500 flex gap-[2px]'>
                <Clock />
                14 ساعت
              </div>
              <div className='h-[19px] text-[12px] font-yekan-500 flex gap-[2px]'>
                <Calender />
                1 آذر 1402
              </div>
            </div>

            <div className='w-[264px] h-[22px] flex flex-row-reverse mt-[16px] justify-between text-[14px] font-yekan-700'>
              <div className='w-[74px] whitespace-nowrap text-fontColor-1 courseTab'>
                {data.currentRegistrants} دانش‌آموز
              </div>
              <div className='w-[114px] text-fontColor-1 courseTab'>
                مدرس: {data.teacherName}
              </div>
            </div>

            <div className='w-[264px] h-[32px] flex flex-row-reverse mt-[14px] justify-between text-[14px] font-yekan-700 items-center'>
              <div className='w-[81px] h-[25px] flex gap-[3px] flex-row-reverse items-center'>
                <span className='w-[26px] h-[19px] text-[12px] font-yekan-500 text-fontColor-1'>تومان</span>
                <span className='text-[16px] font-yekan-700 text-primaryColor'>{data.cost}</span>
              </div>
              <div className='w-[51px] h-[32px] rounded-[24px] bg-[#FFEBEE] flex flex-row-reverse justify-center items-center gap-[3px]'>
                <span className='block text-[14px] font-yekan-500 text-[#F44336]'>{data.likeCount}</span>
                <Heart />
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </Link>
)

}

export { View1 }




// return (
//   <Link to={`/courseDetail/${data.courseId}`}>
//     <motion.div
//       ref={cardRef}
//       className="w-[294px] flex justify-center flex-row-reverse gap-[31px] flex-wrap
//         max-md:w-[230px] max-md:gap-[20px]
//         max-sm:w-full max-sm:gap-[16px] max-sm:flex-col max-sm:items-center
//       "
//       initial={{ opacity: 0, y: 50, rotateY: -10 }}
//       animate={{ opacity: 1, y: 0, rotateY: 0 }}
//       transition={{ duration: 0.7, ease: 'easeOut' }}
//       style={{ perspective: 1200 }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetRotation}
//     >
//       <motion.div
//         className="relative border-1 w-[296px] h-[389px] rounded-[24px] bg-white overflow-hidden
//           max-md:w-[230px] max-md:h-[320px]
//           max-sm:w-[90%] max-sm:h-[300px]
//         "
//         style={{
//           rotateX: rotateX,
//           rotateY: rotateY,
//           transformStyle: 'preserve-3d',
//         }}
//         whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
//         transition={{ type: 'spring', stiffness: 100, damping: 15 }}
//       >
//         {/* افکت برق subtle */}
//         <motion.div
//           className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"
//           animate={{ left: ['-150%', '150%'] }}
//           transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
//         />

//         <div className="w-[264px] m-auto
//           max-md:w-[200px]
//           max-sm:w-[90%]
//         ">
//           {/* تصویر با انیمیشن پالس دائمی */}
//           <motion.div
//             className="border-1 w-[264px] h-[180px] rounded-[20px] mt-[16px] overflow-hidden
//               max-md:w-[200px] max-md:h-[140px]
//               max-sm:w-full max-sm:h-[130px]
//             "
//             animate={{ scale: [1, 1.015, 1] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <img
//               src={data.tumbImageAddress}
//               alt="courseImg"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <div
//             className="w-[169px] h-[25px] text-[16px] font-yekan-700 place-self-start mt-[16px] text-fontColor-1 whitespace-nowrap courseTab
//               max-md:w-[160px] max-md:text-[14px] max-md:h-[22px]
//               max-sm:w-full max-sm:text-[14px] max-sm:h-auto max-sm:whitespace-normal
//             "
//           >
//             {data.title}
//           </div>

//           <div
//             className="w-[264px] h-[40px] rounded-[24px] mt-[12px] bg-[#ECEFF1] flex items-center justify-center gap-[24px]
//               max-md:w-[200px] max-md:h-[36px] max-md:gap-[16px]
//               max-sm:w-full max-sm:h-[34px] max-sm:gap-[12px]
//             "
//           >
//             <div className="h-[19px] text-[12px] font-yekan-500 flex gap-[2px]">
//               <Note />
//               202 درس
//             </div>
//             <div className="h-[19px] text-[12px] font-yekan-500 flex gap-[2px]">
//               <Clock />
//               14 ساعت
//             </div>
//             <div className="h-[19px] text-[12px] font-yekan-500 flex gap-[2px]">
//               <Calender />
//               1 آذر 1402
//             </div>
//           </div>

//           <div
//             className="w-[264px] h-[22px] flex flex-row-reverse mt-[16px] justify-between text-[14px] font-yekan-700
//               max-md:w-[200px] max-md:text-[13px] max-md:h-[20px]
//               max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-1 max-sm:h-auto max-sm:text-[13px]
//             "
//           >
//             <div className="w-[74px] whitespace-nowrap text-fontColor-1 courseTab
//               max-sm:w-full max-sm:whitespace-normal
//             ">
//               {data.currentRegistrants} دانش‌آموز
//             </div>
//             <div className="w-[114px] text-fontColor-1 courseTab
//               max-sm:w-full
//             ">
//               مدرس: {data.teacherName}
//             </div>
//           </div>

//           <div
//             className="w-[264px] h-[32px] flex flex-row-reverse mt-[14px] justify-between text-[14px] font-yekan-700 items-center
//               max-md:w-[200px] max-md:h-[28px] max-md:text-[13px]
//               max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:h-auto max-sm:gap-1
//             "
//           >
//             <div className="w-[81px] h-[25px] flex gap-[3px] flex-row-reverse items-center
//               max-sm:w-full max-sm:h-auto
//             ">
//               <span className="w-[26px] h-[19px] text-[12px] font-yekan-500 text-fontColor-1">
//                 تومان
//               </span>
//               <span className="text-[16px] font-yekan-700 text-primaryColor
//                 max-md:text-[14px]
//               ">
//                 {data.cost}
//               </span>
//             </div>
//             <div
//               className="w-[51px] h-[32px] rounded-[24px] bg-[#FFEBEE] flex flex-row-reverse justify-center items-center gap-[3px]
//                 max-sm:w-[60px] max-sm:h-[28px]
//               "
//             >
//               <span className="block text-[14px] font-yekan-500 text-[#F44336]
//                 max-md:text-[13px]
//               ">
//                 {data.likeCount}
//               </span>
//               <Heart />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   </Link>
// );



