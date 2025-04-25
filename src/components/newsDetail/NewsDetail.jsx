
import React, { useEffect, useState } from 'react'
import { NewsView } from './viewNewsDetail/NewsView'
import { NewsContent } from './NewsContent'
import http from '../../core/services/interceptor'
import { useParams } from 'react-router-dom'

const NewsDetail = () => {
  const { NewsId } = useParams();
 

  // const [data, setData ] = useState()
  const [detailsNewsDto, setDetailsNewsDto] = useState(true); 

  useEffect(() => {  
    const fetchPostData = async () => {  
      try {  
        const response = await http.get("/News/" + NewsId);  
        console.log(response);
        setDetailsNewsDto(response.detailsNewsDto); 
        
     
      } catch (error) {  
        console.error('Error fetching post data:', error);  
      }  
    };  

    fetchPostData();  
  }, [NewsId]);  


  // const [comments, setComments] = useState([]);
  // const [error, setError] = useState([]);
 

 
  // useEffect(() => {  
  //   const fetchComments = async () => {  
  //     try {  
  //       const response = await axios.get(`/News/GetNewsComments${NewsId}=<uuid>`); 
  //       setComments(response.commentDtos);  
  //       localStorage.setItem('comments', JSON.stringify(response.commentDtos));  
  //       console.log(response)
  //     } catch (error) {  
  //       setError('Error fetching comments');  
  //       console.error('Error fetching comments', error);  
  //     }  
  //   };  

  //   fetchComments();  
    
  // }, []);  

  

  return (
    <div>
      <NewsView detailsNewsDto={detailsNewsDto}  />
      <NewsContent  detailsNewsDto={detailsNewsDto}  />

      
    </div>
  )
}

export {NewsDetail} 
