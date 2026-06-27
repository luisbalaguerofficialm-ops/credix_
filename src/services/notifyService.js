// src/services/notifyService.js

import axios from "axios";

const API = axios.create({
  baseURL: "https://credit-union-backend-1.onrender.com/api",
});

// ------------------------------
// SEND EMAIL
// ------------------------------
export const sendEmail = async (to, subject, html) => {
  try {
    const res = await API.post("/notify/send-email", {
      to,
      subject,
      html,
    });
    return res.data;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err.response?.data || err;
  }
};

// ------------------------------
// SEND SMS
// ------------------------------
export const sendSMS = async (to, message) => {
  try {
    const res = await API.post("/notify/send-sms", {
      to,
      message,
    });
    return res.data;
  } catch (err) {
    console.error("Error sending SMS:", err);
    throw err.response?.data || err;
  }
};

// ------------------------------
// SEND OTP (EMAIL + SMS)
// ------------------------------
export const sendOTP = async (email, phone) => {
  try {
    const res = await API.post("/notify/send-otp", {
      email,
      phone,
    });
    return res.data; // { success: true, otp }
  } catch (err) {
    console.error("Error sending OTP:", err);
    throw err.response?.data || err;
  }
};

// ------------------------------
// SEND TRANSACTION ALERT
// ------------------------------
export const sendTransactionAlert = async ({
  email,
  phone,
  type,
  amount,
  balance,
}) => {
  try {
    const res = await API.post("/notify/transaction-alert", {
      email,
      phone,
      type,
      amount,
      balance,
    });
    return res.data;
  } catch (err) {
    console.error("Error sending alert:", err);
    throw err.response?.data || err;
  }
};

// ------------------------------
// SEND KYC STATUS UPDATE
// ------------------------------
export const sendKycStatus = async (email, status) => {
  try {
    const res = await API.post("/notify/kyc-status", {
      email,
      status,
    });
    return res.data;
  } catch (err) {
    console.error("Error sending KYC update:", err);
    throw err.response?.data || err;
  }
};
