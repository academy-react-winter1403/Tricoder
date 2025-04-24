import React from 'react'
import { Link } from 'react-router-dom'

const NewsList = ({data}) => {
  return (

    <Link to={"/newsDetail/" + data.id}>
        <div 
            className=' w-[375px] h-[447px]  flex flex-col items-center max-2xl:w-[347px] max-xl:w-[317px] max-lg:w-[300px]
            max-md:w-[280px]'>

                <div className='border-1 w-full h-[280px] rounded-[24px] mb-[24px] overflow-hidden'> 
                    <img src={data.currentImageAddressTumb} alt="newsimage" className='w-full h-full'/>
                </div>

                <div className='text-right mb-[16px]  w-full'>
                    <p className=' text-[20px] font-yekan-700 mb-[8px] text-[#263238] max-xl:text-[18px] w-fit h-fit'>{data.title}</p>
                    <p className='  text-[15px] font-yekan-500 text-[#455A64] max-xl:text-[13px] '> {data.miniDescribe}</p>
                </div>
                
                <div className='self-start h-[22px] flex gap-[16px] items-center'>
                    <span className='block text-[14px] font-yekan-500 text-[#2196F3]'>{data.currentView} بازدید</span>
                    <span className='block w-[8px] h-[8px] rounded-[80px] bg-[#2196F3] '></span>
                    <span className='block text-[14px] font-yekan-500 text-[#2196F3]'>1402/7/2</span>
                </div>
        </div>
    </Link>
        
    
  )
}

export  {NewsList}