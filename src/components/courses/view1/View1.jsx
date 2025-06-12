import React, { useState } from 'react'
import { Heart } from '../../../../public/icons/heart'
import { Note } from '../../../../public/icons/Note'
import Calender from '../../../../public/icons/Calender'
import { Clock } from '../../../../public/icons/Clock'
import http from '../../../core/services/interceptor'
import { Link } from 'react-router-dom'

const View1 = ({data}) => {
   


  return (
    <Link to={"/courseDetail/" + data.courseId}>
        <div className='w-[294px]  flex justify-center flex-row-reverse gap-[31px] flex-wrap'>
            <div className='border-1 w-[296px] h-[389px] rounded-[24px]'>

                <div className=' w-[264px]  m-auto'>

                    <div className='border-1 w-[264px] h-[180px] rounded-[20px] m-auto mt-[16px] overflow-hidden'>
                        <img src={data.tumbImageAddress} alt="courseImg" className='w-full h-full overflow-hidden' />
                    </div>
                    <div className='  w-[169px] h-[25px] text-[16px] font-yekan-700 place-self-start mt-[16px] text-fontColor-1 whitespace-nowrap courseTab'> {data.title}</div>
                    <div className=' w-[264px] h-[40px] rounded-[24px] mt-[12px] bg-[#ECEFF1] flex items-center justify-center gap-[24px] '>
                        <div className=' h-[19px]  text-[12px] font-yekan-500 flex gap-[2px]'>
                            <Note/>
                            202درس
                        </div>
                        <div className=' h-[19px] text-[12px] font-yekan-500 flex gap-[2px]'>
                            <Clock/>
                            14ساعت
                        </div>
                        <div className=' h-[19px] text-[12px] font-yekan-500 flex gap-[2px]'>
                            <Calender/>
                            1آذر1402
                        </div>
                    </div>

                    <div className=' w-[264px] h-[22px] flex flex-row-reverse mt-[16px] justify-between text-[14px] font-yekan-700 '>
                        <div className=' w-[74px] whitespace-nowrap text-fontColor-1 courseTab'> {data.currentRegistrants} دانش‌آموز </div>
                        <div className=' w-[114px] text-fontColor-1 courseTab '> مدرس: {data.teacherName} </div>
                    </div>

                    <div className='w-[264px] h-[32px] flex flex-row-reverse mt-[14px] justify-between text-[14px] font-yekan-700 items-center '>
                        <div className=' w-[81px] h-[25px] flex gap-[3px] flex-row-reverse items-center'> 
                            <span className=' w-[26px] h-[19px]  text-[12px] font-yekan-500 text-fontColor-1'>تومان  </span>
                            <span className='  text-[16px] font-yekan-700 text-primaryColor'> {data.cost}</span>
                        </div>
                        <div className=' w-[51px] h-[32px] rounded-[24px] bg-[#FFEBEE] flex flex-row-reverse justify-center items-center gap-[3px]'> 
                            <span 
                            
                            className='block text-[14px] font-yekan-500 text-[#F44336] '> {data.likeCount} </span>
                            <Heart/>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    </Link>
    
  )
}

export  {View1}