import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialDarkMode = localStorage.getItem('darkMode') ?? "light"


 const themeSlice = createSlice({  
    name: 'theme',  
    initialState: {  
      darkMode:initialDarkMode ,  
    },  
    reducers: {  
        setTheme: (state, action) => {  
        state.darkMode = action.payload;  
        localStorage.setItem('darkMode', state.darkMode)
      },  
    },  
  });  

  export const { setTheme } = themeSlice.actions;  
  export default themeSlice.reducer;