import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../components/Translate/i18n";


export const TranslateSlice= createSlice({
    name:"translate",
    initialState:{
        lng :localStorage.getItem("language")
    },
    reducers:{ 
           changeLng:(state,action)=>{
            state.lng=action.payload
            // const newLanguage = i18n.language = 'en';
            // i18n.changeLanguage(newLanguage);
        }
     }
})
export const { changeLng } = TranslateSlice.actions;
export default TranslateSlice.reducer
