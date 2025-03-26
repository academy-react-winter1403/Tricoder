
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./phoneNumberSlice"; // ایمپورت کردن authSlice

export const store = configureStore({
  reducer: {
    auth: authReducer, // اضافه کردن به استیت اصلی
  },
});

