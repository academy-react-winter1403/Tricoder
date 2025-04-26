
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./phoneNumberSlice";
import menuReducer from "./Store/menuSlice"
import coursetabReducer from "./Store/courseDetailTabs"
import profileReducer from "./Store/profileSlice"
import themeSlice from "./Store/darkmode/DarkMode"


export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    coursetab: coursetabReducer,
    profile: profileReducer,
    theme: themeSlice,

  },
});



