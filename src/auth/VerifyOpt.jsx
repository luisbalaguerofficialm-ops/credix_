import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosClient from "../util/axiosClient";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShieldCheck, Lock, ArrowRight, Loader2, Shield } from "lucide-react";
export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || sessionStorage.getItem("resetEmail");

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  // Countdown timer simulation to match screenshot
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleChange = (element, index) => {
    const value = element.value;

    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Enter the 6-digit verification code");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/auth/password/verify-otp", {
        email,
        otp: code,
      });

      toast.success(data.message);

      sessionStorage.setItem("resetToken", data.resetToken);
      sessionStorage.setItem("resetEmail", email);

      navigate("/reset-password", {
        state: {
          email,
          token: data.resetToken,
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    try {
      await axiosClient.post("/auth/password/forgot", {
        email,
      });

      setTimeLeft(60);

      toast.success("Verification code resent");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend code");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-[#f4f9fc] text-[#001f29] min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans w-full">
        {/* Soft Ambient Background Shaders */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(215,242,255,0.8)_0%,transparent_70%)] z-0"></div>

        {/* Main Content Container */}
        <main className="w-full max-w-[460px] z-10 flex flex-col justify-center">
          {/* Top Minimal Branding Header */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[#004b6e]">
              <Shield className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">
                America Bank
              </span>
            </div>
          </div>

          {/* Verification Card Frame */}
          <div className="bg-white border border-[#e1e9ef] rounded-md p-8 md:p-12 shadow-[0px_4px_24px_rgba(0,0,0,0.01)] text-center w-full">
            {/* Card Headings */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-[#001e2b] mb-3 tracking-tight">
                Verify Your Email
              </h1>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[280px] mx-auto">
                We've sent a 6-digit code to <br />
                <span className="font-semibold text-gray-700">{email}</span>
              </p>
            </div>

            {/* OTP Interactive Box Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 sm:gap-2.5">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    name="otp"
                    maxLength="1"
                    className="w-full h-14 text-center text-lg font-bold border border-[#d2e4f0] rounded-md bg-[#eef7fc] text-[#004b6e] outline-none transition-all focus:border-[#006a91] focus:bg-white"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>

              {/* Timers & Interactive Section Actions */}
              <div className="space-y-6">
                <div className="text-center">
                  {timeLeft > 0 ? (
                    <p className="text-xs text-gray-400 font-medium">
                      Resend code in{" "}
                      <span className="font-bold text-[#004b6e]">
                        0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                      </span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={resendCode}
                      className="text-[#006a91] text-xs font-semibold hover:underline"
                    >
                      Resend Verification Code
                    </button>
                  )}
                </div>

                {/* Action Validation CTA Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-2 mt-2 ${
                    loading
                      ? "bg-[#7aa8bb] cursor-not-allowed"
                      : "bg-[#006a91] hover:bg-[#00516f] text-white"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Verify & Continue</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </>
                  )}
                </button>

                <div className="text-center pt-1"></div>
              </div>
            </form>
          </div>

          {/* Secure Compliance Footer Context */}
          <footer className="mt-10 text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-gray-400 tracking-wider uppercase text-[10px] font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Secure Encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>NCUA Insured</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 opacity-80 font-medium">
              © 2026 America Bank. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
