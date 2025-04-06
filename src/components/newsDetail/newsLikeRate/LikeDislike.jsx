import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter as  useParams } from 'react-router-dom';  
import axios from 'axios';
import http from '../../../core/services/interceptor';

const LikeDislike = () => {
    const { NewsId } = useParams();
    const [likesCount, setLikesCount] = useState(0);  
    const [dislikesCount, setDislikesCount] = useState(0);  
  
   
    useEffect(() => {  
      const fetchPostData = async () => {  
        try {  
          const response = await http.get(`/News/NewsLike/${NewsId}`);  
          setLikesCount(response.data.likes);  
          setDislikesCount(response.data.dislikes);  
        } catch (error) {  
          console.error('Error fetching post data:', error);  
        }  
      };  
  
      fetchPostData();  
    }, []);  
  
    const handleLike = () => {  
   
      http.post(`/News/NewsLike/
        `, {  NewsId })  
        .then(response => {  
          setLikesCount(likesCount + 1); 
          console.log('Like response:', response.data);  
        })  
        .catch(error => {  
          console.error('Error liking post:', error);  
        });  
    };  
  
    const handleDislike = () => {  
  
      http.post(`/News/NewsDissLike/`, {   NewsId })  
        .then(response => {  
          setDislikesCount(dislikesCount - 1);  
          console.log('Dislike response:', response.data);  
        })  
        .catch(error => {  
          console.error('Error disliking post:', error);  
        });  
    };  
  return (
    <div>
           <button  onClick={handleLike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px]  px-5 h-12'>
              <NewsLike />
              <p className='text-xl font-medium'>22</p>
            </button>
            <button  onClick={handleDislike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px] px-5 h-12'>
              <NewsDislike />
              <p className='text-xl font-medium'>0</p>

            </button>
    </div>
  )
}

export {LikeDislike} 
