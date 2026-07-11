import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ShieldAlert,
  Smartphone,
  Mail,
  ArrowRight,
  User,
  Lock,
  Loader2,
} from "lucide-react";

export default function SendTransactionPinOtp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("sms");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axiosClient.get("/api/auth/me");

        setEmail(data.user.email);
      } catch (err) {
        toast.error("Unable to load your account.");
      }
    };

    fetchUser();
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!email) {
        toast.error("Unable to identify your account.");
        return;
      }

      const { data } = await axiosClient.post(
        "/api/users/transaction-pin/send-otp",
        {
          email,
          purpose: "transaction_pin",
          method: selectedMethod,
        },
      );

      toast.success(data.message);

      setTimeout(() => {
        navigate("/otp-verification", {
          state: {
            email,
            method: selectedMethod,
            purpose: "transaction_pin",
          },
        });
      }, 1200);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send verification code.",
      );
    } finally {
      setLoading(false);
    }
  };
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-[#f3faff] min-h-screen flex flex-col items-center justify-between text-[#001f29] font-sans px-4 py-12 select-none">
        {/* Top Branding Header */}
        <header className="w-full pt-6 pb-2 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#004c66] tracking-tight">
            America Bank
          </h1>
        </header>

        {/* Main Verification Card Area */}
        <main className="w-full max-w-[540px] my-auto">
          <div className="bg-white border border-[#d6e3ec] rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.015)] p-10 md:p-12 text-center">
            {/* Top Verification Shield Icon (Matching squircle layout in screen000.png) */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#e5f6ff] text-[#004c66]">
                <ShieldAlert className="w-7 h-7 stroke-[2.2]" />
              </div>
            </div>

            {/* Heading Content */}
            <h2 className="text-2xl font-bold text-[#001f29] tracking-tight mb-4">
              Secure Verification
            </h2>
            <p className="text-[15px] text-[#4a5568] leading-relaxed max-w-sm mx-auto mb-8">
              To update your Transaction PIN, we need to verify your identity.
              Choose how you'd like to receive your security code.
            </p>

            {/* Method Selection Form */}
            <form className="space-y-4 text-left" onSubmit={handleVerify}>
              {/* SMS Option Label */}
              {/* <label
                onClick={() => setSelectedMethod("sms")}
                className={`relative flex items-center p-5 border rounded-xl cursor-pointer transition-all select-none ${
                  selectedMethod === "sms"
                    ? "border-[#004c66] bg-white ring-1 ring-[#004c66]"
                    : "border-[#cbd5e1] bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-center mr-4">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      selectedMethod === "sms"
                        ? "border-[#004c66]"
                        : "border-slate-400"
                    }`}
                  >
                    {selectedMethod === "sms" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#004c66]" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1e293b]">
                    Text Message (SMS)
                  </span>
                  <span className="text-xs font-medium text-slate-500 mt-0.5">
                    •••• •••• 42
                  </span>
                </div>
                <Smartphone className="ml-auto w-5 h-5 text-slate-600 stroke-[2]" />
              </label> */}

              {/* Email Option Label */}
              <label
                onClick={() => setSelectedMethod("email")}
                className={`relative flex items-center p-5 border rounded-xl cursor-pointer transition-all select-none ${
                  selectedMethod === "email"
                    ? "border-[#004c66] bg-white ring-1 ring-[#004c66]"
                    : "border-[#cbd5e1] bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-center mr-4">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      selectedMethod === "email"
                        ? "border-[#004c66]"
                        : "border-slate-400"
                    }`}
                  >
                    {selectedMethod === "email" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#004c66]" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1e293b]">
                    Email Address
                  </span>
                  <span className="text-xs font-medium text-slate-500 mt-0.5">
                    m***@example.com
                  </span>
                </div>
                <Mail className="ml-auto w-5 h-5 text-slate-600 stroke-[2]" />
              </label>

              {/* Action Trigger Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-sm ${
                  loading
                    ? "bg-[#6c8d9b] cursor-not-allowed"
                    : "bg-[#004c66] hover:bg-[#003d52] text-white"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Security Code</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
              <button
                onClick={handleBack}
                disabled={loading}
                className="w-full h-11 border border-[#00516f] bg-transparent text-[#00516f] font-semibold text-[15px] rounded-xl hover:bg-[#e5f6ff] transition-all disabled:opacity-50"
                type="button"
              >
                Cancel
              </button>
            </form>
          </div>
        </main>

        {/* Footer Area with Navigation Utilities */}
        <footer className="w-full max-w-[500px] flex justify-between items-center px-4 mt-auto pt-6 text-xs font-semibold text-[#4a5568]">
          {/* Back navigation matching left alignment of screen000.png */}
          <Link
            to="/profile-settings"
            className="hover:text-[#004c66] flex items-center gap-2 transition-colors"
            href="#"
          >
            <User className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Profile</span>
          </Link>

          {/* Security badge matching right alignment of screen000.png */}
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>256-bit Secure</span>
          </div>
        </footer>
      </div>
    </>
  );
}
