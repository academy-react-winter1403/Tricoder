import { useState } from "react"


const NewsComment =()=>{
    return(
        <div className="border-1 border-[#ddd] rounded-[16px] p-[2px] mx-[10px] mt-[15px] ">

            <div className="h-[32px]  flex justify-between items-center"> 
                <div className=" text-[12px] font-yekan-400 h-[19px] "> 2روز پیش </div>
                 <div className=" flex flex-row-reverse gap-[2px] items-center">
                    <div className="border-1 rounded-[20px] h-[32px] w-[32px]"></div>
                    <div className=" text-[16px] font-yekan-500">مجمئ زمانی </div>
                </div>
            </div>
            <div className=" text-right text-[15px] font-yekan-400 mt-[8px]"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده 
                        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
            </div>
            <div className="1 mt-[8px] h-[22px] flex justify-end ">
                <span className="block">پاسخ</span>
                <span className="block"> 7</span>
            </div>
        </div>
    )
}

const CoursesComment =()=>{
    return(
        <div className="border-1 border-[#ddd] rounded-[16px] p-[2px] mx-[10px] mt-[15px] ">

            <div className="h-[32px]  flex justify-between items-center"> 
                <div className=" text-[12px] font-yekan-400 h-[19px]  "> 2روز پیش </div>
                 <div className=" flex flex-row-reverse gap-[2px] items-center">
                    <div className="border-1 rounded-[20px] h-[32px] w-[32px]"></div>
                    <div className=" text-[16px] font-yekan-500"> محمد محمدی  </div>
                </div>
            </div>
            <div className=" text-right text-[15px] font-yekan-400 mt-[8px]"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده 
                از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
            </div>
            <div className="1 mt-[8px] h-[22px] flex justify-end ">
                <span className="block">پاسخ</span>
                <span className="block"> 7</span>
            </div>
        </div>
    )
}

const CommentPage = () => {

    const [commentView, setCommentView] = useState(true)

    return (
        <div> 
            <div className=" h-[50px] mt-[20px] flex items-center justify-end pr-[10px]">
                <div className="  w-[150px] h-full flex justify-center rounded-[14px] bg-[#b796fd] items-center gap-[10px]">
                   <div 
                   onClick={()=>setCommentView(true)}
                   className={`text-[18px] font-yekan-500 p-[5px] rounded-[16px] 
                   ${commentView ? "bg-[#f6f5f5] text-[#414141] rounded-[16px] shadow-[0px_0px_7px_0px_#ddd]":"bg-transparent"}`}>  مقالات</div>

                    <div 
                    onClick={()=>setCommentView(false)}
                    className={`text-[18px] font-yekan-500 p-[5px] 
                    ${!commentView ? "bg-[#f6f5f5] text-[#414141] rounded-[16px] shadow-[0px_0px_7px_0px_#ddd]":"bg-transparent"}`}> دوره ها </div> 
                </div>
            </div>
            <div className=" mt-[20px] h-[400px]"> 

                {commentView ? <NewsComment/>:<CoursesComment/>}

            </div>
        </div>
    )
}




export default CommentPage;


