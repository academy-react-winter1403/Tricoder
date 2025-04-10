import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter as  useParams } from 'react-router-dom';  
import axios from 'axios';
import http from '../../../core/services/interceptor';
import { NewsLike } from '../../../assets/fonts/icons/newsDetail/NewsLike';
import { NewsDislike } from '../../../assets/fonts/icons/newsDetail/NewsDislike';

const LikeDislike = ({detailsNewsDto }) => {
    const { NewsId } = useParams();
      
    const [currentLikeCount, setLikesCount] = useState();  
    const [currentDissLikeCount, setDislikesCount] = useState();  
    const [action , setAction]=useState()
      
    useEffect(() => {  
        const fetchPostData = async () => {  
            try {  
              const response = await http.get("/News/" +NewsId);  
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
   
      http.post("/News/NewsLike/" + NewsId )  
        .then(response => {  
          console.log('Like response:', response);  
          setLikesCount(  detailsNewsDto.currentLikeCount =  currentLikeCount + 1)
          setDislikesCount(detailsNewsDto.currentDissLikeCount = currentDissLikeCount - 1);
      

        })  
        .catch(error => {  
          console.error('Error liking post:', error);  
        });     
    };  
  
    const handleDislike = () => {  
  
      http.post("/News/NewsDissLike/"+NewsId )  
        .then(response => {  
          console.log(response);  
          setDislikesCount(detailsNewsDto.currentDissLikeCount = currentDissLikeCount + 1);
          setLikesCount(detailsNewsDto.currentLikeCount = currentLikeCount - 1); 
        })  
        .catch(error => {  
          console.error('Error disliking post:', error);  
        });  
    }; 
    const DeleteCount = () => {  
  
      http.delete("/News/DeleteLikeNews" )  
        .then(response => {  
          console.log(response);  
          // setDislikesCount(detailsNewsDto.currentDissLikeCount = currentDissLikeCount - 1);
          // // setLikesCount(detailsNewsDto.currentLikeCount = currentLikeCount - 1); 
          if(detailsNewsDto.currentUserIsLike=true){
            setLikesCount(false)

          }
          else if( detailsNewsDto.currentUserIsDissLike = true){
            setDislikesCount(false)
          }

      
        })  
        .catch(error => {  
          console.error('Error disliking post:', error);  
        });  
    }; 

  return (
    <div className='flex gap-1'>
           <button  onClick={handleLike }   className={'flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px]  px-5 h-12'}>
              <NewsLike />
              <p className='text-xl font-medium'>{detailsNewsDto.currentLikeCount}</p>
            </button>
            <button  onClick={handleDislike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px] px-5 h-12'>
              <NewsDislike />
              <p className='text-xl font-medium'>{detailsNewsDto.currentDissLikeCount}</p>

            </button>
    </div>
  )
}

export {LikeDislike} 
