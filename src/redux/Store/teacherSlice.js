import { createSlice } from "@reduxjs/toolkit";



const TeacherIdSlice = createSlice({
    name:"TeacherId",
    initialState:{
        SelectTeacher:[],
    },
    reducers :{
        setSelectTeacher:(state,action)=>{
          state.SelectTeacher=action.payload;  
        },
    },
});



export const {setSelectTeacher}=  TeacherIdSlice.actions;
export default TeacherIdSlice.reducer;