import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchNotifications } from "../api/notification.api";
import socket from "../util/Socket";
import { AuthContext } from "./AuthContext";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  // ================= FETCH NOTIFICATIONS =================
  const loadNotifications = async () => {
    if (!user?._id) return;
    try {
      const data = await fetchNotifications();
      setNotifications(data);
    } catch {}
  };

  useEffect(() => {
    loadNotifications();
  }, [user?._id]);

  // ================= SOCKET.IO LISTENERS =================
  useEffect(() => {
    if (!user?._id) return;

    socket.connect();
    socket.emit("join-user", user._id);

    socket.on("new-notification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    socket.on("notification-updated", () => {
      loadNotifications();
    });

    return () => {
      socket.off("new-notification");
      socket.off("notification-updated");
      // optional: disconnect if no other listeners needed
      // socket.disconnect();
    };
  }, [user?._id]);

  return (
    <NotificationContext.Provider
      value={{ notifications, setNotifications, loadNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
