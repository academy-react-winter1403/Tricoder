import React, { useState } from 'react';
import { RightArrow } from '../../../../../public/icons/RightArrow';
import { LeftArroe } from '../../../../../public/icons/LeftArroe';

const ChangePage = ({ totalPages = 24, siblingCount = 1 }) => {
  const [currentPage, setCurrentPage] = useState(6);

  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 2);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

    const shouldShowLeftDots = leftSibling > 2;
    const shouldShowRightDots = rightSibling < totalPages - 1;

    const pages = [1];

    if (shouldShowLeftDots) pages.push('...');
    for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
    if (shouldShowRightDots) pages.push('...');
    
    pages.push(totalPages);

    return pages;
  };

  const changePage = (page) => {
    if (page === '...') return;
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 text-[16px] font-yekan-500 flex-row-reverse">
      {/* قبلی */}
      <button
        onClick={goToPrevious}
        className="w-[32px] h-[32px] flex justify-center items-center bg-[#ECEFF1] text-white  rounded-full"
      >
        <span className='' > <LeftArroe/> </span>
      </button>

      {/* شماره صفحات */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => changePage(page)}
          className={`w-[32px] h-[32px] flex justify-center items-center rounded-full ${
            page === currentPage
              ? 'bg-[#2196F3] text-white'
              : 'text-[#444]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* بعدی */}
      <button
        onClick={goToNext}
        className="w-[32px] h-[32px] flex justify-center items-center bg-[#ECEFF1] text-white rounded-full rotate-180"
      >
        <LeftArroe/>
      </button>
    </div>
  );
};

export {ChangePage};
