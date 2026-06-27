import React, { useState, useRef, useEffect } from "react";
import axiosClient from "../../util/axiosClient";
import { toast } from "react-toastify";

const EnterPin = ({ onClose, onConfirm }) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all digits filled
    const enteredPin = newPin.join("");
    if (enteredPin.length === 4 && newPin.every(Boolean)) {
      handleConfirm(enteredPin);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // ---------------- VERIFY PIN ----------------
  const handleConfirm = async (enteredPinOverride) => {
    const enteredPin = enteredPinOverride || pin.join("");

    if (!enteredPin || enteredPin.length !== 4) {
      toast.error("Please enter the 4-digit PIN");
      return;
    }

    setLoading(true);

    try {
      const res = await axiosClient.post("/api/pin/confirm", {
        transactionPin: enteredPin,
      });

      if (res.data?.success) {
        toast.success("PIN verified. Processing transfer...");
        onConfirm(enteredPin); // ✅ pass PIN back to ThirdSetTransfar
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Invalid or expired PIN. Please check your email.",
      );
      setPin(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const isPinComplete = pin.every(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-40 px-4">
      <div className="bg-white flex flex-col gap-7 rounded-lg shadow-lg w-full max-w-sm p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl text-[#006A91] font-semibold text-center mb-2">
          Verify Transaction
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter the 4-digit PIN sent to your <br />
          <span className="font-medium text-[#006A91]">Email</span>
        </p>

        <div className="flex justify-between mb-6">
          {pin.map((digit, i) => (
            <input
              key={i}
              type="password"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[i] = el)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 text-center border-gray-400 text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007C92]"
            />
          ))}
        </div>

        <button
          onClick={() => handleConfirm()}
          disabled={!isPinComplete || loading}
          className={`w-full h-10 rounded-md font-medium text-white flex items-center justify-center
            ${
              !isPinComplete || loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#006A91] hover:bg-[#005b77]"
            }
          `}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Confirm"
          )}
        </button>
      </div>
    </div>
  );
};

export default EnterPin;
