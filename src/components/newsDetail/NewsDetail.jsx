
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


  

  

  return (
    <div>
      <NewsView detailsNewsDto={detailsNewsDto}  />
      <NewsContent  detailsNewsDto={detailsNewsDto}  />

      
    </div>
  )
}

export {NewsDetail} 
