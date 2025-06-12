import React, { useState, useEffect } from 'react'
import { Share } from '../../assets/fonts/icons/newsDetail/Share'
import { NewsMedia } from '../../assets/fonts/icons/newsDetail/NewsMedia'
import { NewsTwitter } from '../../assets/fonts/icons/newsDetail/NewsTwitter'
import { NewsInsta } from '../../assets/fonts/icons/newsDetail/NewsInsta'
import { FullStar } from '../../assets/fonts/icons/newsDetail/FullStar'
import { EmptyStar } from '../../assets/fonts/icons/newsDetail/EmptyStar'
import { NewsLike } from '../../assets/fonts/icons/newsDetail/NewsLike'
import { NewsDislike } from '../../assets/fonts/icons/newsDetail/NewsDislike'
import http from '../../core/services/interceptor'
import axios from 'axios'
import { LikeDislike } from './newsLikeRate/LikeDislike'
// import { NewsCommentLike } from '../../assets/fonts/icons/newsDetail/newsComment/NewsCommentLike'
// import { CommentReply } from '../../assets/fonts/icons/newsDetail/newsComment/CommentReply'
import { NewsDetailComment } from './newsDetailComment/NewsDetailComment'

const NewsContent = ({detailsNewsDto}) => {
  const star = [
    { icon: <EmptyStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },

  ]
 
   
  
  

  return (
    <div className='pt-12 mx-auto w-[54%]  flex flex-col gap-16 text-justify '>
      <div>
        <p className='text-2xl font-bold leading-19'> {detailsNewsDto.newsCatregoryName}</p>
        <p className='leading-6 text-[#455A64] '>{detailsNewsDto.googleDescribe}</p>
        <p className='text-[#455A64] leading-6'>مثال:</p>
        <p className='text-[#455A64] leading-6'>  </p>
        <div className='flex gap-4 pt-3 '>
          {/* <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div> */}
          <p className='font-medium leading-6'> 
            <span className='text-[#455A64] font-normal'></span>
          </p>

        </div>
        <div className='flex gap-4 pt-3'>
          {/* <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div> */}
          <p className='font-medium leading-6'> 
            <span className='text-[#455A64]'></span>
          </p>

        </div>
        <div className='flex gap-4 pt-3'>
          {/* <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div> */}
          <p className='font-medium leading-6'>
            <span className='text-[#455A64]'></span>
          </p>

        </div>
      </div>


      <img className='' src='/newsDetail/VideoPlayer.png' />

      <div className='flex flex-col gap-4'>
        <p className='text-[#455A64] leading-7'>{detailsNewsDto.miniDescribe}</p>
        <p className='text-[#455A64]'> </p>
      </div>


      <div className='flex flex-col gap-8'>
        <div className='bg-[#ECEFF1] flex justify-between items-center py-4 px-6 rounded-2xl landingInput'>
          <div className='flex gap-2'>
            <Share />
            <span className='font-bold text-base '>اشتراک گزاری</span>
          </div>

          <div className='flex gap-4 '>
            <NewsMedia />
            <NewsTwitter />
            <NewsInsta />
          </div>
        </div>

        <div className='flex justify-between 
         max-lg:flex-col max-lg:gap-2'>
          <div className='flex gap-4 items-center 
          '>
            {star.map((data, ind) => (
              <div className='flex gap-2 
              '>{data.icon}</div>
            ))}
            <p className='font-medium  
            max-lg:text-xs'>امتیاز {detailsNewsDto.currentRate} نفر</p>
            <div className='bg-[#2196F3] text-white font-bold text-xs w-20 h-8 rounded-[80px] text-center leading-8
            max-lg:'>ثبت دیدگاه</div>
          </div>
          <div className='flex gap-5 items-center 
          max-lg:flex-col '>
            <div className='font-medium text-[#455A64] whitespace-nowrap 
            max-lg:text-sm'>آیا از این مقاله راضی بودید؟</div>
       <LikeDislike detailsNewsDto={detailsNewsDto} />
          </div>
        </div>
      </div>

    <NewsDetailComment detailsNewsDto={detailsNewsDto}/>

    </div>
  )
}

export { NewsContent } 
