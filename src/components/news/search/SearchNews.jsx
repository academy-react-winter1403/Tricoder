import React, { useEffect, useState } from 'react';
import { NewsList } from '../NewsList/NewsList';
import http from '../../../core/services/interceptor';
import { useDebounce } from '../../../core/hooks/useDebounce';
import { ChangePage } from '../../courses/searchHeader/changePage/changePage';

const SearchNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchTerm = useDebounce(searchQuery, 700);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(undefined);
    
    const [sortConfig, setSortConfig] = useState({
        
        rowsOfPage: 9,
        sortingCol: '', 
        sortType: ''
    });

    const [activeSort, setActiveSort] = useState('all');

    const getNewsData = async (query = '',page = currentPage) => {
        try {
            const params = {
                Query: query,
                PageNumber: page,
                RowsOfPage: sortConfig.rowsOfPage
            };

           
            if (sortConfig.sortingCol) {
                params.SortingCol = sortConfig.sortingCol;
                params.SortType = sortConfig.sortType;
            }

            const response = await http.get("/News", { params });
            setNewsData(response.news);
            setTotalCount(response.totalCount);
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
            getNewsData(debouncedSearchTerm,currentPage);
        }
    }, [debouncedSearchTerm, sortConfig]);

    useEffect(() => {
        getNewsData();
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='w-full'>
            <div className='flex justify-center gap-[32px] max-sm:px-[15px] max-sm:flex-col max-sm:items-center max-sm:gap-[12px]'>
                
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

                
                <div className='w-[526px] h-[56px] justify-between text-[16px] font-yekan-500 text-[#607D8B] 
                    shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] pl-[40px] pr-[8px] rounded-[16px] flex items-center
                    max-xl:text-[14px] max-lg:text-[13px] max-lg:gap-[10px] max-md:w-[300px] max-md:gap-[7px]'>

                    <div 
                        onClick={() => handleSort('all')}
                        className={`px-[31px] h-[40px] rounded-[12px] 
                         flex items-center max-md:px-[20px] 
                        ${activeSort === 'all' ? 'bg-[#2196F3] text-[#FFFF] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]' : 'text-[#607D8B] '}`}> 
                        همه 
                    </div>

                    <div 
                        onClick={() => handleSort('newest')}
                        className={activeSort === 'newest' ? 'bg-[#2196F3] text-[#FFFF]' : ''}> 
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

           
            <div className='mt-[38px] flex flex-wrap justify-center gap-[32px] max-2xl:gap-[26px]'>
                {newsData.map((item, index) => (
                    <NewsList key={index} data={item} /> 
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

export { SearchNews };