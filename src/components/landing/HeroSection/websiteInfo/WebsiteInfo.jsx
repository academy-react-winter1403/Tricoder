import React from 'react'

const WebsiteInfo = () => {
      
    const WebInfo=[
        {
            img:"./public/landing/heroSection/icon (5).png",
            num:167,
            info:"مدرس مجرب"
        },
        {
            img:"./public/landing/heroSection/icon (6).png",
            num:408,
            info:"دقیقه اموزش"
        },
        {
            img:"./public/landing/heroSection/icon (7).png",
            num:225,
            info:"نفر دانشجو"

        }
    ]

  return (
    <div className='w-[80%] h-53 flex justify-between gap-8
     max-md:mx-9 max-md:gap-3  max-xl:bg-red max-xl:gap-3 max-lg:gap-2'>

        {WebInfo.map((data,ind)=>(
                 <div className='w-55 h-53 rounded-2xl bg-[#FFFFFF99] border-[4px] border-white whitespace-nowrap
                 max-md:w-25 max-md:h-24 max-xl:' >
                 <img className='mx-18  mt-6
                 max-md:w-9 max-md:mx-7 max-md:mt-2 max-xl:' src={data.img} alt=''/>
        
                <p className='text-4xl font-black pt-4 px-20
                max-md:text-[18px] max-md:pt-2 max-md:px-8'>{data.num}</p>
                <p className='text-xl font-medium px-14
                max-md:text-[13px] max-md:px-4.5'> {data.info}</p>
               
             </div>
        ))}
        
       
      
    </div>
  )
}

export {WebsiteInfo} 
