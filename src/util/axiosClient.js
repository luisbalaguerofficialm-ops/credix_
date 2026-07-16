// src/utils/axiosClient.js
import axios from "axios";
import { toast } from "react-hot-toast";
import socket from "./Socket"; // 🔹 Import your socket instance

// Base URL (deployed backend)
// const API_URL = "https://api.credixa.co";

// Create axios instance
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= REQUEST INTERCEPTOR =================
// Attach access token automatically
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// ================= RESPONSE INTERCEPTOR =================
// Auto-refresh on 401
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 Unauthorized & not already retried & refresh token exists
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;

      try {
        // 🔹 Attempt to refresh token
        const refreshRes = await axios.post(
          `${API_URL}/api/auth/refresh-token`,
          {
            token: localStorage.getItem("refreshToken"),
          },
        );

        const newAccessToken = refreshRes.data.accessToken;
        const newRefreshToken = refreshRes.data.refreshToken;

        // 🔹 Save new tokens
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        // 🔹 Update socket auth
        socket.auth = { token: newAccessToken };
        if (socket.connected) {
          socket.disconnect();
          socket.connect();
        }

        // 🔹 Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        localStorage.clear();

        if (socket.connected) {
          socket.disconnect();
        }

        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // Other errors
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    }

    return Promise.reject(error);
  },
);

// ================= LOGOUT HELPER =================
export const logout = () => {
  localStorage.clear();
  if (socket.connected) {
    socket.disconnect();
  }
  window.location.href = "/login";
};

export default axiosClient;
