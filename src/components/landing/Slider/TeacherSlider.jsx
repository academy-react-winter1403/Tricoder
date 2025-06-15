import React, { useState } from "react";
import { SliderIcon } from "../../../assets/fonts/icons/landing/slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { useGetPostsQuery } from "../../../core/services/interceptor/reduxIndex";
import { useTranslation } from "react-i18next"


const TeacherSlider = () => {
  const [Slider, setSlider] = useState(0);
               const {t} =useTranslation()
  


  // const SlideItem = [
  //   {
  //     img: "./public/landing/slider/teacher1.png",
  //     title: "سالار حیدری",
  //     desc: "بکند, node js, .netcore, database",
  //   },
  //   {
  //     img: "./public/landing/slider/teacher2.png",
  //     title: " بهاره یزدانی",
  //     desc: "طراحی محصول و رابط کاربری",
  //   },
  //   {
  //     img: "./public/landing/slider/teacher3.png",
  //     title: " مسعود هشمتی",
  //     desc: "ریکت و انگلار",
  //   },
  //   {
  //     img: "./public/landing/slider/teacher4.png",
  //     title: "  دکتر بحرالعلوم",
  //     desc: "برنامه نویسی تحت فرانت و بکند",
  //   },
  // ];


       const {data,error, isLoading } = useGetPostsQuery("/Home/GetTeachers")
            console.log(data)
        
        
          if (data != undefined){
            console.log(data)
          }
          else if(data === undefined){
            console.error(error)
          }
          const slideValue = (data?.length)/2
    // try{
    //   const result = await postsQuesry({url: "", data:{}})
    // }
  

  return (
    <div
      className="my-90 bg-[#E3F2FD] h-187 pt-15 w-full flex justify-center items-center 
    max-md:h-150 max-xl:my-30 LandingTeacher"
    >
      <div className="    flex-col justify-center items-center  mx-auto ">
        <div
          className="w-70 h-18 border-b-4 b border-[#2196F3] mx-auto
        max-md:h-9 max-md:w-30 max-md:  max-xl:"
        >
          <p
            className="text-[40px] text-center whitespace-nowrap
         max-md:text-xl "
          >
           {t("TopProfessors")}{" "}
          </p>
        </div>

        <div
          className="h-fit   mt-14 flex  items-center  justify-center
        max-md:w-115 max-md:  max-md:mt-6"
        >
          {console.log(slideValue)}
          <Swiper
            slidesPerView={8}
            initialSlide={650}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation,Pagination]}
            navigation={true}
            className="mySwiper"
          >
            {data?.map((data, ind) => (
              <SwiperSlide>
                <div
                  className="w-fit relative rounded-3xl  justify-items-center"
                  style={{ marginTop: ind % 2 === 0 ? "60px" : "0px" }}
                >
                  <div
                    className="bg-white  w-12 h-7 rounded-3xl flex items-center gap-0.5 absolute top-2 right-3
                  max-md:hidden max-xl:hidden"
                  >
                    <div className="mr-1">
                      {" "}
                      <SliderIcon />
                    </div>
                    <p className="text-xs text-[#2196F3] mt-0.5 "> {data.courseCounts}</p>
                  </div>

                  <img
                    className="w-full h-full
                  max-md:"
                    // src={data.pictureAddress}
                    src={(data.pictureAddress) ? data.pictureAddress : "/newsDetail/notfound.jpg"}
                    alt=""
                  />

                  <div
                    className="
                  max-md:mt-3"
                  >
                    <p
                      className="text-2xl font-bold text-center leading-10
                  max-md:text-sm"
                    >
                      {data.fullName}
                    </p>
                    <p
                      className="text-[#455A64] text-center
                  max-md:text-[13px]"
                    >
                      {data.desc}{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className='w-24 h-4 flex mx-138 gap-6 mt-9
             max-md:-mt-20 max-md:mx-17 max-xl:mx-96'>
              <div className='w-4 h-4 bg-[#2196F3] rounded-3xl
              max-md:w-3 max-md:h-3'></div>
              <div className='w-4 h-4 bg-[#2196F3] rounded-3xl
               max-md:w-3 max-md:h-3'></div>
              <div className='w-4 h-4 bg-[#ffff] rounded-3xl border-2 border-[#2196F3]
               max-md:w-3 max-md:h-3'></div>

             </div> */}
      </div>
    </div>
  );
};

export { TeacherSlider };
