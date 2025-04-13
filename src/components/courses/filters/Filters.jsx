import React from 'react'
import  { AccordionList } from './filtersAccordion/FiltersAccrdion'


const Filters = () => {
  return (
    <div className='  rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] pt-[12px]'>
        <div className='mx-[12px]  h-[48px] rounded-[16px]  m-auto bg-[#ECEFF1] flex flex-row-reverse justify-center gap-[166px] items-center mb-[20px]'>
            <span 
            style={{ backgroundImage: "url('public/icons/Delete.png')" }}
            className='block w-[32px] h-[32px] ml-[14px] bg-red rounded-[12px] bg-center' ></span>
            <span className='block w-[54px] h-[25px]  flex flex-row-reverse justify-center gap-[6px]' >
                <span className=' block  w-[28px] h-[25px] font-yekan-500 text-[16px]'> فیلتر </span>
                <span 
                style={{ backgroundImage: "url('public/icons/filter.png')" }}
                className='block w-[20px] h-[20px] bg-center'></span>
            </span>
        </div>
        
        <div>
          <AccordionList />
        </div>
        
    </div>
  )
}

export  {Filters}
