import axoisInstance from "../interceptor/axiosInstance.js";


export const getUserInfo = async () => {

  try {
    const result = await axoisInstance.get("/SharePanel/GetProfileInfo");
    return result.data;
  } catch (error) {
    console.log("errror",error);
  }
};
