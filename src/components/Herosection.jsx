import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, User, Lock, Eye, ArrowRight } from "lucide-react";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollReveal from "scrollreveal";

// Import all hero images
import hero1 from "../assets/hero.webp";
import hero2 from "../assets/image22.jpeg";
import hero3 from "../assets/images33.jpg";
import hero4 from "../assets/City .jpg";
import hero5 from "../assets/images77.jpg";
import hero6 from "../assets/images88.jpg";

const Herosection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const images = [hero2, hero3, hero4, hero1, hero5, hero6];
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (!loginData.identifier || !loginData.password) {
      return toast.error("Username/Email and password are required");
    }

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/auth/login", loginData);

      toast.success(data.message);

      // Save login info
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to dashboard
      navigate("/user-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  };
  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  useEffect(() => {
    ScrollReveal().reveal(".login", {
      duration: 4000,
      origin: "bottom",
      distance: "50px",
      delay: 3000,
      reset: true,
    });
  }, []);

  return (
    <>
      <section
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-visible"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-12 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-semibold leading-tight text-[50px] md:text-[70px]">
              Your Partner in Growth and Success.
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mt-7 max-w-175">
              Empowering individuals and businesses with seamless digital
              banking, smart savings, and tailored credit solutions designed to
              help you grow faster and achieve more.
            </p>

            <div className="flex gap-4 mt-8">
              {/* <Link
              to="/Open-Account"
              className="px-8 py-4 rounded-lg bg-white text-[#006A91] font-semibold hover:bg-gray-100"
            >
              Open An Account
            </Link> */}
            </div>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="absolute z-20 right-5 xl:right-18 bottom-[-130px] w-full max-w-[430px] hidden lg:block login">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#006A91]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-[#006A91]">
                Member Sign In
              </h2>

              <p className="text-gray-500 mt-2">
                Enter your credentials to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-left font-medium mb-2">
                  Username or Email Address
                </label>

                <input
                  type="text"
                  name="identifier"
                  value={loginData.identifier}
                  onChange={handleChange}
                  placeholder="Enter ID"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#006A91]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Password</label>

                  <Link
                    to="/forgot-password"
                    type="button"
                    className="text-[#006A91] text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#006A91]"
                />
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
                className="w-full bg-[#006A91] text-white py-4 rounded-lg font-semibold hover:bg-[#00516f]"
              >
                {loading ? "Signing In..." : "Secure Sign In"}
              </button>
            </form>

            <div className="mt-8 border-t pt-6 text-center">
              <p className="text-gray-500 mb-3">New to our Online Banking?</p>

              <Link
                to="/new-account"
                className="font-semibold text-[#006A91] hover:underline"
              >
                Register for access →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Herosection;
