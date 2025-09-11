import React, { useState } from "react";
import minusIcon from "../../../assets/icons/minus.svg";
import addIcon from "../../../assets/icons/add.svg";
import blackClock from "../../../assets/icons/blackClock.svg";
import whiteClock from "../../../assets/icons/whiteClock.svg";
import DownLooad from "../../../assets/icons/download.svg";

const CourseLesson = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "فصل اول: HTML چیست؟",
      lessons: [
        { id: 1, title: "تگ HTML", duration: "7 mins" },
        { id: 2, title: "تگ head و body", duration: "14 mins" },
        { id: 3, title: "تگ‌های Meta", duration: "20 mins" },
        { id: 4, title: "تگ‌های Script و Style", duration: "16 mins" },
      ],
    },
    {
      id: 2,
      title: "فصل دوم: آموزش Tag های HTML",
      lessons: [
        { id: 5, title: "Properties در HTML", duration: "2 hrs 40 mins" },
        { id: 6, title: "نگاهی عمیق‌تر به CSS", duration: "3 hrs 52 mins" },
      ],
    },
    {
      id: 3,
      title: "فصل سوم: آموزش property در html",
      lessons: [
        { id: 5, title: "Properties در HTML", duration: "1 hrs 30 mins" },
        { id: 6, title: "نگاهی عمیق‌تر به CSS", duration: "0 hrs 32 mins" },
      ],
    },
    {
      id: 3,
      title: "فصل چهارم: نگاهی عمیق تر به css",
      lessons: [
        { id: 5, title: "Properties در HTML", duration: "1 hrs 30 mins" },
        { id: 6, title: "نگاهی عمیق‌تر به CSS", duration: "0 hrs 32 mins" },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const getTotalDuration = (lessons) => {
    let totalMinutes = lessons.reduce((sum, { duration }) => {
      let [num, unit] = duration.split(" ");
      return sum + (unit === "hrs" ? +num * 60 : +num);
    }, 0);
    return `hrs ${Math.floor(totalMinutes / 60)}  mins ${totalMinutes % 60}`;
  };

  return (
    <div className=" mx-auto   w-[100%] p-4">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="  mb-2  rounded-lg  transition-all duration-1000 "
        >
          <div
            onClick={() => toggleSection(index)}
            className="w-full text-left p-3 bg-[#2196F3] text-white text-sm   md:text-lg rounded-lg text-right  flex  justify-between"
          >
            <div className="flex ">
              <img src={openSection === index ? minusIcon : addIcon} alt="" />
              <h3> {section.title}</h3>
            </div>
            <div className="flex  items-center justify-between  gap-3 ">
              <h6> ({getTotalDuration(section.lessons)})</h6>
              <img src={whiteClock} className="w-[16px]" alt="" />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === index
                ? "max-h-96 opacity-100  rounded-b-lg"
                : "max-h-0 opacity-0"
              }`}
          >
            {openSection === index && (
              <div className=" rounded-lg      transition-all duration-1000 ">
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-4  mt-2  w-[100%]    text-sm   md:text-lg flex justify-between    rounded-lg   bg-gray-100"
                  >
                    <div  className="flex  gap-3">
                      <div  className="text-center  w-[30px] h-[30px]  pt-[3px]  rounded-full   bg-[#2196F3] text-white ">{lesson.id}</div>
                      <span>{lesson.title}</span>
                    </div>
                    <div className="flex  items-center   gap-2">
                      <span className="text-sm text-gray-600">
                        {lesson.duration}
                      </span>
                      <img src={blackClock}  className="w-[16px]" alt="" />
                      <img  className="text-center  w-[32px] h-[32px]  p-[5px]  rounded-xl   bg-[#2196F3] " src={DownLooad} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLesson;
