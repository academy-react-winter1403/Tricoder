import React, { useState } from 'react'
import { useCreateNewsComments } from '../../../core/services/Mutation/CommentsMutation';

const CreateComment = ({id , newsId}) => {

    console.log(newsId)
    console.log(id)


  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [userIp, setUserIp] = useState(null);


  // Mutation hook for posting comments


  const CommentNews = useCreateNewsComments();

  // Handle form submission
  const handlePostCommentNews = () => {
  
    const newComment = {
      newsId: newsId,
      userIpAddress: userIp,
      title: title,
      describe: describe,
      userId: id,
    };

    CommentNews.mutate(newComment);

  
  };


  return (
    <div>


      <p className="font-bold text-2xl text-center">نظر کاربران درباره این مقاله</p>
      
      {/* Comment Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePostCommentNews();
        }}
        className="flex flex-col gap-4 items-center"
      >
        <input
          className="h-12 w-full pr-4 border-2 border-[#CFD8DC] rounded-2xl text-sm text-[#607D8B] leading-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان نظر..."
        />
        <textarea
          className="h-25 w-full pr-4   pt-3 border-2 border-[#CFD8DC] rounded-2xl text-sm text-[#607D8B] leading-3"
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
          placeholder="متن نظر..."
        />
        <button
          type="submit"
          className="h-12 w-fit rounded-4xl px-6 leading-12 bg-[#2196F3] text-base font-bold text-white cursor-pointer"
        >
          ارسال
        </button>
      </form>


    </div>
  )
}

export default CreateComment