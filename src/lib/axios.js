// import axios from "axios";

// // const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
// const BASE_URL = import.meta.env.MODE === "development" ? "https://quick-talk-backend-six.vercel.app/api" : "/api";


// export const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true ,
// })




// import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "https://quick-talk-backend-six.vercel.app/api"
//     : "/api";

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });

// // ✅ AUTO ATTACH TOKEN TO EVERY REQUEST
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });


import axios from "axios";

// ✅ ALWAYS USE BACKEND URL (for both dev & prod)
const BASE_URL = "https://quick-talk-backend-six.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// ✅ ATTACH TOKEN TO EVERY REQUEST
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
