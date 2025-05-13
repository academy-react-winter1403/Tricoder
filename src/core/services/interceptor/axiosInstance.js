import axios from "axios";

const axoisInstance = axios.create({
    baseURL: "https://classapi.sepehracademy.ir/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  axoisInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  export default axoisInstance;
  