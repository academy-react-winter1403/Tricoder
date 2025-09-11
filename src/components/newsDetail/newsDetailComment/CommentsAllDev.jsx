import React, { useState } from 'react'
import { useCreateNewsComments } from '../../../core/services/Mutation/CommentsMutation';
import CreateComment from './CreateComment';
import { useGetCommentNews } from '../../../core/services/Query/GetAllCommentsQuery';
import { NewsCommentLike } from '../../../assets/fonts/icons/newsDetail/newsComment/NewsCommentLike';
import { CommentReply } from '../../../assets/fonts/icons/newsDetail/newsComment/CommentReply';

const CommentsAllDev = ( {id , userId}) => {

const params = {
    NewsId : id
  }
  console.log(params)

  
  // Fetch existing comments


  const GetAllComments = useGetCommentNews(params)
  console.log(GetAllComments.data) 




  return (
    <div>


    <CreateComment
      id={userId}
      newsId={id}
    />


        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

     {
        GetAllComments.data?.map((comment, index) => (
          <div key={index} className="w-full flex flex-col gap-2.5">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className="border-2 rounded-3xl w-8 h-8"
                  src={comment?.pictureAddress}
                  alt="User Profile"
                />
                <p className="font-medium leading-8 text-base">{comment.autor}</p>
              </div>
              <div className="text-[#607D8B] text-xs font-normal leading-8">
                2 روز پیش
              </div>
            </div>
            <p className="text-sm text-[#455A64]">{comment.describe}</p>
            <div className="flex gap-3">
              <div className="flex gap-1 items-center">
                <p className="text-[#F44336] text-sm font-bold">{comment.likeCount}</p>
                <NewsCommentLike />
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[#455A64] text-sm font-normal">{comment.replyCount} پاسخ</p>
                <CommentReply />
              </div>
            </div>
          </div>
        ))}


    </div>
  )
}

export default CommentsAllDev