import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: [150000, 1450000],
};

const priceRangeSlice = createSlice({
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
