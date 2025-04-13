import React from 'react'

const Teachers = () => {
    const items = [
        { name: " دکتر بحرالعلوم", check:"peer-checked:bg-[#2196F3]" ,id:"one" },
        { name: " مسعود هشمتی", check:"peer-checked:bg-[#2196F3]",id:"two" },
        { name: " بهاره یزدانی", check:"peer-checked:bg-[#2196F3]",id:"three" },
        { name: " حیدری", check:"peer-checked:bg-[#2196F3]",id:"four" },
        
    ];

  return (
    <div >
        <div className='w-full '>
            <input type="text"
            className='border-1 w-full h-[46px] rounded-[12px] border-[#ECEFF1] pr-[16px] text-[14px] font-yekan-500' 
            placeholder='جستجوی استاد' />
        </div>
        <div className="max-w-lg mx-auto space-y-4">
            {items.map((item, index) => (
              <NameList key={index} name={item.name} id={item.id} check={item.check} />
            ))}
        </div>
        <button className='font-yekan-500 text-[14px] text-[#2196F3] underline mb-[24px]'> مشاهده بیشتر</button>
       
    </div>
  )
}

const NameList =({name,id,check})=>{
    return(
        <div className=' flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]'>
            <input id={id} type="checkBox" className='hidden peer'/>
            <label htmlFor={id} className='font-yekan-500 text-[#455A64] text-[14px] block '>
                {name}
            </label>
            <label
            htmlFor={id} 
            className={`border-1 w-[20px] h-[20px] block rounded-[8px] ${check}  border-[#CFD8DC] bg-[#ECEFF1]`}></label>
        </div>
    )
}




export  {Teachers}