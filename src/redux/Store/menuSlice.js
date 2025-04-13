import  {createSlice}  from "@reduxjs/toolkit";


const menu = createSlice({
    name:"manu",
    initialState:{isOpen:false},
    reducers:{
        OpenMenu:(state)=>{
            state.isOpen = true;
        },
        closeMenu:(state) =>{
            state.isOpen =false;
        }
    }

})


export const {OpenMenu,closeMenu}=menu.actions;
export default menu.reducer;