import React from 'react'
import { NewsCommentLike } from "../../../assets/fonts/icons/newsDetail/newsComment/NewsCommentLike"
import { CommentReply } from '../../../assets/fonts/icons/newsDetail/newsComment/CommentReply'

const NewsDetailReply = () => {
  return (
        
           <div  className='w-full flex flex-col gap-2.5  border-r-2 border-[#CFD8DC] pr-4 mr-4'>
      
      <div className='flex justify-between '>
      <div className='flex gap-2'>
         <div className=' border-2 rounded-3xl w-8 h-8'></div>
         <p className='font-medium leading-8 text-base'>محمد زمانی</p>
       </div>
       <div className='text-[#607D8B] text-xs font-normal leading-8'>2 روز پیش</div>
      </div>

       <p className='text-sm text-[#455A64]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.</p>
      
       <div className='flex gap-3'>
         <div className='flex gap-1'>
           <p className='text-[#F44336] text-sm font-bold'>7</p>
           <NewsCommentLike/>
         </div>
         <div className='flex gap-1'>
           <p className='text-[#455A64] text-sm font-normal'>پاسخ</p>
           <CommentReply/>
         </div>
       </div>
   </div>
        
  
  )
}

export {NewsDetailReply} 
