import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosClient from "../util/axiosClient";
import socket from "../util/Socket";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH USER =================
  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const res = await axiosClient.get("/api/auth/me");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      console.error("Failed to refresh user:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // ================= INITIAL LOAD =================
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [fetchUser]);

  // ================= SOCKET LISTENERS =================
  useEffect(() => {
    if (!user?._id) return;

    // Connect socket
    socket.auth = { token: localStorage.getItem("accessToken") };
    socket.connect();
    socket.emit("join-user", user._id);

    // Listen for real-time updates

    socket.on("profile-updated", fetchUser);
    socket.on("user-updated", fetchUser);

    return () => {
      socket.off("profile-updated", fetchUser);
      socket.off("user-updated", fetchUser);
    };
  }, [user?._id, fetchUser]);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
