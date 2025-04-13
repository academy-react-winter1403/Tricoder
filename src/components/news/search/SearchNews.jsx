import React from 'react'

const SearchNews = () => {
  return (
    <div className=' w-full'>
        <div className='  flex justify-center gap-[32px] max-sm:px-[15px] max-sm:flex-col max-sm:items-center max-sm:gap-[12px]'>
            <div className='w-[722px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] max-sm:w-full'>
                <input 
                type="text"
                placeholder='دنبال چی میگردی؟' 
                className='rounded-[16px] outline-[#2196F3] w-full h-full pr-[20px] text-right text-[16px]
                font-yekan-500 text-[#607D8B] max-md:text-[13px] max-md:w-[200px]'  />
            </div>


            <div 
            className=' w-[526px] h-[56px] justify-between text-[16px] font-yekan-500 text-[#607D8B] 
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] pl-[40px] pr-[8px] rounded-[16px] flex items-center
            max-xl:text-[14px] max-lg:text-[13px] max-lg:gap-[10px] max-md:w-[300px] max-md:gap-[7px]'>

                <div 
                className='  px-[31px]   text-[#FFFF] h-[40px] rounded-[12px] bg-[#2196F3]
                shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex items-center max-md:px-[20px]'> همه </div>

                <div className='' > محبوب‌ترین‌ها </div>
                <div className=''> پربازدیدترین‌ها </div>
                <div className=' text-[#607D8B] '> جدیدترین‌ها </div>
            </div>

        </div>

        <div className=' mt-[38px]  flex flex-wrap justify-center gap-[32px] max-2xl:gap-[26px] '>

            <div 
            className=' w-[375px] h-[447px]  flex flex-col items-center max-2xl:w-[347px] max-xl:w-[317px] max-lg:w-[300px]
            max-md:w-[280px]'>

                <div className='border-1 w-full h-[280px] rounded-[24px] mb-[24px]'> </div>

                <div className='text-right mb-[16px]'>
                    <p className=' text-[20px] font-yekan-700 mb-[8px] text-[#263238] max-xl:text-[18px]'>چگونه مطالعه موثر را برای شما آسانتر کنیم.</p>
                    <p className='  text-[15px] font-yekan-500 text-[#455A64] max-xl:text-[13px] '>لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از
                    طراحان گرافیک است   چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد.</p>
                </div>
                
                <div className='self-start h-[22px] flex gap-[16px] items-center'>
                    <span className='block text-[14px] font-yekan-500 text-[#2196F3]'>22 بازدید</span>
                    <span className='block w-[8px] h-[8px] rounded-[80px] bg-[#2196F3] '></span>
                    <span className='block text-[14px] font-yekan-500 text-[#2196F3]'>1402/7/2</span>
                </div>
            </div>




            <div className='border-1 w-[375px] h-[447px] flex  flex-row  max-2xl:w-[347px] max-xl:w-[317px]  max-lg:w-[300px] max-md:w-[280px]'>

            </div>
            <div className='border-1 w-[375px] h-[447px] max-2xl:w-[347px] max-xl:w-[317px] max-lg:w-[300px] max-md:w-[280px]'>

            </div>
            
        </div>
    </div>
  )
}

export  {SearchNews}