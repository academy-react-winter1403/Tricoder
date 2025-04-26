
import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import coursetabReducer from './courseDetailTabs'
import profileReducer from './profileSlice';
import priceRangeReducer from "./../Store/PriceSlice"

export const store = configureStore({
    reducer: {
        menu:menuReducer,
        coursetab:coursetabReducer,
        profile:profileReducer,
        priceRange: priceRangeReducer
    },
})

