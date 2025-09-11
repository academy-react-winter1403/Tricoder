import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "/default-avatar.png",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { setAvatar } = profileSlice.actions;
export default profileSlice.reducer;