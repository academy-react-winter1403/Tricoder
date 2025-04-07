import React, { useEffect, useState } from 'react'
import { NewsView } from './viewNewsDetail/NewsView'
import { NewsContent } from './NewsContent'
import http from '../../core/services/interceptor'

const NewsDetail = () => {
  const [data, setData ] = useState()

  useEffect(() => {  
    const fetchPostData = async () => {  
      try {  
        const response = await http.get("/News/b22e43af-ddf0-ef11-b6fc-d9f4b5c3592e");  
        console.log(response);
        setData(response.detailsNewsDto.addUserFullName)
      } catch (error) {  
        console.error('Error fetching post data:', error);  
      }  
    };  

    fetchPostData();  
  }, []);  

  return (
    <div>
      <NewsView userFullName={data}/>
      <NewsContent/>
      
    </div>
  )
}

export {NewsDetail} 
