import { useState } from "react";
import Arrow from "../../../../../public/icons/arrow";
import ArrowDown from "../../../../../public/icons/ArrowDown";
import { DurationList } from "../duration/Duration";
import { Teachers } from "../teachers/Teachers";
import { PriceFilter } from "../PriceRange/PriceFilter";
import { Technologis } from "../technologis/Technologis";
import { CourseType } from "../courseType/CourseType";


const AccordionList = () => {
  const items = [
    { title: " تکنولوژی ها", content: <Technologis />, gap: "gap-[158px]" },
    { title: " قیمت ", content: <PriceFilter />, gap: "gap-[197px]" },
    { title: " نوع دوره ", content: <CourseType />, gap: "gap-[182px]" },
    { title: " مدت زمان ", content: <DurationList />, gap: "gap-[175px]" },
    { title: " اساتید دوره ", content: <Teachers />, gap: "gap-[165px]" },
  ];

  const [isOpen, setIsOpen] = useState(Number);

  const toggleFilter = (index) => {
    setIsOpen(isOpen === index ? null : index);
    console.log(isOpen, index);
  };

  return (
    <div className="max-w-lg mx-auto space-y-4">
      {items.map((item, index) => (
        <div className="  mb-[12px]  border-b-1 border-b-[#ECEFF1]">
          <button
            onClick={() => toggleFilter(index)}
            className={`flex flex-row-reverse justify-center ${item.gap}  items-end p-4 w-[248px] h-[37px] m-auto   transition-all `}
          >
            <span className={` transition-all  `}>
              {isOpen === index ? <ArrowDown /> : <Arrow />}
            </span>
            <span className="text-gray-800 font-yekan-500 text-[16px] mb-[-4px] whitespace-nowrap">
              {item.title}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[300px] opacity-100 px-4 "
                : "max-h-0 opacity-0 p-0"
            }`}
          >
            {isOpen === index && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
);

};

export { AccordionList };




// return (
//   <div className="max-w-lg mx-auto space-y-4 px-4 max-sm:max-w-full">
//     {items.map((item, index) => (
//       <div
//         key={index}
//         className="mb-[12px] border-b border-b-[#ECEFF1]"
//       >
//         <button
//           onClick={() => toggleFilter(index)}
//           className={`
//             flex flex-row-reverse justify-center items-end
//             p-4
//             w-[248px] h-[37px] m-auto
//             transition-all
//             max-sm:w-full max-sm:h-auto max-sm:justify-between max-sm:px-3
//             ${item.gap}
//           `}
//         >
//           <span className="transition-all">
//             {isOpen === index ? <ArrowDown /> : <Arrow />}
//           </span>
//           <span className="text-gray-800 font-yekan-500 text-[16px] mb-[-4px] whitespace-nowrap
//             max-sm:text-[14px] max-sm:mb-0 max-sm:whitespace-normal
//           ">
//             {item.title}
//           </span>
//         </button>

//         <div
//           className={`
//             overflow-hidden transition-all duration-300 ease-in-out
//             ${isOpen === index ? "max-h-[300px] opacity-100 px-4" : "max-h-0 opacity-0 p-0"}
//             max-sm:px-2
//           `}
//         >
//           {isOpen === index && <div>{item.content}</div>}
//         </div>
//       </div>
//     ))}
//   </div>
// );



