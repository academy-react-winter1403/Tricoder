import React, { useEffect, useState } from 'react';
import { NewsList } from '../NewsList/NewsList';
import http from '../../../core/services/interceptor';
import { useDebounce } from '../../../core/hooks/useDebounce';

const SearchNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchTerm = useDebounce(searchQuery, 700);
    
    const [sortConfig, setSortConfig] = useState({
        pageNumber: 1,
        rowsOfPage: 10,
        sortingCol: '', // خالی برای حالت "همه"
        sortType: ''
    });

    const [activeSort, setActiveSort] = useState('all'); // 'all', 'newest', 'mostVisited', 'popular'

    const getNewsData = async (query = '') => {
        try {
            const params = {
                Query: query,
                PageNumber: sortConfig.pageNumber,
                RowsOfPage: sortConfig.rowsOfPage
            };

            // فقط اگر ستون مرتب‌سازی مشخص شده باشد، پارامترها را اضافه می‌کنیم
            if (sortConfig.sortingCol) {
                params.SortingCol = sortConfig.sortingCol;
                params.SortType = sortConfig.sortType;
            }

            const response = await http.get("/News", { params });
            setNewsData(response.news);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handleSort = (type) => {
        setActiveSort(type);
        
        switch(type) {
            case 'mostVisited':
                setSortConfig({
                    ...sortConfig,
                    sortingCol: 'VisitCount',
                    sortType: 'DESC'
                });
                break;
            case 'popular':
                setSortConfig({
                    ...sortConfig,
                    sortingCol: 'LikeCount',
                    sortType: 'DESC'
                });
                break;
            case 'newest':
                setSortConfig({
                    ...sortConfig,
                    sortingCol: 'InsertDate',
                    sortType: 'DESC'
                });
                break;
            case 'all':
            default:
                setSortConfig({
                    ...sortConfig,
                    sortingCol: '',
                    sortType: ''
                });
        }
    };

    useEffect(() => {
        if (debouncedSearchTerm === '') {
            getNewsData('');
            return;
        }
        if (debouncedSearchTerm) {
            getNewsData(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm, sortConfig]);

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <div className='w-full'>
            <div className='flex justify-center gap-[32px] max-sm:px-[15px] max-sm:flex-col max-sm:items-center max-sm:gap-[12px]'>
                {/* جستجو */}
                <div className='w-[722px] h-[56px] rounded-[16px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] max-sm:w-full'>
                    <input 
                        type="text"
                        placeholder='دنبال چی میگردی؟' 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='rounded-[16px] outline-[#2196F3] w-full h-full pr-[20px] text-right text-[16px]
                        font-yekan-500 text-[#607D8B] max-md:text-[13px] max-md:w-[200px]' 
                    />
                </div>

                {/* مرتب‌سازی */}
                <div className='w-[526px] h-[56px] justify-between text-[16px] font-yekan-500 text-[#607D8B] 
                    shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] pl-[40px] pr-[8px] rounded-[16px] flex items-center
                    max-xl:text-[14px] max-lg:text-[13px] max-lg:gap-[10px] max-md:w-[300px] max-md:gap-[7px]'>

                    <div 
                        onClick={() => handleSort('all')}
                        className={`px-[31px] h-[40px] rounded-[12px] 
                        shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex items-center max-md:px-[20px] 
                        ${activeSort === 'all' ? 'bg-[#2196F3] text-[#FFFF]' : 'bg-[#607D8B] text-[#FFFF]'}`}> 
                        همه 
                    </div>

                    <div 
                        onClick={() => handleSort('newest')}
                        className={activeSort === 'newest' ? 'text-[#2196F3]' : ''}> 
                        جدیدترین‌ها 
                    </div>

                    <div 
                        onClick={() => handleSort('mostVisited')}
                        className={activeSort === 'mostVisited' ? 'text-[#2196F3]' : ''}> 
                        پربازدیدترین‌ها 
                    </div>
                    
                    <div 
                        onClick={() => handleSort('popular')}
                        className={activeSort === 'popular' ? 'text-[#2196F3]' : ''}> 
                        محبوب‌ترین‌ها 
                    </div>
                </div>
            </div>

            {/* لیست اخبار */}
            <div className='mt-[38px] flex flex-wrap justify-center gap-[32px] max-2xl:gap-[26px]'>
                {newsData.map((item, index) => (
                    <NewsList key={index} data={item} /> 
                ))}
            </div>
        </div>
    );
};

export { SearchNews };