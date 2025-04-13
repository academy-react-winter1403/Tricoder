import React from 'react'
import Teacher from '../../../../public/icons/Teacher'
import { TwoUser } from '../../../../public/icons/TwoUser'
import { Note } from '../../../../public/icons/Note'
import { Clock } from '../../../../public/icons/Clock'
import Calender from '../../../../public/icons/Calender'

const View2 = () => {
  return (
    <div className=' flex flex-col gap-[32px]'>
        <div className='border-1 h-[212px] rounded-[24px] flex flex-row-reverse justify-center gap-[20px] items-center'>
            <div className=' w-[628px] h-[180px]'>
                <div className=' w-[190px] h-[25px] whitespace-nowrap text-[16px] font-yekan-700 place-self-start text-fontColor-1 '> دوره جامع .net core صفر تا صد </div>

                <div className=' w-[628px] h-[66px] mt-[8px] text-right text-fontColor-1 text-[14px] font-yekan-500'>
                محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به
                روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه 
                ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته 
                و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.
                </div>

                <div className='  h-[44px] mt-[21px] flex flex-row-reverse justify-between items-center'>
                    <div className=' w-[98px] h-[31px] flex items-center justify-center gap-[4px] '> 
                        <span className='text-[20px] font-yekan-700 block text-primaryColor'> 500،000</span>
                        <span className='text-[14px] font-yekan-500 block text-fontColor-1'> تومان</span>
                    </div>
                    <div 
                    className=' w-[493px] h-[44px] rounded-[24px] bg-[#ECEFF1] flex text-[14px] font-yekan-500 
                    justify-center gap-[16px] items-center'>
                        <div className='flex items-center gap-[2px]'> 
                            <Teacher/>
                            دکتر بحرالعلوم 
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <TwoUser/>
                            256دانش آموز
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <Note/>
                            202 درس
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <Clock/>
                            14ساعت
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <Calender/>
                            1آذر1402
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-1 w-[264px] h-[180px] rounded-[20px]'></div>
        </div>

        

        
    </div>
  )
}

export  {View2}