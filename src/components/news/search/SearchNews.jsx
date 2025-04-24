import React, { useEffect, useState } from 'react'
import { NewsList } from '../NewsList/NewsList'
import http from '../../../core/services/interceptor'

const SearchNews = () => {
    const [NewsData, setNewsdata] = useState([])

    const getNewsData =async()=>{
        try {
            const response =await http.get("/News")
            setNewsdata(response.news)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getNewsData()
    }, [])
    

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
            {
                NewsData.map((items,index)=>(
                    <NewsList key={index} data={items}/> 
                ))
            }
            {/* */}
        </div>
    </div>
  )
}

export  {SearchNews}