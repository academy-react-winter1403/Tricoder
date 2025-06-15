import React from "react";
import userIcon from "../../../assets/icons/profile-2user.svg";
import monitor from "../../../assets/icons/monitor-recorder.svg";
import calandar from "../../../assets/icons/calendar-2.svg";
import calandarTick from "../../../assets/icons/calendar-tick.svg";
import UseCourseDate from '../Hooks/useCourseData';
import { useParams } from "react-router-dom";
import http from "../../../core/services/interceptor";

const CourseInfo = () => {

  const { courseId } = useParams()

  const { course, loading, error } = UseCourseDate(courseId);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  const handleReserve = async () => {
    try {
      await http.post("/CourseReserve/ReserveAdd", {
        courseId: courseId,
      });
      alert("reserved")
    } catch (error) {
      console.log(error)  
    }
  };
  const infoArray = [
    { icon: userIcon, title: "تعداد دانشجو", about: course?.capacity },
    { icon: monitor, title: "وضعیت دوره", about: course?.courseStatusName },
    { icon: calandar, title: "تاریخ شروع", about: course?.startTime },
    { icon: calandarTick, title: "تاریخ پایان", about: course?.endTime },
  ];




  console.log(course?.teacherId);



  return (
    <div className="   md:w-[80%]    h-[501px]  w-[100%] rounded-2xl  shadow-xl  mt-3 flex  items-center m-auto  flex-col    ">
      <h1 className=" text-[22px]  font-bold  mt-5  text-[#263238]">
        مشخصات دوره
      </h1>

      <div className="w-[80%]   h-[12rem]    mt-10  ">
        <hr className="border-slate-300" />

        {infoArray.map((item, index) => (
          <>
            <div className="w-[100%]   h-[72px]   flex justify-between     items-center   p-2   " key={index}>
              <div className="flex    items-center gap-3 ">
                <div className="rounded-full   w-[40px]   h-[40px]  bg-[#2196F3] flex items-center justify-center   ">
                  <img src={item.icon} alt="" />
                </div>
                <h4 className="text-[#455A64]   text-[18px]">{item.title}</h4>
              </div>
              <span>{item.about}</span>
            </div>
            <hr className="border-slate-300" />
          </>
        ))}

      </div>

      <div
        className="w-[80%]   h-[4rem]  mt-[8rem]  flex   justify-between  items-center"
        onClick={handleReserve}
      >
        <button className="bg-[#2196F3] w-[8rem]   h-[3.5rem]    rounded-[80px]  font-semibold  text-center text-white">
          شرکت در دوره
        </button>
        <div className="flex  gap-3">
          <span className="text-xl  font-semibold  text-[#2196F3]">{course?.cost}</span>
          <span>تومان</span>
        </div>
      </div>

    </div>
  );
};

export default CourseInfo;
