import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import axiosClient from "../util/axiosClient";

import logo from "../assets/america_bank_logo.png";
import sideImage from "../assets/america_bank_logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axiosClient.post("/api/auth/login", loginData);

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/user-dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Toaster position="top-right" />

      {/* LEFT */}
      <div className="flex-1 flex justify-center items-center px-4 sm:px-6 py-10 bg-white">
        <div className="flex flex-col justify-center items-center gap-8 w-full max-w-md">
          <Link to="/">
            <img src={logo} alt="America Bank" className="mx-auto w-70 h-68" />
          </Link>

          <div className="gap-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-1">Let’s get you signed in</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="identifier"
                value={loginData.identifier}
                onChange={handleChange}
                placeholder="example@gmail.com or userName"
                className="w-full h-11 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006A91]"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full h-11 px-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006A91]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </button>

              <Link
                to="/forgot-password"
                className="block text-sm text-right mt-1 text-[#006A91] hover:text-amber-300 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">
                Remember my username
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#006A91] text-white rounded-xl font-bold hover:bg-[#005070] transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/new-account"
              className="font-semibold text-[#006A91] hover:text-amber-300 underline"
            >
              Open Account
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex flex-1">
        <img
          src={sideImage}
          alt="Bank"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
