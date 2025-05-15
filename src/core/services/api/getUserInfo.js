import http from "../interceptor/index";

export const getUserInfo = async () => {
  try {
    const result = await http.get("/SharePanel/GetProfileInfo");
    return result.data;
  } catch (error) {
    console.log("خطا در گرفتن پروفایل:", error.response?.data || error.message);
    throw error;
  }
};
