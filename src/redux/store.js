
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./phoneNumberSlice";
import menuReducer from "./Store/menuSlice"
import coursetabReducer from "./Store/courseDetailTabs"
import profileReducer from "./Store/profileSlice"
import themeSlice from "./Store/darkmode/DarkMode"
import { api } from "../core/services/interceptor/reduxIndex";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    coursetab: coursetabReducer,
    profile: profileReducer,
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});