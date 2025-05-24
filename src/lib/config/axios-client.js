import axios from "axios";
import { constants } from "@/lib/config/constants";
import { getCookie } from "cookies-next";

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: constants.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add authentication token
axiosClient.interceptors.request.use(
  (config) => {
    const access_token = getCookie("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized, redirecting to login...");
//       window.location.href = "/signin";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
