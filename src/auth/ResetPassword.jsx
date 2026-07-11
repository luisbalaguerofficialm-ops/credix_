import React, { useState } from "react";
import {
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  Lock,
  ShieldCheck,
  Circle,
  Loader2,
} from "lucide-react";

import { useNavigate, useLocation, Link } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || sessionStorage.getItem("resetEmail");

  const token = location.state?.token || sessionStorage.getItem("resetToken");
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    new: "",
    confirm: "",
  });

  // Evaluation tracking states for requirements matching
  const hasMinLength = passwords.new.length >= 8;
  const hasUppercase = /[A-Z]/.test(passwords.new);
  const hasNumber = /[0-9]/.test(passwords.new);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwords.new || !passwords.confirm) {
      toast.error("Please fill all fields");
      return;
    }

    if (!token) {
      toast.error(
        "Reset session expired. Please request a new password reset.",
      );
      navigate("/forgot-password");
      return;
    }

    if (passwords.new.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (passwords.new !== passwords.confirm) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/auth/password/reset", {
        token,
        password: passwords.new,
        confirmPassword: passwords.confirm,
      });

      toast.success(data.message || "Password updated successfully");

      sessionStorage.removeItem("resetToken");
      sessionStorage.removeItem("resetEmail");

      setTimeout(() => {
        navigate("/Password-Reset-Successfullly");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f9fc] text-[#001f29] relative overflow-hidden font-sans p-4 w-full">
        {/* Soft Ambient Vector Background Blur Layouts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#c4e7ff] opacity-30 blur-[100px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#e3fad2] opacity-20 blur-[100px]"></div>
        </div>

        {/* Main Content Component Canvas */}
        <main className="w-full max-w-[460px] relative z-10 flex flex-col justify-center">
          {/* Branding Token Header */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-[#004b6e]">
              <Shield className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">
                America Bank
              </span>
            </div>
          </div>

          {/* Centered Structured Card Component */}
          <div className="bg-white border border-[#e1e9ef] rounded-md shadow-[0px_4px_24px_rgba(0,0,0,0.01)] overflow-hidden w-full text-left">
            <div className="p-8 md:p-10">
              {/* Context Titles */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#001e2b] mb-2 tracking-tight">
                  Create New Password
                </h1>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Please choose a strong password that you haven't used before.
                </p>
              </div>

              {/* Input Submission Fields */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* New Password input section wrapper */}
                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold text-[#001e2b]"
                    htmlFor="new_password"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-10 bg-white border border-[#bfc8cf] rounded-md text-sm text-[#001e2b] outline-none placeholder:text-gray-300 focus:border-[#006a91] focus:ring-1 focus:ring-[#006a91]"
                      id="new_password"
                      name="new_password"
                      placeholder="••••••••"
                      required
                      type={showNewPassword ? "text" : "password"}
                      value={passwords.new}
                      onChange={(e) =>
                        setPasswords({ ...passwords, new: e.target.value })
                      }
                    />
                    <button
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00516f] transition-colors"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      type="button"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Input field segment configuration */}
                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold text-[#001e2b]"
                    htmlFor="confirm_new_password"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-10 bg-white border border-[#bfc8cf] rounded-md text-sm text-[#001e2b] outline-none placeholder:text-gray-300 focus:border-[#006a91] focus:ring-1 focus:ring-[#006a91]"
                      id="confirm_new_password"
                      name="confirm_new_password"
                      placeholder="••••••••"
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwords.confirm}
                      onChange={(e) =>
                        setPasswords({ ...passwords, confirm: e.target.value })
                      }
                    />
                    <button
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00516f] transition-colors"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      type="button"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Dynamic Requirement List Block container */}
                <div className="bg-[#eef7fc] rounded-md p-4 space-y-3 border border-[#d2e4f0]/40">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Security Requirements
                  </p>
                  <ul className="space-y-2">
                    <li
                      className={`flex items-center gap-2.5 text-xs font-medium ${hasMinLength ? "text-[#557a02]" : "text-gray-500"}`}
                    >
                      <Circle
                        className={`w-3.5 h-3.5 ${hasMinLength ? "fill-[#557a02] stroke-[#eef8d3]" : "text-gray-400"}`}
                      />
                      <span>At least 8 characters</span>
                    </li>
                    <li
                      className={`flex items-center gap-2.5 text-xs font-medium ${hasUppercase ? "text-[#557a02]" : "text-gray-500"}`}
                    >
                      <Circle
                        className={`w-3.5 h-3.5 ${hasUppercase ? "fill-[#557a02] stroke-[#eef8d3]" : "text-gray-400"}`}
                      />
                      <span>One uppercase letter</span>
                    </li>
                    <li
                      className={`flex items-center gap-2.5 text-xs font-medium ${hasNumber ? "text-[#557a02]" : "text-gray-500"}`}
                    >
                      <Circle
                        className={`w-3.5 h-3.5 ${hasNumber ? "fill-[#557a02] stroke-[#eef8d3]" : "text-gray-400"}`}
                      />
                      <span>One number</span>
                    </li>
                  </ul>
                </div>

                {/* Primary Action Button Context submission elements */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-12 rounded-md text-white text-xs font-bold flex justify-center items-center gap-2 transition-all ${
                    loading
                      ? "bg-[#7da6b7] cursor-not-allowed"
                      : "bg-[#006a91] hover:bg-[#00516f]"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Update Password</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Secure Trust Validation Badge Area Footer */}
            <div className="px-6 py-3.5 bg-[#def3ff] flex items-center justify-center gap-4 border-t border-[#d2e4f0]/60 text-[10px] font-semibold text-[#001e2b] opacity-75">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gray-500" />
                <span>SSL Encrypted</span>
              </div>
              <div className="w-px h-3 bg-gray-300"></div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />
                <span>Member NCUA</span>
              </div>
            </div>
          </div>

          {/* Secondary Auxiliary Direction Operations */}
          <div className="mt-6 text-center space-y-3">
            <Link
              to="/login"
              className="inline-block text-medium font-bold text-[#006a91] hover:text-[#00516f] transition-colors underline underline-offset-4"
              href="#"
            >
              Cancel and return to Sign In
            </Link>
            <p className="text-[11px] text-gray-400">
              Need help? Call our support team at{" "}
              <span className="font-bold text-[#004b6e] not-italic">
                1-800-TRUST-MK
              </span>
            </p>
          </div>

          {/* Footer Legal Disclaimers Block Layout */}
          <div className="mt-12 w-full text-center">
            <p className="text-[10px] text-gray-400 font-medium">
              © 2026 America Bank. Federally insured by NCUA. Equal Housing
              Lender.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
