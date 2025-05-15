import axoisInstance from "../interceptor/axiosInstance.js";

export const putUserInfo = async (formData) => {
  try {
    const result = await axoisInstance.put(
      "SharePanel/UpdateProfileInfo",
      formData,
      {
        headers: {
          "Content-Type": undefined,
        },
      }
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
