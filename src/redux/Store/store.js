
import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import coursetabReducer from './courseDetailTabs'
import profileReducer from './profileSlice';

export const store = configureStore({
    reducer: {
        menu:menuReducer,
        coursetab:coursetabReducer,
        profile:profileReducer,
    },
})

