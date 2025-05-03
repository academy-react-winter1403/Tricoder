import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import coursetabReducer from "./courseDetailTabs";
import profileReducer from "./profileSlice";
import courseFilters from "./../Store/courseTypeSlice";
import themeSlice from "./../Store/darkmode/DarkMode";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    coursetab: coursetabReducer,
    profile: profileReducer,
    courseFilters: courseFilters,
    theme: themeSlice,
  },
});
