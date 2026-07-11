import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft, Lock, Loader2 } from "lucide-react";

export default function OtpVerification() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email, purpose, method } = location.state || {};

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // OTP input handler
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;

    setOtp(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  //  Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Enter the 6-digit verification code.");
      return;
    }

    try {
      setLoading(true);

      await axiosClient.post("/api/users/verify-transaction-pin-otp", {
        email,
        otp: code,
        purpose,
      });

      toast.success("Verification successful");

      setTimeout(() => {
        navigate("/Reset-Transaction-Pin");
      }, 1200);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid verification code.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setResending(true);

      const { data } = await axiosClient.post(
        "/api/users/transaction-pin/send-otp",
        {
          email,
          purpose,
          method,
        },
      );

      toast.success(data.message);

      setTimeLeft(60);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to resend code.");
    } finally {
      setResending(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-[#f3faff] min-h-screen flex flex-col items-center justify-between text-[#001f29] font-sans px-4 py-8 select-none">
        {/* Header Branding */}
        <header className="w-full pt-8 pb-4 flex justify-center items-center">
          <h1 className="text-2xl font-bold text-[#004c66] tracking-tight">
            Credit Union
          </h1>
        </header>

        {/* Main Content Box Canvas */}
        <main className="w-full max-w-[540px] bg-white rounded-2xl border border-[#d6e3ec] p-10 md:p-14 shadow-[0px_8px_30px_rgba(0,0,0,0.015)] my-auto">
          {/* Back Button Action */}
          <button
            aria-label="Go back"
            className="flex items-center text-[#004c66] text-sm font-semibold mb-8 hover:text-[#026c8f] transition-colors gap-2"
            type="button"
            onClick={handleBack}
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to method selection</span>
          </button>

          {/* Messaging Area */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#001f29] tracking-tight mb-4">
              Enter Security Code
            </h2>
            <p className="text-[15px] text-[#4a5568] leading-relaxed">
              We've sent a 6-digit code to your mobile number ending in{" "}
              <span className="font-bold text-[#001f29]">•••• 42</span>.
            </p>
          </div>

          {/* OTP Verification Form */}
          <form className="space-y-8" onSubmit={handleVerify}>
            {/* Boxed Inputs Row */}
            <div className="flex justify-between gap-2.5 md:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength={1}
                  type="text"
                  inputMode="numeric"
                  className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border border-[#cbd5e1] rounded-xl bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#004c66]"
                />
              ))}
            </div>

            {/* Controls & Primary Trigger Button */}
            <div className="flex flex-col gap-6 pt-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                {timeLeft > 0 ? (
                  <>
                    <span>Resend in</span>
                    <span className="font-bold text-[#004c66]">
                      0:{timeLeft.toString().padStart(2, "0")}
                    </span>
                  </>
                ) : (
                  <button
                    type="button"
                    disabled={resending}
                    onClick={resendOtp}
                    className="text-[#004c66] font-semibold hover:underline flex items-center gap-2"
                  >
                    {resending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      "Resend Code"
                    )}
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 rounded-xl font-semibold text-base flex justify-center items-center gap-2 transition-all ${
                  loading
                    ? "bg-[#7d9ca7] cursor-not-allowed"
                    : "bg-[#004c66] hover:bg-[#003d52] text-white"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  "Verify & Continue"
                )}
              </button>
            </div>
          </form>

          {/* Secondary Troubleshooting Link */}
          <div className="mt-8 text-center">
            <a
              className="text-[#004c66] font-semibold text-sm hover:underline"
              href="#"
            >
              Having trouble? Contact Support
            </a>
          </div>
        </main>

        {/* Secure Infrastructure Footer */}
        <footer className="w-full flex flex-col items-center gap-3 bg-transparent pt-6">
          <div className="flex items-center gap-2 text-[#4a5568]">
            <Lock className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase">
              256-Bit Secure
            </span>
          </div>

          {/* Copyright notice formatted identically to match screen9999.png */}
          <p className="text-[11px] text-[#718096] font-medium">
            © 2026 Credit Union. Federally insured by NCUA.
          </p>
        </footer>
      </div>
    </>
  );
}
