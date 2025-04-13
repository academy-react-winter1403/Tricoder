import React, { useState } from 'react'
import { Grid2 } from '../../../../public/icons/Grid2'
import { Grid1 } from '../../../../public/icons/Grid1'
import SearchIcons from '../../../../public/icons/SearchIcons'
import { Sort } from '../../../../public/icons/Sort'
import Arrow from '../../../../public/icons/arrow'
import { View1 } from '../view1/View1'
import { View2 } from '../view2/View2'
import { ChangePage } from "./../searchHeader/changePage/changePage"


const SearchHeader = () => {

    const [View, setView] = useState(true)

    


  return (
    <div>
        <div className=" h-[56px] flex justify-between flex-row-reverse gap-[16px] lg:">

            <div className='  h-[56px] rounded-[16px] flex  items-center justify-center gap-[26px] 
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]'>
                
                <div className='  h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[12px] justify-center'>
                    <div className='  h-[16px] mr-[16px] '>
                        <Sort/>
                    </div>
                    <div className='  h-[25px] '> محبوب ترین ها </div>
                    <div className=' ml-[20px] h-[24px] bg-center flex justify-center items-center mr-[5px]'> 
                        <Arrow/>
                    </div>
                </div>

            </div>

            <div
            className=' w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-[20px_16px]
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]'>
                <input 
                type="text" 
                className='w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]'
                placeholder='چی میخوای یاد بگیری؟'
                />
                <div className='relative z-200'>
                    <SearchIcons/>
                </div>
                
            </div>
            
            <div className='w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex flex-row-reverse justify-center 
            items-center bg-[#ECEFF1]'>
                <span 
                onClick={() => setView(false)}
                className={` block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 
                ${!View ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                    <Grid2/>
                </span>
                <span 
                onClick={() => setView(true)}
                className={`block w-[40px] h-[40px]  rounded-[16px]  flex justify-center items-center cursor-pointer transition-all duration-200 
                ${View ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                    <Grid1/>
                </span>
            </div>
        </div>

        <div className=' mt-[32px]' >
            {View? <View1/> : <View2/>}
        </div>
        <div className=' m-auto mt-[37px]'>
            <ChangePage/>
        </div>
    </div>
    
  )
}

export  {SearchHeader}