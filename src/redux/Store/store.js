
import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import coursetabReducer from './courseDetailTabs'
import profileReducer from './profileSlice';
import { themeSlice } from './darkmode/DarkMode';

export const store = configureStore({
    reducer: {
    },
})

