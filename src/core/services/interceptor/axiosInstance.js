import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://classapi.sepehracademy.ir/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Token in interceptor:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
