import React from 'react'
import { DeleteCourse } from '../../../assets/icons/studentPanel/DeleteCourse'
import { useGetPostsQuery } from "../../../core/services/interceptor/reduxIndex";


export const MyFavoriteNews = () => {

  // const favoriteBlog =[
  //   {
  //     img:"/landing/news/smallBlog/NewsBg1.png",
  //     title:"چگونه مطالعه موثر را برای شما آسانتر کنیم.",
  //     desc:"لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد.",
       
  //   },
    
  //     {
  //       img:"/landing/news/smallBlog/NewsBg2.png",
  //       title:"چگونه مطالعه موثر را برای شما آسانتر کنیم.",
  //       desc:"لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد.",
       
  //     },
  //   ]
    

     const {data,error, isLoading } = useGetPostsQuery("/SharePanel/GetMyFavoriteNews")
                console.log(data)
            
            
              if (data != undefined){
                console.log(data)
              }
              else if(data === undefined){
                console.error(error)
              }
  return (
    <div style={{direction:'rtl'}} className='pt-6'>
      
      {data?.map((data,ind)=>(

<div  className='w-154 h-40.5  flex gap-6 mb-10 
max-md:mb-3 max-md:gap-3 max-md:w-100'>
     <img className='
     max-md:w-32 max-md:h-30 max-md:mt-2' src={data.img}/>
     <div className='mt-3'>
       <p className='text-xl font-bold mb-2
       max-md:text-sm'>{data.title}</p>
       <p className='text-sm text-[#455A64]
       max-md:text-xs'> {data.desc}</p>

       <div className='mt-3'> <DeleteCourse/></div>
      
     </div>
   </div>
   ))}
      
      </div>
  )
}
