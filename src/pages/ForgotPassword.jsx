import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast from "react-hot-toast";

const ResetPass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const isPasswordValid = password.length >= 6;
  const isMatch = password && confirm && password === confirm;
  const canSubmit = token ? isPasswordValid && isMatch : !!email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (token) {
      // Reset password with token
      if (!canSubmit) {
        toast.error("Passwords do not match or are invalid");
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(
          "https://credit-union-backend-1.onrender.com/api/auth/reset-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, password }),
          },
        );
        const data = await res.json();
        if (!res.ok) throw data;

        toast.success(data.message || "Password reset successfully!");
        setPassword("");
        setConfirm("");
        setTimeout(() => navigate("/Login"), 1000);
      } catch (err) {
        console.error("Reset error", err);
        toast.error(err.message || err.error || "Failed to reset password");
      } finally {
        setLoading(false);
      }
    } else {
      // Send reset email
      if (!email) {
        toast.error("Please enter your email");
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(
          "https://credit-union-backend-1.onrender.com/api/auth/forgot-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          },
        );
        const data = await res.json();
        if (!res.ok) throw data;

        toast.success(
          data.message || "Reset link sent. Check your email for next steps.",
        );
        setEmail("");
      } catch (err) {
        console.error("Forgot password error", err);
        toast.error(err.message || err.error || "Failed to send reset link");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" w-full mx-auto flex flex-col justify-center h-screen items-center">
      <Link>
        <img src={logo} alt="" className=" h-35 w-44" />
      </Link>

      <div className="w-[378px] flex flex-col items-center gap-2 mt-11">
        <h3 className="text-[#2D2E2E] text-[28px] font-bold">
          {token ? "Reset Password" : "Forgot Password"}
        </h3>
        <p className="font-medium text-[18px] text-[#595A5B] leading-10 text-center">
          {token
            ? "Enter your new password below."
            : "Enter your email here and we will send you a link to reset your password .."}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[450px] flex flex-col gap-5 mt-10"
      >
        {token ? (
          <>
            <div className=" flex flex-col gap-4 ">
              <label
                htmlFor=""
                className="text-[14px] text-[#2D2E2E] font-medium"
              >
                New Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full py-2 px-3 pr-10 h-10 border rounded-lg ${
                    !password || isPasswordValid
                      ? "border-[#C3C7CA]"
                      : "border-red-500"
                  }`}
                  placeholder="*********"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A6A9AC]"
                >
                  {showPassword ? (
                    <MdVisibility className="w-5 h-5" />
                  ) : (
                    <MdVisibilityOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              {!isPasswordValid && password && (
                <p className="text-red-500 text-xs mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirm"
                className="text-[14px] font-medium text-[#2D2E2E]"
              >
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirm"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className={`w-full py-2 px-3 pr-10 h-10 border rounded-lg ${!confirm || isMatch ? "border-[#C3C7CA]" : "border-red-500"}`}
                  placeholder="*********"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A6A9AC]"
                >
                  {showConfirm ? (
                    <MdVisibility className="w-5 h-5" />
                  ) : (
                    <MdVisibilityOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              {!isMatch && confirm && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className={`w-full h-[46px] py-3 rounded-2xl text-[19px] font-bold  ${canSubmit ? "bg-[#FF9A01] text-white" : "bg-[#D1D5DC] text-[#006A91] text-2xl cursor-not-allowed"}`}
              >
                {loading ? "Processing..." : "Reset Password"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="email"
                className="text-[14px] text-[#2D2E2E] font-medium"
              >
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full py-2 px-3 h-10 border rounded-lg border-[#C3C7CA]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className={`w-full h-[46px] py-3 rounded-2xl text-[19px] font-bold  ${canSubmit ? "bg-[#FF9A01] text-white" : "bg-[#D1D5DC] text-[#006A91] text-2xl cursor-not-allowed"}`}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPass;
