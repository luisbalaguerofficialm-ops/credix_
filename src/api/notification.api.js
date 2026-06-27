// src/api/notification.api.js

import axiosClient from "../util/axiosClient";

/**
 * Fetch notifications for the logged-in user
 */
export const fetchNotifications = async () => {
  try {
    const res = await axiosClient.get("/api/notifications");
    return res.data.notifications || [];
  } catch (err) {
    console.error("Failed to fetch notifications:", err);
    throw err;
  }
};
