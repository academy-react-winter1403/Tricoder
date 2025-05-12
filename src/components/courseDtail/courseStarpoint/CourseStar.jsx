import { Star } from "lucide-react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import http from "../../../core/services/interceptor";
import UseCourseDate from '../Hooks/useCourseData';
import { useParams } from "react-router-dom";

const CourseStare = () => {

  const {courseId} = useParams()

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [loadinge, setLoading] = useState(true);
  const [errore, setError] = useState(null);
  const [liked, setLiked] = useState(0);
  const {course , loading , error} = UseCourseDate(courseId);
  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;




  


  const handleLike = async () => {
    if (!courseId) {
      console.error("❌ CourseId is missing");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await http.post(`/Course/AddCourseLike?CourseId=${courseId}`);
      console.log("✅ Like response:", response);
      setLiked(response.data.likes);
    } catch (err) {
      console.error("❌ Error in liking course:", err);
      setError('خطا در لایک کردن!');
    } finally {
      setLoading(false);
    }
  };





  // console.log("📌 courseId prop:", courseid);




  return (
    <div className="md:w-[100%] md:h-[50px] mt-4 md:flex justify-between block">
      <div
        className="flex items-center flex-row-reverse gap-4 md:w-[45%] h-[50px]"
        style={{ direction: "ltr" }}
      >
        <div className="flex space-x-1" style={{ direction: "ltr" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className={`w-6 h-6 cursor-pointer ${(hoverRating || rating) >= star
                ? "transition-colors duration-200 fill-yellow-400 text-yellow-400"
                : "text-yellow-400"
                }`}
            />
          ))}
        </div>
        <span>امتیاز 20 نفر</span>
        <button className="bg-[#2196F3] text-white p-[6px] rounded-full">
          ثبت دیدگاه
        </button>
      </div>
      <div className="md:w-[45%] h-[50px] flex items-center gap-3">
        <span className="text-slate-500">آیا از این دوره راضی بودید؟</span>
        <div
          className="flex  items-center  justify-around bg-slate-200 w-[70px] h-[40px] rounded-full p-3 cursor-pointer"
          onClick={handleLike}
        >
     
          <ThumbsUp />
          <span>{course?.likeCount}</span>
        </div>
        <div className="flex  items-center  justify-around   bg-slate-200 w-[70px] h-[40px] rounded-full p-3 cursor-pointer">
      
          <ThumbsDown />
          <span>{course?.dissLikeCount}</span>
        
        </div>
        <span className="text-green-600 font-bold">{liked}</span>
      </div>
    </div>
  );
};

export default CourseStare;