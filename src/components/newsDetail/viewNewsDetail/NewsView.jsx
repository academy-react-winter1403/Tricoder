import React from 'react'
import { EyeIcon } from '../../../assets/fonts/icons/landing/NewsIcon/EyeIcon'
import { DataIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/DataIcon'
import { NewsDate } from '../../../assets/fonts/icons/landing/NewsIcon/NewsDate'
import { FullHeart } from '../../../assets/fonts/icons/newsDetail/FullHeart'

const NewsView = ({ detailsNewsDto }) => {
  return (
    <div className='flex px-20 pt-14 gap-8 
    max-lg:flex-col'>
      <div className="border-2 rounded-[5px]  h-fit w-[30%] ">
        <img className='relative' src={(detailsNewsDto.currentImageAddress) ? detailsNewsDto.currentImageAddress : "/newsDetail/notfound.jpg"} />

      </div>
      <div className='absolute  top-40 right-30 h-12 bg-[#FFFFFF] px-4 rounded-3xl flex items-center gap-1.5'> <FullHeart /> <p className='text-[#F44336] text-2xl font-medium'>{detailsNewsDto
        .inUsersFavoriteCount}</p></div>
      <div className='flex flex-col w-[60%] ' >
        <p className='text-[32px]  font-bold'>{detailsNewsDto.title}</p>
        <p className='font-normal text-[#455A64] text-base leading-7 w-fit'>{detailsNewsDto.describe}</p>

        <div className='flex justify-between  pt-4 items-center'>

          <div className='flex gap-4 mt-1 '>
            
            <div className='flex gap-1'>
              <EyeIcon />
              <p className='text-sm text-[#2196F3] '>{detailsNewsDto.currentView}</p>
            </div>


            <div className='w-1.5 h-1.5 rounded-[80px] bg-[#2196F3] mt-2'></div>

            <div className='flex gap-1'>
              <NewsDate />
              <p className='text-sm text-[#2196F3]
              max-lg:hidden '>{detailsNewsDto.insertDate}</p>
            </div>
          </div>
          <div className=' bg-white flex gap-3 justify-center rounded-2xl p-3 shadow-2xl landingInput'>
            <img className='w-10 h-10 rounded-xl' src='./public/landing/slider/teacher2.png' />
            <p className='font-bold  leading-10 pl-3
            max-lg:whitespace-nowrap'>{detailsNewsDto.addUserFullName}</p>

          </div>
        </div>
      </div>


    </div>
  )
}

export { NewsView } 
