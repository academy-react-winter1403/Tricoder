import React from 'react'

const Filters = () => {
  return (
    <div className='w-[296px] h-[779px] rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] pt-[12px]'>
        <div className='w-[272px] h-[48px] rounded-[16px]  m-auto bg-[#ECEFF1] flex justify-center gap-[166px] items-center mb-[20px]'>
            <span 
            style={{ backgroundImage: "url('public/icons/Delete.png')" }}
            className='block w-[32px] h-[32px]  bg-red rounded-[12px] bg-center' ></span>
            <span className='block w-[54px] h-[25px]  flex justify-center gap-[6px]' >
                <span className=' block  w-[28px] h-[25px] font-yekan-500 text-[16px]'> فیلتر </span>
                <span 
                style={{ backgroundImage: "url('public/icons/filter.png')" }}
                className='block w-[20px] h-[20px] bg-center'></span>
            </span>
        </div>
        
        <div>
            <ul className=' w-full h-[75px] p-0 m-0 '>
                <li className=' h-[37px]  border-b-[#ECEFF1] border-b-1'> 
                    <div className=' w-[248px] h-[25px] m-auto'>
                        <input id='categories' type="checkBox" className='hidden'/>
                        <label htmlFor="categories"
                         style={{ backgroundImage: "url('public/icons/arrow-down.png')" }}
                        className='font-yekan-500 text-[16px] block text-right bg-no-repeat bg-left'> دسته بندی ها </label>
                        
                    </div>
                </li>
                <li className=' h-[37px] pt-12'> 
                    <div className=' w-[248px] h-[25px] m-auto'>
                        <input id='categories' type="checkBox" className='hidden'/>
                        <label htmlFor="categories"
                         style={{ backgroundImage: "url('public/icons/arrow-down.png')" }}
                        className='font-yekan-500 text-[16px] block text-right bg-no-repeat bg-left'> قیمت  </label>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export  {Filters}