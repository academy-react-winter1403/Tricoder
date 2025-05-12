import React, { useEffect, useState } from 'react'
import http from '../../../../core/services/interceptor'


const CourseTypeList =({typeName,id})=>{
    return(
        <div className=' flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]'>
            <input id={"id" +id} type="checkbox" className='hidden peer'/>
            <label htmlFor={"id"+id} className='font-yekan-500 text-[#455A64] text-[14px] block '>
                {typeName}
            </label>
            <label
            htmlFor={"id"+id} 
            className={`border-1 w-[20px] h-[20px] block rounded-[8px]  peer-checked:bg-[#2196F3] border-[#CFD8DC] bg-[#ECEFF1]`}></label>
        </div>
    )
}


const CourseType = () => {

    const [type,setType] = useState([])

    const getCourseType = async()=>{
        try {
            const result =await http.get("/CourseType/GetCourseTypes")
            // console.log(result);
            setType(result)
            
            
        } catch (error) {
            console.log(error);
            setType([])
            
        }

    }
    useEffect(() => {
        console.log("Calling API..."); 
        getCourseType()
    }, []);

  return (
    <div >
        {type?.map((item, index) => (
            <CourseTypeList key={index}  typeName={item.typeName} id={item.id} />
        ))}
    </div>
  )
}

export  {CourseType}