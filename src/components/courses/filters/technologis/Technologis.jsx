import React, { useEffect, useState } from 'react'
import http from '../../../../core/services/interceptor'

const TechnologisList =({techName,id})=>{
    return(
        <div className=' flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]'>
            <input id={"id" +id} type="checkbox" className='hidden peer'/>
            <label htmlFor={"id"+id} className='font-yekan-500 text-[#455A64] text-[14px] block '>
                {techName}
            </label>
            <label
            htmlFor={"id"+id} 
            className={`border-1 w-[20px] h-[20px] block rounded-[8px]  peer-checked:bg-[#2196F3] border-[#CFD8DC] bg-[#ECEFF1]`}></label>
        </div>
    )
}

const Technologis = () => {

    const [techs,setTechs] = useState([])
    
        const getTechnologisData = async()=>{
            try {
                const result =await http.get("/Home/GetTechnologies")
                
                setTechs(result)
                
                
            } catch (error) {
                console.log(error);
                setTechs([])
                
            }
    
        }
        useEffect(() => {
            console.log("Calling API..."); 
            getTechnologisData()
        }, []);

  return (
    <div className=' h-[200px] overflow-auto'> 
        
        {techs?.map((item, index) => (
           <TechnologisList key={index} techName={item.techName} id={item.id} />
        ))}
        
    </div>
  )
}

export  {Technologis}