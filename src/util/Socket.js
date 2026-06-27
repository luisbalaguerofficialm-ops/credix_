// src/util/socket.js
import { io } from "socket.io-client";

const API_URL = "https://credit-union-backend-1.onrender.com";

const socket = io(API_URL, {
  transports: ["websocket"],
  autoConnect: false,
});

export const connectSocket = (userId) => {
  const token = localStorage.getItem("accessToken");

  if (!userId || !token) return;

  socket.auth = { token };

  socket.connect();
  socket.emit("join-user", userId);
};

export default socket;
