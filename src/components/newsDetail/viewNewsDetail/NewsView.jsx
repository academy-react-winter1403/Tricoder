import React from 'react'
import { EyeIcon } from '../../../assets/fonts/icons/landing/NewsIcon/EyeIcon'
import { DataIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/DataIcon'
import { NewsDate } from '../../../assets/fonts/icons/landing/NewsIcon/NewsDate'
import { FullHeart } from '../../../assets/fonts/icons/newsDetail/FullHeart'

const NewsView = ({detailsNewsDto}) => {
  return (
    <div className='flex px-20 pt-14 gap-8 '>
      <img className='relative' src={detailsNewsDto.currentImageAddress}/>
      <div className='absolute  top-40 right-30 h-12 bg-[#FFFFFF] px-4 rounded-3xl flex items-center gap-1.5'> <FullHeart/> <p className='text-[#F44336] text-2xl font-medium'>{detailsNewsDto
      .inUsersFavoriteCount}</p></div>
      <div className='flex flex-col '>
        <p className='text-[32px]  font-bold'>{detailsNewsDto.title}</p>
        <p className='font-normal text-[#455A64] text-base leading-7'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش  دیدن و یادگیری است.همانطور که از عنوان مقاله.
        قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک عمیقی از اون مطلب میرسند؟ قطعا خیر.</p>
       
        <div className='flex justify-between  pt-4 items-center'>

          <div className='flex gap-4 mt-1 '>
          <div className='flex gap-1'>
           <EyeIcon/>
           <p className='text-sm text-[#2196F3] '>{detailsNewsDto.currentView}</p>
          </div>

          <div className='w-1.5 h-1.5 rounded-[80px] bg-[#2196F3] mt-2'></div>

          <div className='flex gap-1'>
           <NewsDate/>
           <p className='text-sm text-[#2196F3] '>{detailsNewsDto.insertDate}</p>
          </div>
          </div>
          <div className=' bg-white flex gap-3 justify-center rounded-2xl p-3 shadow-2xl'>
          <img className='w-10 h-10 rounded-xl' src='./public/landing/slider/teacher2.png'/>
            <p className='font-bold  leading-10 pl-3'>{detailsNewsDto.addUserFullName}</p>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export {NewsView} 
