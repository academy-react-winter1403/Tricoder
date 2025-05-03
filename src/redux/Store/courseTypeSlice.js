import { createSlice } from "@reduxjs/toolkit";


const courseType = createSlice({
  name: "courseFilters",
  initialState: {
    technologis: undefined,
  },
  reducers: {
    setTechnology: (state, action) => {
      state.technologis = [...state.technologis ,action.payload];
    },
  },
});

export const { setTechnology } = priceRangeSlice.actions;
export default courseFilters.reducer;
