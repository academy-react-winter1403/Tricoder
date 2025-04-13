import { useState } from "react";
import Arrow from "../../../../../public/icons/arrow";
import ArrowDown from "../../../../../public/icons/ArrowDown";
import {  DurationList } from "../duration/Duration";
import {  Teachers} from "../teachers/Teachers";
import { PriceFilter } from "../PriceRange/PriceFilter";


const AccordionInfo = ({title,content,gap}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  mb-[12px]  border-b-1 border-b-[#ECEFF1]">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className= {`flex flex-row-reverse justify-center ${gap}  items-end p-4 w-[248px] h-[37px] m-auto   transition-all `}
      >
        <span
          
          className={` transition-all  `}
        >
         {isOpen ? <ArrowDown/> : <Arrow />}
        </span>
        <span className="text-gray-800 font-yekan-500 text-[16px] mb-[-4px] whitespace-nowrap">{title}</span>
        
      </button>

      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100 px-4 " : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div > 
            {content}
        </div>
      </div>
    </div>
  );
};

const AccordionList =()=>{
    
        const items = [
          { title: " دسته بندی ها ", content:"" , gap:"gap-[149px]" },
          { title: " قیمت ", content: <PriceFilter/>, gap:"gap-[197px]" },
          { title: " موضوعات ", content: " k kj kj", gap:"gap-[172px]" },
          { title: " مدت زمان ", content: <DurationList/>, gap:"gap-[175px]" },
          { title: " اساتید دوره ", content: <Teachers/>, gap:"gap-[165px]" },
        ];
      
        return (
          <div className="max-w-lg mx-auto space-y-4">
            {items.map((item, index) => (
              <AccordionInfo key={index} title={item.title} content={item.content} gap={item.gap} />
            ))}
          </div>
        );
     
}


export  {AccordionList};
