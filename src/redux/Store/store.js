
import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import coursetabReducer from './courseDetailTabs'


export const store = configureStore({
    reducer: {
        menu:menuReducer,
        coursetab:coursetabReducer,
    },
})