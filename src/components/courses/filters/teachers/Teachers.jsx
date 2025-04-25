import React, { useEffect, useState } from 'react'
import http from './../../../../core/services/interceptor/index';

const Teachers = () => {
    const [teacher, setTeacher] = useState([]);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getTeacherInfo = async () => {
        try {
            const result = await http.get("/Home/GetTeachers");
            setTeacher(result);
            setFilteredTeachers(result); // Initialize filtered list with all teachers
        } catch (error) {
            console.log(error);
            setTeacher([]);
            setFilteredTeachers([]);
        }
    };

    useEffect(() => {
        console.log("Calling API..."); 
        getTeacherInfo();
    }, []);

    // Filter teachers based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredTeachers(teacher);
        } else {
            const filtered = teacher.filter(teacherItem =>
                teacherItem.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredTeachers(filtered);
        }
    }, [searchQuery, teacher]);

    return (
        <div>
            <div className='w-full'>
                <input 
                    type="text"
                    className='border-1 w-full h-[46px] rounded-[12px] border-[#ECEFF1] pr-[16px] text-[14px] font-yekan-500' 
                    placeholder='جستجوی استاد'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="max-w-lg mx-auto space-y-4 overflow-auto pb-[30px] h-[142px]">
                {filteredTeachers?.map((item, index) => (
                    <NameList 
                        key={index} 
                        fullName={item.fullName} 
                        teacherId={item.teacherId}  
                    />
                ))}
            </div>
        </div>
    );
}

const NameList = ({fullName, teacherId}) => {
    return (
        <div className='flex flex-row-reverse justify-end gap-[8px] mb-[8px] mt-[12px]'>
            <input 
                id={"id"+teacherId} 
                type="checkbox" 
                className='hidden peer'
            />
            <label 
                htmlFor={"id"+teacherId} 
                className='font-yekan-500 text-[#455A64] text-[14px] block'
            >
                {fullName}
            </label>
            <label
                htmlFor={"id"+teacherId} 
                className={`border-1 w-[20px] h-[20px] block rounded-[8px] peer-checked:bg-[#2196F3] border-[#CFD8DC] bg-[#ECEFF1]`}
            ></label>
        </div>
    );
}

export { Teachers };