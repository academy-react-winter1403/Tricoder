import { Star } from "lucide-react";
import { ThumbsDown } from "lucide-react";
import { ThumbsUp } from "lucide-react"
import { useState } from "react";

const CourseStare = () => {

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);






  return (
    <div className=" md:w-[100%]  md:h-[50px]   mt-4  md:flex  justify-between block    " >
      <div className="flex  items-center  flex-row-reverse  gap-4 md:w-[45%]  h-[50px]" style={{ direction: "ltr" }} >
        <div className="flex space-x-1" style={{ direction: "ltr" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}

              className={`w-6 h-6 cursor-pointer
             ${(hoverRating || rating) >= star
                  ? " transition-colors duration-200 fill-yellow-400 text-yellow-400"
                  : "text-yellow-400"
                }`}
            />
          ))}
        </div>
        <span>امتیاز  20 نفر</span>
        <button className="bg-[#2196F3] text-white p-[6px]  rounded-full">ثبت دیدگاه</button>
      </div>
      <div className=" md:w-[45%]  h-[50px]  flex   items-center  gap-3" >
        <span className="text-slate-500">آیا از این دوره راضی بودید؟</span>
        <div className="bg-slate-200   w-[70px]  h-[40px]  rounded-full  p-3">
          <ThumbsUp />
        </div>
        <div className="bg-slate-200   w-[70px]  h-[40px]  rounded-full  p-3">
          <ThumbsDown />
        </div>
      </div>
    </div>
  )
}
 

export default CourseStare;