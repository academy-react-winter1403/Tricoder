import React, { useState } from 'react'
import { NewsCommentLike } from "../../../assets/fonts/icons/newsDetail/newsComment/NewsCommentLike"
import { CommentReply } from '../../../assets/fonts/icons/newsDetail/newsComment/CommentReply'
import { NewsDetailReply } from './NewsDetailReply'
import { useGetPostsQuery, usePostToDynamicUrlMutation } from '../../../core/services/interceptor/reduxIndex'
import { useLocation, useParams } from 'react-router-dom'
import { title } from 'framer-motion/client'
import axios from 'axios'
import http from '../../../core/services/interceptor'
import { number } from 'yup'


const NewsDetailComment = () => { 
  const { NewsId } = useParams();
  const location = useLocation()
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

 
  const [postToDynamicUrl] = usePostToDynamicUrlMutation();
  console.log(postToDynamicUrl)

  const {data,error, isLoading } = useGetPostsQuery("/News/GetNewsComments?NewsId=" + NewsId)
  if (data != undefined){
    console.log(data)
  }
  else if(data === undefined){
    console.error(error)
  }

  const handleSubmit = ()=>{
    postToDynamicUrl({
      url: "/News/CreateNewsComment",
      data: {
        newsId: NewsId,
        title: title,
        describe:comment,
      }
    })
   }
   console.log(postToDynamicUrl)
  
  

  // const handleSubmit = async (value) => {
  //   const { NewsId, title, describe } = value;

  //   const formData = new FormData();
  //    formData.append("newsId" , NewsId);
  //    formData.append("Title", title);
  //   formData.append("Describe", describe);
   

  //   try {
  //     const responseData = await http.post(
  //       "/News/CreateNewsComment",
  //       formData,
  //     );

  //     if (responseData.success) {
  //       alert("Comment posted successfully!");
  //     } else {
  //       alert("Failed to post comment");
  //     }

  //     return responseData;
  //   } catch (error) {
  //     alert(
  //       "Error: " +
  //         (error.response ? error.response.message : error.message),
  //     );
  //   }
//   // };
//  const dataObj  = {title,describe , newsId , userIpAddress , userId}
//  http.post("/News/CreateNewsComment" , dataObj)
 

  return (
    <div>
        <div className='rounded-3xl shadow-2xl flex flex-col gap-6 px-8 py-8'>
              <p className='font-bold text-2xl text-center'>نظر کاربران درباره این مقاله</p>
              <div className='flex flex-col gap-4 items-center'>
              <input className='h-12 w-full pr-4 border-2 border-[#CFD8DC]  rounded-2xl text-sm text-[#607D8B] leading-3' onChange={(e) => setTitle(e.target.value) } placeholder='نظر خودتو بنویس...' />

                <textarea className='h-25 w-full pr-4 border-2 border-[#CFD8DC]  rounded-2xl text-sm text-[#607D8B] leading-3' onChange={(e) => setComment(e.target.value) } placeholder='نظر خودتو بنویس...' />
                <button onClick={() => handleSubmit()} className='h-12 w-fit rounded-4xl px-6 leading-12 bg-[#2196F3] text-base font-bold text-white cursor-pointer '>ارسال</button>
               

                {data?.map((data,ind)=>(
                     <div key={ind} className='w-full flex flex-col gap-2.5 '>
      
                     <div className='flex justify-between'>
                     <div className='flex gap-2'>
                     <img
                    className=" border-2 rounded-3xl w-8 h-8"
                    src={data?.pictureAddress}
                  />
                        <p className='font-medium leading-8 text-base'>{data.autor} </p>
                      </div>
                      <div className='text-[#607D8B] text-xs font-normal leading-8'>2 روز پیش</div>
                     </div>
        
                      <p className='text-sm text-[#455A64]'>{data.describe}</p>
                     
                      <div className='flex gap-3'>
                        <div className='flex gap-1'>
                          <p className='text-[#F44336] text-sm font-bold'>{data.likeCount}</p>
                          <NewsCommentLike/>
                        </div>
                        <div className='flex gap-1'>
                          <p className='text-[#455A64] text-sm font-normal'> {data.replyCount}  پاسخ  </p>
                          <CommentReply/>
                        </div>
                      </div>
                  </div>
                ))}
               
                <NewsDetailReply/>
              </div>
      
            </div>
      
    </div>
  )
}

export {NewsDetailComment} 
