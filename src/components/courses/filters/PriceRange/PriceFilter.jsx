import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setPriceRange } from "./";

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState([150000, 1450000]);
  const [filterType, setFilterType] = useState("all");

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className=" w-full ">
      <div className=" flex justify-between">
        <span className=" block text-[13px] font-yekan-500 text-[#607D8B] tracking-wider">
          {" "}
          از {priceRange[0]} تومان
        </span>
        <span className=" block text-[13px] font-yekan-500 text-[#607D8B] tracking-wider">
          {" "}
          تا {priceRange[1]} تومان{" "}
        </span>
      </div>
      <div className=" mt-[9px] flex flex-row ">
        <Slider
          range
          reverse
          min={0}
          max={2000000}
          step={50000}
          value={priceRange}
          onChange={handleSliderChange}
          trackStyle={[{ backgroundColor: "#60B764", height: 5 }]}
          handleStyle={[
            {
              borderColor: "#fff",
              backgroundColor: "#60B664",
              width: 20,
              height: 20,
            },
            {
              borderColor: "#fff",
              backgroundColor: "#60B764",
              width: 20,
              height: 20,
            },
          ]}
          railStyle={{ backgroundColor: "##C8E6C9", height: 5 }}
        />
      </div>
      <div className=" mt-[17px] flex justify-between">
        <div
          onClick={() => setFilterType("free")}
          className=" flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]"
        >
          <input id="free" type="checkBox" className="hidden peer" />
          <label
            htmlFor="free"
            className="font-yekan-500 text-[#455A64] text-[14px] block "
          >
            فقط رایگان
          </label>
          <label
            htmlFor="free"
            className={`border-1 w-[20px] h-[20px] block rounded-[8px]  border-[#CFD8DC] bg-[#ECEFF1]
            ${
              filterType === "free" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          ></label>
        </div>

        <div
          onClick={() => setFilterType("paid")}
          className=" flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]"
        >
          <input id="paid" type="checkBox" className="hidden peer" />
          <label
            htmlFor="paid"
            className="font-yekan-500 text-[#455A64] text-[14px] block "
          >
            فقط پولی
          </label>
          <label
            htmlFor="paid"
            className={`border-1 w-[20px] h-[20px] block rounded-[8px]  border-[#CFD8DC] bg-[#ECEFF1]
            ${
              filterType === "paid" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          ></label>
        </div>

        <div
          onClick={() => setFilterType("all")}
          className=" flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]"
        >
          <input id="all" type="checkBox" className="hidden peer" />
          <label
            htmlFor="all"
            className="font-yekan-500 text-[#455A64] text-[14px] block "
          >
            همه
          </label>
          <label
            htmlFor="all"
            className={`border-1 w-[20px] h-[20px] block rounded-[8px]  border-[#CFD8DC] bg-[#ECEFF1]
              ${
                filterType === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
          ></label>
        </div>
      </div>
    </div>
  );
};

export { PriceFilter };
