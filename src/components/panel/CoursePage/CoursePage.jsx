import { useEffect } from "react";
import { DeleteCourse } from "../../../assets/icons/studentPanel/DeleteCourse";
import http from "../../../core/services/interceptor"
import { Trash2 } from "lucide-react";
import { useAccent } from '../../../app/layouts/StudentPanelLayout/StudentPanel'


const CoursePage = () => {
  const { accentColor } = useAccent();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=");
        console.log(response);
      } catch (error) {
        console.log('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, []);

  const myCourse = [
    {
      courseType: "ری اکت",
      courseTeacher: " نام مدرس دوره",
      startDate: "1402/7/19",
      coursePrice: "35000 تومان",
      delete: <DeleteCourse />
    },
    {
      courseType: "نکست ",
      courseTeacher: " نام مدرس دوره",
      startDate: "1402/7/18",
      coursePrice: "95000 تومان",
      delete: <DeleteCourse />
    },
    {
      courseType: "پایتون ",
      courseTeacher: " نام مدرس دوره",
      startDate: "1402/7/15",
      coursePrice: "25000 تومان",
      delete: <DeleteCourse />
    },
    {
      courseType: "ری اکت",
      courseTeacher: " نام مدرس دوره",
      startDate: "1402/8/10",
      coursePrice: "48000 تومان",
      delete: <DeleteCourse />
    },

  ]
  return (

    <div className="flex flex-col gap-6 w-full px-4 pt-10">
      {/* menu */}
      <div
        style={{ backgroundColor: accentColor }}
        className="hidden md:flex text-white text-center py-4 gap-[5rem]  px- w-full  rounded-[10px] whitespace-nowrap">
        <p className="flex-1">مدیریت</p>
        <p className="flex-1">قیمت</p>
        <p className="flex-1">تاریخ شروع</p>
        <p className="flex-1">مدرس</p>
        <p className="flex-1">نام دوره</p>
        <p className="flex-1">تصویر</p>
      </div>

      {myCourse.map((data, ind) => (
        <div
          key={ind}
          className="flex flex-col md:flex-row gap-4 text-right text-sm md:text-center bg-gray-200 md:py-3.5 md:px-13 rounded-[10px] leading-8">
          {/* mobile */}
          <div className="md:hidden flex flex-col gap-1  p-4">
            <p><span className="font-bold">نام دوره:</span> {data.courseType}</p>
            <p><span className="font-bold">مدرس:</span> {data.courseTeacher}</p>
            <p><span className="font-bold">تاریخ شروع:</span> {data.startDate}</p>
            <p><span className="font-bold">قیمت:</span> {data.coursePrice}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="border-2 border-black w-6 h-6 rounded-[4px]"></div>
              <button className="text-red-500 font-bold"> <Trash2 /></button>
            </div>
          </div>

          {/*Desktop*/}
          <div className="hidden md:flex justify-between w-full items-center gap-4">
            <DeleteCourse />
            <p className="flex-1">{data.coursePrice}</p>
            <p className="flex-1">{data.startDate}</p>
            <p className="flex-1">{data.courseTeacher}</p>
            <p className="flex-1">{data.courseType}</p>
            <div className="border-2 border-black w-6 h-6 rounded-[4px]"></div>
          </div>
        </div>
      ))}
    </div>

  )
}


export default CoursePage;
