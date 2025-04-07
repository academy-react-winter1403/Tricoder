import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter as  useParams } from 'react-router-dom';  
import axios from 'axios';
import http from '../../../core/services/interceptor';
import { NewsLike } from '../../../assets/fonts/icons/newsDetail/NewsLike';
import { NewsDislike } from '../../../assets/fonts/icons/newsDetail/NewsDislike';

const LikeDislike = () => {
    // const { NewsId } = useParams();
    const [likesCount, setLikesCount] = useState(0);  
    const [dislikesCount, setDislikesCount] = useState(0);  
  
   
    useEffect(() => {  
        const fetchPostData = async () => {  
            try {  
              const response = await http.get("/News/329ae713-52bd-ef11-b6f0-8a9b429a6ab6");  
              console.log(response);
              setLikesCount(response.detailsNewsDto.currentLikeCount)
              setDislikesCount(response.detailsNewsDto.currentDissLikeCount)
            } catch (error) {  
              console.error('Error fetching post data:', error);  
            }  
          };  
      
          fetchPostData();  
    }, []);  
  

    const handleLike = () => {  
   
      http.post("/News/NewsLike/329ae713-52bd-ef11-b6f0-8a9b429a6ab6" )  
        .then(response => {  
          console.log('Like response:', response);  
          setDislikesCount(prevCount => prevCount - 1);
          setLikesCount(prevCount => prevCount + 1); 
        })  
        .catch(error => {  
          console.error('Error liking post:', error);  
        });     
    };  
  
    const handleDislike = () => {  
  
      http.post("/News/NewsDissLike/329ae713-52bd-ef11-b6f0-8a9b429a6ab6" )  
        .then(response => {  
          console.log(response);  
          setDislikesCount(prevCount => prevCount + 1);
          setLikesCount(prevCount => prevCount - 1); 
        })  
        .catch(error => {  
          console.error('Error disliking post:', error);  
        });  
    };  
  return (
    <div>
           <button  onClick={handleLike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px]  px-5 h-12'>
              <NewsLike />
              <p className='text-xl font-medium'>{likesCount}</p>
            </button>
            <button  onClick={handleDislike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px] px-5 h-12'>
              <NewsDislike />
              <p className='text-xl font-medium'>{dislikesCount}</p>

            </button>
    </div>
  )
}

export {LikeDislike} 
