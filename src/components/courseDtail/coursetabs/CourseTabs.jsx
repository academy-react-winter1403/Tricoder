import React from 'react'
 import  {setActiveTab}  from '../../../redux/Store/courseDetailTabs';
 import { useSelector,useDispatch } from 'react-redux';
import CourseDes from '../courseDescription/CourseDes';
import CourseLesson from '../courselessons/CourseLessons';
import CourseCommentList from '../courseCommentList/CourseCommentList';


const CourseTabs = () => {

  const activeTab = useSelector((state)=>state.coursetab.ActiveTab);
  const dispatch = useDispatch();

  const changeTab = (index) =>{
    dispatch(setActiveTab(index))
   }

  const alltabs =[
    {title:"توضیحات"  ,  content : <CourseDes/>},
    {title:"پیش نمایش",content:<CourseLesson/>},
    {title:"نظرات کاربران",content:<CourseCommentList/>},
  ];  
  return (

    <div   className='w-[100%]   h-auto   p-2  rounded-2xl  shadow-xl border-t border-gray-100 mt-10'>
           <div   className=' flex  h-[3rem]  gap-3  border-b  text-sm border-blue-100 '>
                       {console.log(alltabs)}
                     {alltabs.map((tab,index)=>{
                         return(
                          <button  
                          key={index}
                          onClick={() =>{changeTab(index)}}
                            className={`h-[3rem] text-lg border-b-2 border-blue-50  text-sm ${
                              activeTab == index
                                ? 'border-b-2 border-blue-400 text-blue-500'   
                                : 'text-black'
                            }`}
                          >
                            {tab.title}
                          </button>
                         )
                     })}
           </div>
           <div className="mt-4">
           {alltabs[activeTab].content}
           </div>
    </div>
  )
}

export default CourseTabs;
