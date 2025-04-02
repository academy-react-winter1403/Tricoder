import React, { useState, useEffect } from 'react'
import { Share } from '../../assets/fonts/icons/newsDetail/Share'
import { NewsMedia } from '../../assets/fonts/icons/newsDetail/NewsMedia'
import { NewsTwitter } from '../../assets/fonts/icons/newsDetail/NewsTwitter'
import { NewsInsta } from '../../assets/fonts/icons/newsDetail/NewsInsta'
import { FullStar } from '../../assets/fonts/icons/newsDetail/FullStar'
import { EmptyStar } from '../../assets/fonts/icons/newsDetail/EmptyStar'
import { NewsLike } from '../../assets/fonts/icons/newsDetail/NewsLike'
import { NewsDislike } from '../../assets/fonts/icons/newsDetail/NewsDislike'
import http from '../../core/services/interceptor'
import axios from 'axios'

const NewsContent = () => {
  const star = [
    { icon: <EmptyStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },
    { icon: <FullStar /> },

  ]
  const LikeDislike = () => {  
    const [likes, setLikes] = useState();  
    const [dislikes, setDislikes] = useState(0);  
  
    const handleLike = () => {  
      setLikes(likes + 1);  
    };  
  
    const handleDislike = () => {  
      setDislikes(dislikes + 1);  
    };  

  }
  
  

  return (
    <div className='pt-12 mx-auto w-[54%]  flex flex-col gap-16 text-justify '>
      <div>
        <p className='text-2xl font-bold leading-19'>چگونه اموزش ببینیم ؟</p>
        <p className='leading-6 text-[#455A64] '>قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک عمیقی از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن به درک عمیق مطلب، مناسب برای تمامی افراد صحبت خواهیم کرد</p>
        <p className='text-[#455A64] leading-6'>مثال:</p>
        <p className='text-[#455A64] leading-6'>  فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره خواندن را شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق میافتد و به یک صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و تا رسیدن به آخرین صفحه این کتاب این چرخه بارها و بارها اتفاق میافتد. نکته و البته جواب ما اینجاست که شما اگر در صفحه 30 نکته را متوجه نشدین، برای رسیدن به درک عمیق باید به جای صفحه قبلی، به صفحه 1 کتاب برگردین و کتاب را از اول دوباره بخوانید، دوباره اگر در صفحه 50 نکته ای را متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما تا پایان این کتاب به درک عمیق اون مطلبی که قرار بود آموزش ببینید میرسید.</p>
        <div className='flex gap-4 pt-3 '>
          <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div>
          <p className='font-medium leading-6'>افزایش انرژی:
            <span className='text-[#455A64] font-normal'> کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون، کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به ارمغان بیاورد.</span>
          </p>

        </div>
        <div className='flex gap-4 pt-3'>
          <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div>
          <p className='font-medium leading-6'>افزایش هوشیاری:
            <span className='text-[#455A64]'>مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین می‌تواند عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های مختلف ازجمله مطالعه، کار، و مذاکره بهتر عمل کنید.</span>
          </p>

        </div>
        <div className='flex gap-4 pt-3'>
          <div className='w-2 h-1.5 bg-[#2196F3] rounded-[10px] mt-2 '></div>
          <p className='font-medium leading-6'>افزایش سطح انرژی بدن
            <span className='text-[#455A64]'>کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین (آدرنالین) کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و افزایش فعالیت قلب و عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و تحرک در بدن است.</span>
          </p>

        </div>
      </div>


      <img className='' src='./public/newsDetail/VideoPlayer.png' />

      <div className='flex flex-col gap-4'>
        <p className='text-[#455A64] leading-7'>این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل قضیه است.</p>
        <p className='text-[#455A64]'>امیدوارم مقاله مفیدی برای شما واقع بوده باشه.</p>
      </div>


      <div className='flex flex-col gap-8'>
        <div className='bg-[#ECEFF1] flex justify-between items-center py-4 px-6 rounded-2xl'>
          <div className='flex gap-2'>
            <Share />
            <span className='font-bold text-base '>اشتراک گزاری</span>
          </div>

          <div className='flex gap-4'>
            <NewsMedia />
            <NewsTwitter />
            <NewsInsta />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-4 items-center'>
            {star.map((data, ind) => (
              <div className='flex gap-2'>{data.icon}</div>
            ))}
            <p className='font-medium  '>امتیاز 20 نفر</p>
            <div className='bg-[#2196F3] text-white font-bold text-xs w-20 h-8 rounded-[80px] text-center leading-8'>ثبت دیدگاه</div>
          </div>
          <div className='flex gap-5 items-center'>
            <div className='font-medium text-[#455A64] whitespace-nowrap '>آیا از این مقاله راضی بودید؟</div>
            <button  onClick={handleLike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px]  px-5 h-12'>
              <NewsLike />
              <p className='text-xl font-medium'>22{likes}</p>
            </button>
            <button  onClick={handleDisLike} className='flex items-center gap-1.5 bg-[#ECEFF1] rounded-[50px] px-5 h-12'>
              <NewsDislike />
              <p className='text-xl font-medium'>0 {dislikes}</p>

            </button>
          </div>
        </div>
      </div>

      <div className='rounded-3xl shadow-2xl flex flex-col gap-6 px-8 py-8'>
        <p className='font-bold text-2xl text-center'>نظر کاربران درباره این مقاله</p>
        <div className='flex flex-col gap-4 items-center'>
          <input className='h-25 w-full pr-4 border-2 border-[#CFD8DC]  rounded-2xl text-sm text-[#607D8B] leading-3' placeholder='نظر خودتو بنویس...' />
          <div className='h-12 w-fit rounded-4xl px-6 leading-12 bg-[#2196F3] text-base font-bold text-white '>ارسال</div>
        </div>

      </div>


    </div>
  )
}

export { NewsContent } 
