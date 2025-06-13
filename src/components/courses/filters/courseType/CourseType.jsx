import React, { useEffect, useState } from 'react'
import http from '../../../../core/services/interceptor'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleType } from '../../../../redux/Store/filterSlice';


const CourseTypeList =({typeName,id})=>{
    const dispatch = useDispatch();
    const selectedTypes = useSelector((state) => state.filters?.selectedTypes || []);

    const isChecked = selectedTypes.includes(id);
    const handleToggleType = () => {
        dispatch(toggleType(id)); // تغییر وضعیت انتخاب
    };

    return(
        <div className=' flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]'>
            <input 
            id={"id" +id} 
            type="checkbox" 
            className='hidden peer'
            onChange={() => dispatch(toggleType(id))}
            checked={isChecked}/>
            
            <label htmlFor={"id"+id} className='font-yekan-500 text-[#455A64] text-[14px] block '>
                {typeName}
            </label>

            <label
            htmlFor={"id"+id} 
            className={`border-1 w-[20px] h-[20px] block rounded-[8px] 
          ${isChecked ? "bg-[#2196F3]" : "bg-[#ECEFF1]"} border-[#CFD8DC]`}></label>
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