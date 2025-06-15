import React from 'react'
import { EyeIcon } from '../../../assets/fonts/icons/landing/NewsIcon/EyeIcon'
import { NewsDate } from '../../../assets/fonts/icons/landing/NewsIcon/NewsDate'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"




const LandingNews = () => {
       const {t} =useTranslation()

  const SmallBlog = [
    {
      img: "./public/landing/news/smallBlog/NewsBg1.png",
      title:t("NewsPost"),
      desc: t("NewsDesc"),
      icon: <EyeIcon />,
      eyeCount: "22بازدید",
      DateIcon: <NewsDate />,
      date: "1402/7/2"
    },

    {
      img: "./public/landing/news/smallBlog/NewsBg2.png",
      title: t("NewsPost"),
      desc: t("NewsDesc"),
      icon: <EyeIcon />,
      eyeCount: "24بازدید",
      DateIcon: <NewsDate />,
      date: "1403/10/5"
    },
    {
      img: "./public/landing/news/smallBlog/NewsBg3.png",
      title:t("NewsPost"),
      desc:t("NewsDesc"),
      icon: <EyeIcon />,
      eyeCount: "22بازدید",
      DateIcon: <NewsDate />,
      date: "1404/3/2"
    },
  ]


  return (
    <div className='mx-20 flex-col
    max-lg:mx-2 '>

      <div className='w-70 h-18 border-b-4 b border-[#2196F3] mx-125
        max-md:h-9 max-md:w-30 max-md:mx-145'>
        <p className='text-[40px] text-center whitespace-nowrap
        max-md:text-xl '>{t("NewsTitle")}</p>
      </div>

      <div className='  my-10 flex gap-10 justify-center items-center
        max-lg:flex-col max-md:gap-4 max-md:'>

        <div className='w-154 
          max-md:w-90 '>
          <img className='
          max-md:w-100'   src='./public/landing/news/BigBlogBg.png ' alt='' />

          <div className='flex gap-4 mt-8 mb-5
        max-md:mt-5 max-md:mb-2.5'>
            <div className='h-10 w-26 bg-[#DAEEFF] rounded-3xl flex gap-1 items-center 
          max-md:w-20 max-md:h-9 max-md:gap-0.5'>
              <div className='mr-3'> <EyeIcon /></div>
              <p className='text-[#2196F3]
            max-md:text-sm'>{t("NewsView")}</p>
            </div>

            <div className='h-10 w-28 bg-[#DAEEFF] rounded-3xl flex items-center gap-1 
          max-md:w-22'>
              <div className='mr-3
          max-md:mr-2'><NewsDate /></div>
              <p className='text-[#2196F3]
          max-md:text-sm max-md:pt-1'> 1402/7/2</p>
            </div>

          </div>
          <p className='text-[32px] font-bold leading-20
        max-md:text-xl max-md:leading-11'> {t("NewsPost")}</p>
          <p className='text-[#455A64]
        max-md:text-sm'>{t("NewsDesc")}</p>
        </div>

        <div className='w-  mt-4
       max-md:-mr-3'>

          {SmallBlog.map((data, ind) => (

            <div className='w-154 h-40.5  flex gap-6 mb-10
     max-md:mb-3 max-md:gap-3 max-md:w-100'>
              <img className='
          max-md:w-32 max-md:h-30 max-md:mt-2' src={data.img} />
              <div className='mt-3'>
                <p className='text-xl font-bold mb-2
            max-md:text-sm'>{data.title}</p>
                <p className='text-sm text-[#455A64]
            max-md:text-xs'> {data.desc}</p>
                <div className='w-42.5 h-5.5  flex justify-between items-center mt-4'>

                  <div className='w-15.5 h-5.5 flex '>
                    <div className='mr-3 ml-0.5 mt-0.5'> <EyeIcon /></div>
                    <p className='text-[#2196F3] leading-5 text-sm
              max-md:text-xs'>{data.eyeCount}</p>
                  </div>

                  <div className='w-1.5 h-1.5 rounded-[80px] bg-[#2196F3] mr-3.5'></div>

                  <div className='w-17.5 h-5.5 flex '>
                    <div className='mr-3 ml-0.5 mt-0.5'><NewsDate /></div>
                    <p className='text-[#2196F3] leading-5.5 text-sm 
              max-md:text-xs'> {data.date}</p>
                  </div>

                </div>
              </div>
            </div>
          ))}


        </div>


      </div>

      <Link to={"/news"}>
          <div className='w-33 h-12 bg-[#2196F3] rounded-[80px] mx-144 '>
        <p className='font-bold text-center text-white leading-13 '> {t("ViewAll")}</p>

      </div>
      </Link>
      


    </div>
  )
}

export { LandingNews }
