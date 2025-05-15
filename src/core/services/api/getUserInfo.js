import axios from "../interceptor/axiosInstance.js";

export const getUserInfo = async () => {
  try {
    const result = await axios.get("/SharePanel/GetProfileInfo");
    return result.data;
  } catch (error) {
    console.log("خطا در گرفتن پروفایل:", error.response?.data || error.message);
    throw error;
  }
};
