import http from "../interceptor/index";

export const putUserInfo = async (formData) => {
  try {
    const result = await http.put(
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
