import React, { useEffect, useState } from "react";
import { Grid2 } from "../../../../public/icons/Grid2";
import { Grid1 } from "../../../../public/icons/Grid1";
import SearchIcons from "../../../../public/icons/SearchIcons";
import { Sort } from "../../../../public/icons/Sort";
import Arrow from "../../../../public/icons/arrow";
import { View1 } from "../view1/View1";
import { View2 } from "../view2/View2";
import { ChangePage } from "./../searchHeader/changePage/changePage";
import http from "../../../core/services/interceptor";
import { useDebounce } from "../../../core/hooks/useDebounce";
import { useSelector } from 'react-redux';


const SearchHeader = () => {
  const [View, setView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesItems, setCoursesItems] = useState([]);
  const [totalCount, setTotalCount] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchQuery, 700);
  const selectedTypes = useSelector((state) => state.filters?.selectedTypes || []);

  const sortOptions = [
    { value: "InsertDate", label: "جدیدترین ها", sortType: "DESC" },
    { value: "InsertDate", label: "قدیمی ترین ها",sortType: "ASC"  },
    { value: "Cost", label: "گران ترین", sortType: "DESC" },
    { value: "Cost", label: "ارزان ترین", sortType: "ASC" },
  ];

  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const getCourseData = async (
    page = currentPage,
    Query,
    SortingCol = selectedSort.value,
    SortType = selectedSort.sortType
  ) => {
    try {
      const result = await http.get(`/Home/GetCoursesWithPagination`, {
        params: {
          PageNumber: page,
          RowsOfPage:9,
          Query: Query,
          SortingCol: SortingCol,
          SortType: SortType,
          CourseTypeIds: selectedTypes.join(',')
        },
      });

      setCoursesItems(result.courseFilterDtos);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.log(error);
      setCoursesItems([]);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm === undefined) {
      return;
    }
    if (debouncedSearchTerm) {
      getCourseData(currentPage, searchQuery);
    }
  }, [debouncedSearchTerm, searchQuery]);

  useEffect(() => {
    getCourseData(currentPage, searchQuery);
  }, [currentPage, selectedSort]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);
    setIsSortOpen(false);
    setCurrentPage(1);
  };

 
    return (
      <div>
        <div className="max-w-[952px] mx-auto w-full h-[56px] flex justify-between flex-row-reverse gap-[16px] ">
          {/* Sort Dropdown */}
          <div className="relative h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
            <div
              className="h-full rounded-[16px] flex items-center justify-center gap-[26px] cursor-pointer"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <div className="h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[12px] justify-center">
                <div className="h-[16px] mr-[16px]">
                  <Sort />
                </div>
                <div className="h-[25px]">{selectedSort.label}</div>
                <div
                  className={`ml-[20px] h-[24px] bg-center flex justify-center items-center mr-[5px] transition-transform ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                >
                  <Arrow />
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            {isSortOpen && (
              <div className="absolute top-full right-0 mt-1 w-full min-w-[200px] bg-white rounded-[16px] shadow-lg z-50 overflow-hidden landingInput">
                {sortOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`px-4 py-3 hover:bg-gray-100 cursor-pointer text-right ${
                      selectedSort.value === option.value
                        ? "bg-gray-100 font-bold"
                        : ""
                    }`}
                    onClick={() => handleSortChange(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-[20px_16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] relative">
            <input
              type="text"
              className="w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]"
              placeholder="چی میخوای یاد بگیری؟"
              value={searchQuery || ""}
              onChange={(e) =>
                setSearchQuery(e.target.value ? e.target.value : undefined)
              }
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-200">
              <SearchIcons />
            </div>
          </div>

          {/* View Toggle */}
          <div className="w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex flex-row-reverse justify-center items-center bg-[#ECEFF1]">
            <span
              onClick={() => setView(false)}
              className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
                !View ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <Grid2 />
            </span>
            <span
              onClick={() => setView(true)}
              className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
                View ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <Grid1 />
            </span>
          </div>
        </div>

        <div className="mt-[32px] flex flex-wrap justify-center gap-[32px] w-[952px] h-[1231px]">
          {View
            ? coursesItems.map((items, index) => (
                <View1 key={index} data={items}  />
              ))
            : coursesItems.map((items, index) => (
                <View2 key={index} data={items} />
              ))}
        </div>

        <div className="m-auto mt-[37px]">
          <ChangePage
            currentPage={currentPage}
            totalPages={Math.floor(+totalCount / 9)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
  );
};



export { SearchHeader };







//     <div>
//         <div className="max-w-[952px] mx-auto w-full h-[56px] flex justify-between flex-row-reverse gap-[16px] 
//           max-md:max-w-[720px] max-md:h-[48px] max-md:gap-[12px]
//           max-sm:max-w-full max-sm:h-[44px] max-sm:gap-[8px] max-sm:flex-col max-sm:items-stretch
//         ">
      
//           <div className="relative h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]
//             max-md:h-[48px] max-sm:h-[44px] max-sm:mb-2
//             ">

//             <div className="h-full rounded-[16px] flex items-center justify-center gap-[26px] cursor-pointer
//               max-md:gap-[16px] max-sm:gap-[12px]
//             " onClick={() => setIsSortOpen(!isSortOpen)}>

//               <div className="h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[12px] justify-center
//                 max-md:text-[14px] max-md:h-[22px]
//                 max-sm:text-[14px] max-sm:h-[20px]
//               ">
//                 <div className="h-[16px] mr-[16px] max-md:mr-4 max-sm:mr-3">
//                   <Sort />
//                 </div>
//                 <div className="h-[25px] max-md:h-[22px] max-sm:h-[20px]">{selectedSort.label}</div>
//                 <div className={`ml-[20px] h-[24px] bg-center flex justify-center items-center mr-[5px] transition-transform ${
//                   isSortOpen ? "rotate-180" : ""
//                 } max-md:ml-4 max-sm:ml-3 max-md:h-[20px] max-sm:h-[18px]`}>
//                   <Arrow />
//                 </div>
//               </div>
//             </div>

          
//             {isSortOpen && (
//               <div className="absolute top-full right-0 mt-1 w-full min-w-[200px] bg-white rounded-[16px] shadow-lg z-50 overflow-hidden
//                 max-sm:min-w-full
//               ">
//                 {sortOptions.map((option) => (
//                   <div
//                     key={option.value}
//                     className={`px-4 py-3 hover:bg-gray-100 cursor-pointer text-right ${
//                       selectedSort.value === option.value ? "bg-gray-100 font-bold" : ""
//                     } max-sm:px-3 max-sm:py-2 max-sm:text-sm`}
//                     onClick={() => handleSortChange(option)}
//                   >
//                     {option.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>

        
//           <div className="w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-[20px_16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] relative
//             max-md:w-[400px] max-md:h-[48px]
//           max-sm:w-full max-sm:h-[44px]
//           ">
//             <input
//               type="text"
//               className="w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]
//                 max-md:text-[14px]
//                 max-sm:text-[14px]
//               "
//               placeholder="چی میخوای یاد بگیری؟"
//               value={searchQuery || ""}
//               onChange={(e) => setSearchQuery(e.target.value ? e.target.value : undefined)}
//             />
//             <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-200">
//               <SearchIcons />
//             </div>
//           </div>

        
//           <div className="w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex flex-row-reverse justify-center items-center bg-[#ECEFF1]
//           max-md:w-[90px] max-md:h-[48px]
//           max-sm:w-full max-sm:h-[44px] max-sm:justify-between max-sm:px-4
//           ">
//               <span
//                 onClick={() => setView(false)}
//                 className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
//                   !View ? "bg-white shadow-md" : "bg-transparent"
//                 } max-md:w-[36px] max-md:h-[36px] max-sm:w-[36px] max-sm:h-[36px]`}
//               >
//                 <Grid2 />
//               </span>
//               <span
//                 onClick={() => setView(true)}
//                 className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
//                   View ? "bg-white shadow-md" : "bg-transparent"
//                 } max-md:w-[36px] max-md:h-[36px] max-sm:w-[36px] max-sm:h-[36px]`}
//               >
//                 <Grid1 />
//               </span>
//           </div>

//         </div>

    
//         <div className="mt-[32px] flex flex-wrap justify-center gap-[32px] w-[952px] h-[1231px]
//         max-md:w-[720px] max-md:gap-[24px] max-md:h-auto
//         max-sm:w-full max-sm:gap-[16px] max-sm:h-auto border-1
//         ">
//           {View
//           ? coursesItems.map((items, index) => <View1 key={index} data={items} />)
//           : coursesItems.map((items, index) => <View2 key={index} data={items} />)}
//         </div>

    
//         <div className="m-auto mt-[37px]">
//           <ChangePage
//           currentPage={currentPage}
//           totalPages={Math.floor(+totalCount / 9)}
//           onPageChange={handlePageChange}
//           />
//         </div>

//     </div>
//   );












//  return (
//     <div>
//       <div className="max-w-[952px] mx-auto w-full h-[56px] flex justify-between flex-row-reverse gap-[16px] ">
//         {/* Sort Dropdown */}
//         <div className="relative h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
//           <div
//             className="h-full rounded-[16px] flex items-center justify-center gap-[26px] cursor-pointer"
//             onClick={() => setIsSortOpen(!isSortOpen)}
//           >
//             <div className="h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[12px] justify-center">
//               <div className="h-[16px] mr-[16px]">
//                 <Sort />
//               </div>
//               <div className="h-[25px]">{selectedSort.label}</div>
//               <div
//                 className={`ml-[20px] h-[24px] bg-center flex justify-center items-center mr-[5px] transition-transform ${
//                   isSortOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 <Arrow />
//               </div>
//             </div>
//           </div>

//           {/* Dropdown Menu */}
//           {isSortOpen && (
//             <div className="absolute top-full right-0 mt-1 w-full min-w-[200px] bg-white rounded-[16px] shadow-lg z-50 overflow-hidden">
//               {sortOptions.map((option) => (
//                 <div
//                   key={option.value}
//                   className={`px-4 py-3 hover:bg-gray-100 cursor-pointer text-right ${
//                     selectedSort.value === option.value
//                       ? "bg-gray-100 font-bold"
//                       : ""
//                   }`}
//                   onClick={() => handleSortChange(option)}
//                 >
//                   {option.label}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Search Input */}
//         <div className="w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-[20px_16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] relative">
//           <input
//             type="text"
//             className="w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]"
//             placeholder="چی میخوای یاد بگیری؟"
//             value={searchQuery || ""}
//             onChange={(e) =>
//               setSearchQuery(e.target.value ? e.target.value : undefined)
//             }
//           />
//           <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-200">
//             <SearchIcons />
//           </div>
//         </div>

//         {/* View Toggle */}
//         <div className="w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex flex-row-reverse justify-center items-center bg-[#ECEFF1]">
//           <span
//             onClick={() => setView(false)}
//             className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
//               !View ? "bg-white shadow-md" : "bg-transparent"
//             }`}
//           >
//             <Grid2 />
//           </span>
//           <span
//             onClick={() => setView(true)}
//             className={`block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
//               View ? "bg-white shadow-md" : "bg-transparent"
//             }`}
//           >
//             <Grid1 />
//           </span>
//         </div>
//       </div>

//       <div className="mt-[32px] flex flex-wrap justify-center gap-[32px] w-[952px] h-[1231px]">
//         {View
//           ? coursesItems.map((items, index) => (
//               <View1 key={index} data={items} />
//             ))
//           : coursesItems.map((items, index) => (
//               <View2 key={index} data={items} />
//             ))}
//       </div>

//       <div className="m-auto mt-[37px]">
//         <ChangePage
//           currentPage={currentPage}
//           totalPages={Math.floor(+totalCount / 9)}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
// );