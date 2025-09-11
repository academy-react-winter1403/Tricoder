import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTypes: [],  
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleType(state, action) {
      const typeId = action.payload;
      if (state.selectedTypes.includes(typeId)) {
        state.selectedTypes = state.selectedTypes.filter(id => id !== typeId);
      } else {
        state.selectedTypes.push(typeId);
      }
    },
  },
});

export const { toggleType } = filterSlice.actions;
export default filterSlice.reducer;
