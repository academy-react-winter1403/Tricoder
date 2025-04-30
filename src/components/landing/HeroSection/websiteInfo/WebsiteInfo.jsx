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
    <div className='mx-auto '>
          <div className='w-full  flex justify-between gap-8 items-center mx-auto
   max-lg:gap-2  max-lg:w-full max-lg:-mr-2 '>

        {WebInfo.map((data,ind)=>(
                 <div key={ind} className='w-55 h-53  mx-auto flex-col justify-center items-center rounded-2xl bg-[#FFFFFF99] border-[4px] border-white whitespace-nowrap landingInfo
              max-md:h-22 max-lg:' >
                <div className=' flex flex-col justify-center items-center mx-auto '>
                <img className='  mt-6
                 max-md:w-9 max-md:mx-7 max-md:mt-2 max-xl:' src={data.img} alt=''/>
        
                <p className='text-4xl font-black pt-4 
                max-md:text-[15px] max-md:pt-2 max-md:px-8'>{data.num}</p>
                <p className='text-xl font-medium -mr-
                max-md:text-[11px] max-md:px-4.5'> {data.info}</p>
               
                </div>
             </div>
        ))}
        
       
      
    </div>
    </div>
  
  )
}

export {WebsiteInfo} 
