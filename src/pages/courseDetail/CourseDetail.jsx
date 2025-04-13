import CourseComment from "../../components/courseDtail/courselessons/CourseLessons";
import CourseCommentList from "../../components/courseDtail/courseCommentList/CourseCommentList";
import SourseDes from "../../components/courseDtail/courseDescription/CourseDes";
import CourseHeader from "../../components/courseDtail/courseHeader/CourseHeader";
import CourseInfo from "../../components/courseDtail/courseInfo/CourseInfo";
import CourseStare from "../../components/courseDtail/courseStarpoint/courseStar";
import CourseTabs from "../../components/courseDtail/coursetabs/CourseTabs";
import TeacherInfo from "../../components/courseDtail/teacherInfo/TeacherInfo";
import { useParams } from "react-router-dom";




const CourseDetailPage = () => {
    const {courseId} = useParams()
    return (
        <div className=" gap-[2rem]   w-[100%]   pt-4  "   style={{direction:"rtl"}}>
            <div   className="block md:flex  md:justify-center   md:gap-5  p-4">
                <div  className="md:w-[55%]   h-auto   w-[100%]">
                <CourseHeader coursedid={courseId} />
                <CourseStare  />
                <CourseTabs/>
                </div>
               
                <div  className=" md:w-[30%]  w-[100%]   ">
                    <CourseInfo  courseid={courseId} />
                    <TeacherInfo   courseid={courseId} />
                </div>
            </div>
        </div>

  
    )

}
export default CourseDetailPage;