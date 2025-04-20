import { DeleteCourse } from "../../../assets/icons/studentPanel/DeleteCourse";


 const CoursePage = () => {
    const myCourse =[
        {
            courseType:"ری اکت",
            courseTeacher:" نام مدرس دوره",
            startDate:"1402/7/19",
            coursePrice:"35000 تومان",
            delete:<DeleteCourse/>
        },
        {
            courseType:"نکست ",
            courseTeacher:" نام مدرس دوره",
            startDate:"1402/7/18",
            coursePrice:"95000 تومان",
            delete:<DeleteCourse/>
        },
        {
            courseType:"پایتون ",
            courseTeacher:" نام مدرس دوره",
            startDate:"1402/7/15",
            coursePrice:"25000 تومان",
            delete:<DeleteCourse/>
        },
        {
            courseType:"ری اکت",
            courseTeacher:" نام مدرس دوره",
            startDate:"1402/8/10",
            coursePrice:"48000 تومان",
            delete:<DeleteCourse/>
        },
      
    ]
    return (
        <div className=" flex flex-col px-11 pt-15 rtl gap-6 w-full 
        ">

            <div className="flex gap-36 bg-[#6033FE] text-white  text-center py-4 w-full px-9  whitespace-nowrap rounded-[10px]
            max-lg:gap-5 max-md:text-xs">
                <p>تصویر</p>
                <p> نام دوره</p>
                <p>مدرس</p>
                <p>تاریخ شروع</p>
                <p>قیمت</p>
                <p> مدیریت</p>

            </div>
            {myCourse.map((data,ind) =>(
                      <div key={ind} className="flex gap-32.5 text-center py-3.5 w-full px-10 whitespace-nowrap rounded-[10px] bg-gray-200 justify-center leading-8
                      max-lg:gap-5 max-md:text-xs max-md:gap-4">
                         <div className="border-2 border-black w-6 h-6 rounded-[4px]"></div>
                         <p> {data.courseType}</p>
                         <p>{data.courseTeacher}</p>
                         <p>{data.startDate}</p>
                         <p>{data.coursePrice}</p>
                         <DeleteCourse/>
         
                     </div>
            ))}

      

        </div>
    )
}


export default CoursePage;
