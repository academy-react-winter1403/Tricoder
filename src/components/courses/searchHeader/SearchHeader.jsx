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
import { useParams } from "react-router-dom";
import { useDebounce } from "../../../core/hooks/useDebounce";

const SearchHeader = () => {
  const [View, setView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesItems, setCoursesItems] = useState([]);
  const [totalCount, setTotalCount] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState(undefined);
  const debouncedSearchTerm = useDebounce(searchQuery, 700);
  console.log(debouncedSearchTerm);

  const getCourseData = async (page = currentPage, Query) => {
    try {
      const result = await http.get(`/Home/GetCoursesWithPagination`, {
        params: { PageNumber: page, Query: Query },
      });
      console.log(result);

      setCoursesItems(result.courseFilterDtos);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.log(error);
      setCoursesItems([]);
    }
  };
  useEffect(() => {
    if (debouncedSearchTerm === undefined) {
    //   setSearchQuery(undefined);
    //   getCourseData(currentPage, searchQuery);

      return;
    }
    if (debouncedSearchTerm) {
      getCourseData(currentPage, searchQuery);
    }
  }, [debouncedSearchTerm, searchQuery]);

  useEffect(() => {
    console.log("Calling API...");

    getCourseData(currentPage, searchQuery);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getCourseData(newPage);
  };

  const filteredItems = coursesItems.filter((item) =>
    item.title?.includes(searchQuery)
  );

  return (
    <div>
      <div className="w-[952px] h-[56px] flex justify-between flex-row-reverse gap-[16px] lg:">
        <div
          className="  h-[56px] rounded-[16px] flex  items-center justify-center gap-[26px] 
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]"
        >
          <div className="  h-[25px] font-yekan-500 text-[16px] whitespace-nowrap flex gap-[12px] justify-center">
            <div className="  h-[16px] mr-[16px] ">
              <Sort />
            </div>
            <div className="  h-[25px] "> محبوب ترین ها </div>
            <div className=" ml-[20px] h-[24px] bg-center flex justify-center items-center mr-[5px]">
              <Arrow />
            </div>
          </div>
        </div>

        <div
          className=" w-[620px] h-[56px] rounded-[16px] overflow-hidden bg-[20px_16px]
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]"
        >
          <input
            type="text"
            className="w-full h-full outline-none border-none text-right text-[16px] font-yekan-500 color-fontColor-3 pr-[20px]"
            placeholder="چی میخوای یاد بگیری؟"
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value ? e.target.value : undefined)
            }
          />
          <div className="relative z-200">
            <SearchIcons />
          </div>
        </div>

        <div
          className="w-[100px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex flex-row-reverse justify-center 
            items-center bg-[#ECEFF1]"
        >
          <span
            onClick={() => setView(false)}
            className={` block w-[40px] h-[40px] rounded-[16px] flex justify-center items-center cursor-pointer transition-all duration-200 
                ${!View ? "bg-white shadow-md" : "bg-transparent"}`}
          >
            <Grid2 />
          </span>
          <span
            onClick={() => setView(true)}
            className={`block w-[40px] h-[40px]  rounded-[16px]  flex justify-center items-center cursor-pointer transition-all duration-200 
                ${View ? "bg-white shadow-md" : "bg-transparent"}`}
          >
            <Grid1 />
          </span>
        </div>
      </div>

      <div className="mt-[32px] flex flex-wrap justify-center gap-[32px] w-[952px] h-[1231px] overflow-hidden">
        {/*  */}
        {/* { } */}

        {View
          ? coursesItems.map((items, index) => (
              <View1 key={index} data={items} />
            ))
          : coursesItems.map((items, index) => (
              <View2 key={index} data={items} />
            ))}
      </div>
      <div className=" m-auto mt-[37px]">
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
