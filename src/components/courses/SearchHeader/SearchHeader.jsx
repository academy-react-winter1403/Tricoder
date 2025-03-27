import React from 'react'

const SearchHeader = () => {
  return (
    <div className="w-[952px] h-[56px] flex justify-between">
        <div className=' w-[200px] h-[56px] rounded-[16px] flex items-center justify-center gap-[26px] 
        shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]'>

            <span
             style={{ backgroundImage: "url('public/icons/arrow-down.png')" }}
             className=' bg-center bg-cover w-[16px] h-[16px]  '
            ></span>
            
            <span className=' w-[118px] h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[6px] justify-center'>
                
                <span className='w-[88px] h-[25px]  block'> محبوب ترین ها </span>
                <span 
                style={{ backgroundImage: "url('public/icons/sort.png')" }}
                className=' w-[24px] h-[24px] bg-center bg-cover block'> </span>
            </span>

        </div>
        <div 
        style={{ backgroundImage: "url('public/icons/search-normal.png')" }}
        className=' w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-no-repeat  bg-[20px_16px]
        shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]'>
            <input 
            type="text" 
            className='w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]'
            placeholder='چی میخوای یاد بگیری؟'

            />
        </div>
        <div className='w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex justify-center 
        items-center bg-[#ECEFF1]'>
            <span className='block w-[40px] h-[40px] rounded-[16px] bg-no-repeat bg-center '
            style={{ backgroundImage: "url('public/icons/grid-2.png')" }}
            ></span>
            <span className='block w-[40px] h-[40px]  rounded-[16px] bg-white bg-no-repeat bg-center'
            style={{ backgroundImage: "url('public/icons/grid-1.png')" }}
            ></span>
        </div>
    </div>
  )
}

export  {SearchHeader}