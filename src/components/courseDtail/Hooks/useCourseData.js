import { useState , useEffect } from "react";
import getcoursebyId from "../../../core/services/api/course";



const UseCourseDate = (id) => {

    const [course, setCourse]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    

    useEffect(()=>{
        const fetchCourse = async () => {
            try{
                const result = await getcoursebyId(id);
                setCourse(result);
            }catch(errore){
                setError(errore.response?.data?.massage||"خطا دریافت شد ");
            }finally{
                setLoading(false);
            }
        };
        fetchCourse();
    },[id]);
    return {course, loading, error}
     
}



export default UseCourseDate;