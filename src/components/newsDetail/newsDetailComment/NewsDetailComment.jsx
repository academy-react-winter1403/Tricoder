import React, { useState } from "react";
import { NewsCommentLike } from "../../../assets/fonts/icons/newsDetail/newsComment/NewsCommentLike";
import { CommentReply } from "../../../assets/fonts/icons/newsDetail/newsComment/CommentReply";
import { NewsDetailReply } from "./NewsDetailReply";
import { useGetPostsQuery } from "../../../core/services/interceptor/reduxIndex";
import { useParams } from "react-router-dom";
import { useCreateNewsComments } from "../../../core/services/Mutation/CommentsMutation";
import { useGetCommentNews } from "../../../core/services/Query/GetAllCommentsQuery";
import CommentsDev from "./CommentsAllDev";
import CommentsAllDev from "./CommentsAllDev";

const NewsDetailComment = ({detailsNewsDto}) => {
  const { NewsId } = useParams();
  console.log(NewsId)

  return (
    <div className="rounded-3xl shadow-2xl flex flex-col gap-6 px-8 py-8">
    
    <CommentsAllDev

          id={detailsNewsDto.id}
          userId={detailsNewsDto.userId}
    />

      {/* Display Comments */}
       <p>درحال بارگذاری نظرات...</p>
       <p className="text-red-500">خطا در بارگذاری نظرات</p>
      

      {/* Replies Section */}
      <NewsDetailReply />
    </div>
  );
};

export { NewsDetailComment };