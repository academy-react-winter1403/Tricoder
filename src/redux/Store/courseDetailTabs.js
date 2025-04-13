import { createSlice } from "@reduxjs/toolkit";



const CourseTabsSlice = createSlice({
    name:"coursetab",
    initialState:{
        ActiveTab:0,
    },
    reducers :{
        setActiveTab:(state,action)=>{
          state.ActiveTab=action.payload;  
        },
    },
});



export const {setActiveTab}=  CourseTabsSlice.actions;
export default CourseTabsSlice.reducer;