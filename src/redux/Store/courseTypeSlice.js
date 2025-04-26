import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: [],
};

const courseType = createSlice({
  name: "priceRange",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;
