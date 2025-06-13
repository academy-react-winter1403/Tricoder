import React from "react";
import { DeleteCourse } from "../../../assets/icons/studentPanel/DeleteCourse";
import { LikeIcon } from "../../../assets/fonts/icons/landing/courseIcon/LikeIcon";
import { FullHeart } from "../../../assets/fonts/icons/newsDetail/FullHeart";

import { useGetPostsQuery } from "../../../core/services/interceptor/reduxIndex";
import { getFavoriteCourseData } from "../../../core/services/api/getFavoriteCourseData";

const MyFavoriteCourse = () => {
  //   const favoriteCourse=[
  //     {
  //       courseType:"ری اکت",
  //       courseTeacher:" نام مدرس دوره",
  //       startDate:"1402/7/19",
  //       coursePrice:"35000 تومان",
  //       delete:<FullHeart/>
  //   },
  //   {
  //       courseType:"نکست ",
  //       courseTeacher:" نام مدرس دوره",
  //       startDate:"1402/7/18",
  //       coursePrice:"95000 تومان",
  //       delete:<FullHeart/>
  //   },

  // ]

  // /SharePanel/GetMyFavoriteCourses
  const { data: favoriteCourse, isLoading: getFavoriteCourseLoading } =
    getFavoriteCourseData(
      "getFavoriteCourseData",
      "/SharePanel/GetMyFavoriteCourses"
    );
  if (!getFavoriteCourseLoading) {
    console.log("favoriteCourse ==>", favoriteCourse);
  }
  const { data, error, isLoading } = useGetPostsQuery(
    "/SharePanel/GetMyFavoriteCourses"
  );
  // console.log(object)

  if (data != undefined) {
    console.log(data);
  } else if (data === undefined) {
    console.error(error);
  }
  return (
    <div
      className=" flex flex-col px-11 pt-15 rtl gap-6 w-full 
    "
    >
      <div
        className="flex gap-30 bg-[#6033FE] text-white  text-center py-4 w-full  whitespace-nowrap rounded-[10px]  justify-center
        max-lg:gap-5 max-md:text-xs"
      >
        <p> مدیریت</p>
        {/* <p>قیمت</p> */}
        <p>تاریخ شروع</p>
        <p>مدرس</p>
        <p> نام دوره</p>
        <p>تصویر</p>
      </div>
      {favoriteCourse?.favoriteCourseDto?.map((data, ind) => (
        <div
          key={ind}
          className="flex gap-25 text-center py-3.5 w-full  whitespace-nowrap rounded-[10px] bg-gray-200 justify-center leading-8
                  max-lg:gap-5 max-md:text-xs max-md:gap-4"
        >
          <FullHeart />
          {/* <p>{data.coursePrice}</p> */}
          <p>{data.lastUpdate}</p>
          <p>{data.teacheName}</p>
          <p> {data.courseTitle}</p>
          <div className="border-2 border-black w-6 h-6 rounded-[4px]"> <img src={data.tumbImageAddress}/> </div>
        </div>
      ))}
    </div>
  );
};

export { MyFavoriteCourse };
