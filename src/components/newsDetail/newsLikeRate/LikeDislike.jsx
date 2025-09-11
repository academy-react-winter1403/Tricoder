import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter as  useParams } from 'react-router-dom';  
import axios from 'axios';
import http from '../../../core/services/interceptor';
import { NewsLike } from '../../../assets/fonts/icons/newsDetail/NewsLike';
import { NewsDislike } from '../../../assets/fonts/icons/newsDetail/NewsDislike';

const LikeDislike = ({ detailsNewsDto }) => {
  const { NewsId } = useParams();

  const [currentLikeCount, setLikesCount] = useState();
  const [currentDissLikeCount, setDislikesCount] = useState();
  const [currentLike, setCurrentLike] = useState(() => localStorage.getItem('vote' || ''))

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await http.get("/News/" + NewsId);
        console.log(response);
        setLikesCount(response.detailsNewsDto.currentLikeCount)
        setDislikesCount(response.detailsNewsDto.currentDissLikeCount)
      } catch (error) {
        console.error('Error fetching post data:', error);
      }

    };

    fetchPostData();
  }, [NewsId]);



  const handleLike = () => {

    http.post("/News/NewsLike/" + NewsId)
      .then(response => {
        console.log('Like response:', response);
        setLikesCount(currentLikeCount + 1)
        setDislikesCount(currentDissLikeCount - 1);
      })
      .catch(error => {
        console.error('Error liking post:', error);
      });
      handleVote('like')
  };

  const handleVote = (type) => {
      console.log(type,currentLike)
      if(currentLike == type) {
        localStorage.setItem('vote' , '')
        setCurrentLike('')
        handleUnLike()
        if (type === 'like'){
          setLikesCount(currentLikeCount - 1)
        }
        else {
          setDislikesCount(currentDissLikeCount - 1)
        }
      }
      else {
          setCurrentLike(type)
          localStorage.setItem('vote', type)
      }
      
  }

  const handleDislike = () => {

    http.post("/News/NewsDissLike/" + NewsId)
      .then(response => {
        console.log(response);
        setDislikesCount(currentDissLikeCount + 1);
        setLikesCount(currentLikeCount - 1);
        
      })
      .catch(error => {
        console.error('Error disliking post:', error);
      });
      handleVote('dissLike')
  };
  const handleUnLike = () => {

    http.delete("/News/DeleteLikeNews", { data: { "deleteEntityId": "<uuid>" } })
      .then(response => {
        console.log(response);

        setLikesCount(currentLikeCount - 1),
        setDislikesCount(currentDissLikeCount - 1)
      })
      .catch(error => {
        console.error('Error disliking post:', error);
      });
  };

  return (
    <div className='flex gap-1'>
      <button onClick={handleLike} className={`flex items-center gap-1.5 ${currentLike === 'like' ? "bg-gray-400" : "bg-[#ECEFF1]"} rounded-[50px]  px-5 h-12 `}>
        <NewsLike />
        <p className='text-xl font-medium'>{currentLikeCount}</p>
      </button>
      <button onClick={handleDislike} className={`flex items-center gap-1.5 rounded-[50px] px-5 h-12 ${currentLike === 'dissLike' ? "bg-gray-400" : "bg-[#ECEFF1]"}`} >
        <NewsDislike />
        <p className='text-xl font-medium'>{currentDissLikeCount}</p>
      </button>
    </div>
  )
}

export { LikeDislike }

