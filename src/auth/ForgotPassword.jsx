import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Lock,
  Mail,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Shield,
  Loader2,
} from "lucide-react";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/auth/password/forgot", {
        email,
      });

      toast.success(data.message);

      // Save email for VerifyOtp page
      sessionStorage.setItem("resetEmail", email);

      setIsSuccess(true);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send verification code",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#f4f9fc] font-sans text-[#001f29] min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden w-full">
      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[460px] mx-auto flex flex-col justify-center">
        {/* Logo / Branding Anchor */}
        <div className="mb-8 text-center">
          <h1 className="text-[#004b6e] text-2xl font-bold tracking-tight">
            America Bank
          </h1>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white border border-[#e1e9ef] rounded-sm p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] w-full text-center">
          {/* Heading & Subtext */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#def3ff] mb-6 text-[#006a91]">
              {/* Custom reset-lock appearance */}
              <div className="relative">
                <Lock className="w-6 h-6 stroke-[2.5]" />
                <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-[#def3ff] px-0.5 rounded-full">
                  ↺
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#001e2b] mb-3 tracking-tight">
              Forgot Password?
            </h2>
            <p className="text-xs text-gray-500 max-w-[280px] mx-auto leading-relaxed">
              Enter your registered email address to receive a 6-digit
              verification code.
            </p>
          </div>

          {/* Email Form */}
          <form className="space-y-5 text-left" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold text-[#001e2b] block"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#bfc8cf] rounded-md text-sm text-[#001e2b] outline-none transition-all placeholder:text-gray-300 focus:border-[#006a91] focus:ring-1 focus:ring-[#006a91]"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Primary CTA */}
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
                  {/* <span>Sending...</span> */}
                </>
              ) : (
                <>
                  <span>Send Verification Code</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </>
              )}
            </button>
          </form>

          {/* Secondary Actions */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#00516f] hover:text-[#006a91] text-xs font-bold transition-colors"
              href="#"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[3]" />
              Back to Sign In
            </Link>
          </div>
        </div>

        {/* Secure Branding & Trust Badges */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-gray-400 font-semibold tracking-wider uppercase text-[10px]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
              <span>Secure Encryption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-gray-400" />
              <span>NCUA Insured</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 text-center max-w-[360px] leading-relaxed">
            © 2026 America Bank. Your security is our priority. We use
            industry-standard encryption to protect your personal information.
          </p>
        </div>
      </main>

      {/* Success Modal Overlay Interaction */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a2533]/40 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl text-center border border-gray-100">
            <div className="w-12 h-12 bg-[#eef8d3] text-[#557a02] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#001e2b] mb-1">
              Code Sent!
            </h3>
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              If an account exists for{" "}
              <span className="font-semibold text-gray-700">{email}</span>, you
              will receive a verification code shortly.
            </p>
            <button
              className="w-full bg-[#005a78] py-2 rounded-md text-white text-xs font-bold hover:bg-[#004b6e] transition-colors"
              onClick={() => {
                setIsSuccess(false);

                navigate("/verify-otp", {
                  state: {
                    email,
                  },
                });
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
