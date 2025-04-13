import React from 'react'

const Duration = ({timing,check,id}) => {

  return (
    <div className=' flex flex-row-reverse justify-end gap-[8px] mb-[8px]'>
        <input id={id} type="checkBox" className='hidden peer'/>
        <label htmlFor={id} className='font-yekan-500 text-[#455A64] text-[14px] block '>
            {timing}
        </label>
        <label
        htmlFor={id}
        className={`border-1 w-[20px] h-[20px] block rounded-[8px] ${check} border-[#CFD8DC] bg-[#ECEFF1]`}></label>
    </div>
  )
}

const DurationList =()=>{
    
        const items = [
          { timing: " 15 روزه ", check:"peer-checked:bg-[#2196F3]",id:"fifteen" },
          { timing: " 30 روزه", check:"peer-checked:bg-[#2196F3]",id:"thirty" },
          { timing: " 45 روزه", check:"peer-checked:bg-[#2196F3]",id:"fourFive" },
          { timing: " 60 روزه", check:"peer-checked:bg-[#2196F3]",id:"sixty" },
          { timing: " 90 روزه", check:"peer-checked:bg-[#2196F3]",id:"ninty" },
        ];
      
        return (
          <div className="max-w-lg mx-auto space-y-4">
            {items.map((item, index) => (
              <Duration key={index} timing={item.timing} check={item.check} id={item.id} />
            ))}
          </div>
        );
     
}

export  {DurationList}


