import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistrationStepper from "../components/RegistrationStepper";

const NewAccountForth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedSSN, setAcceptedSSN] = useState(false);

  const location = useLocation();

  const profileImage = location.state?.profileImage;

  const registrationData =
    JSON.parse(localStorage.getItem("registrationData")) || {};
  const choosedAccount = localStorage.getItem("choosedAccount");

  const currentStep = 4;

  const handleSubmit = async () => {
    if (!acceptedTerms || !acceptedSSN) {
      return toast.error("Please accept all legal disclosures.");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(registrationData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      const res = await axiosClient.post("/api/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message || "Registration completed successfully!");

      localStorage.removeItem("registrationData");
      localStorage.removeItem("choosedAccount");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans antialiased">
      {/* Header Bar */}
      <header className="bg-white w-full h-20 flex items-center px-6 md:px-16 border-b border-[#e2eaf0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-[#004b6e]">
            Credit Union
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <span className="text-[#556570] flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#004b6e]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              Secure Connection
            </span>
            <button className="text-[#004b6e] hover:text-[#00334a] font-semibold transition-colors">
              Next and Exit
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 md:px-12 py-12 relative">
        {/* Step Indicator Section */}
        <div className="flex justify-center mb-14">
          <RegistrationStepper currentStep={4} />
        </div>

        {/* Content Heading */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold text-[#001f29] mb-3">
            Review Your Information
          </h1>
          <p className="text-[#4a5b66] max-w-3xl leading-relaxed text-sm">
            Please double-check your application details before submitting. Once
            submitted, your application will be processed immediately.
          </p>
        </section>

        {/* Dynamic Bento Cards Section */}
        <section className="space-y-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Selected Card */}
            <div className="bg-white p-6 rounded-xl border border-[#cfdadf] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-bold text-[#718594] uppercase tracking-wider">
                    Account Selected
                  </h3>
                  <button
                    onClick={() => navigate("/new-account")}
                    className="text-[#00516f] flex items-center gap-1 text-xs font-bold hover:underline"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="bg-[#bde46b] p-3 rounded-xl text-[#004b6e]">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#004b6e]">
                      {choosedAccount}
                    </h4>
                    <p className="text-sm font-black text-[#527505] mt-0.5">
                      {choosedAccount === "High-Yield Savings"
                        ? "4.50% APY"
                        : "No Monthly Fee"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Identity Verification Card */}
            <div className="bg-white p-6 rounded-xl border border-[#cfdadf] shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-[#718594] uppercase tracking-wider">
                  Identity Verification
                </h3>
                <button
                  onClick={() => navigate("/new-account-kyc")}
                  className="text-[#00516f] flex items-center gap-1 text-xs font-bold hover:underline"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2 text-[#527505]">
                  <img
                    src={profileImage ? URL.createObjectURL(profileImage) : ""}
                    alt="Profile"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <span className="text-sm font-bold text-[#3b5308]">
                    Documents Uploaded
                  </span>
                </div>
                <p className="text-sm font-medium text-[#001f29] pl-7">
                  profile image
                </p>
                <p className="text-xs text-[#718594] italic pl-7">
                  Verified via Meridian SecureID Portal
                </p>
              </div>
            </div>

            {/* Personal Information Module */}
            <div className="bg-white p-6 rounded-xl border border-[#cfdadf] shadow-sm md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-bold text-[#718594] uppercase tracking-wider">
                  Personal Information
                </h3>
                <button
                  onClick={() => navigate("/account-persional-info")}
                  className="text-[#00516f] flex items-center gap-1 text-xs font-bold hover:underline"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#718594]">
                    Full Name
                  </p>
                  <p className="text-sm font-semibold text-[#001f29]">
                    {registrationData.firstName} {registrationData.lastName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#718594]">
                    Email Address
                  </p>
                  <p className="text-sm font-semibold text-[#001f29]">
                    {registrationData.email}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#718594]">
                    Phone Number
                  </p>
                  <p className="text-sm font-semibold text-[#001f29]">
                    {registrationData.phone}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#718594]">
                    Residential Address
                  </p>
                  <p className="text-sm font-semibold text-[#001f29] leading-relaxed">
                    <>
                      {registrationData.address}
                      <br />
                      {registrationData.city}, {registrationData.state}{" "}
                      {registrationData.zipcode}
                    </>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclosures Frame */}
        <section className="bg-[#e4f4fd] p-8 rounded-xl border border-[#bde2f9] mb-12">
          <h3 className="text-xl font-bold text-[#004b6e] mb-4">
            Legal Disclosures
          </h3>
          <div className="space-y-5">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input
                className="mt-1 w-4 h-4 rounded border-[#cfdadf] text-[#006a91] focus:ring-[#006a91]/30 bg-white"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <span className="text-xs md:text-sm text-[#4a5b66] leading-relaxed select-none">
                I have read and agree to the{" "}
                <a
                  className="text-[#006a91] font-medium underline hover:text-[#004b6e]"
                  href="#disclosure"
                >
                  Electronic Communications Disclosure
                </a>{" "}
                and the{" "}
                <a
                  className="text-[#006a91] font-medium underline hover:text-[#004b6e]"
                  href="#agreement"
                >
                  Consumer Account Agreement
                </a>
                .
              </span>
            </label>
            <label className="flex items-start gap-4 cursor-pointer group">
              <input
                className="mt-1 w-4 h-4 rounded border-[#cfdadf] text-[#006a91] focus:ring-[#006a91]/30 bg-white"
                type="checkbox"
                checked={acceptedSSN}
                onChange={(e) => setAcceptedSSN(e.target.checked)}
              />
              <span className="text-xs md:text-sm text-[#4a5b66] leading-relaxed select-none">
                I certify that the Social Security Number or Taxpayer
                Identification Number provided is correct and I am not subject
                to backup withholding.
              </span>
            </label>
          </div>
        </section>

        {/* Submit Control Bar */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#e2eaf0]">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#004b6e] hover:bg-[#003852] text-white font-semibold text-sm py-3.5 px-8 rounded-md transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <button className="border border-[#a3b8c4] text-[#4a5b66] bg-white hover:bg-[#f8fafc] font-semibold text-sm py-3.5 px-8 rounded-md transition-all">
              Save and Exit
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <svg
                className="w-5 h-5 text-[#004b6e]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#718594]">
                  Encryption
                </span>
                <span className="text-xs font-bold text-[#004b6e]">
                  Bank-Grade
                </span>
              </div>
            </div>
            <div className="w-[1px] h-6 bg-[#cfdadf]"></div>
            <div className="w-12 h-8 bg-[#2d3748] text-[9px] font-black text-white px-1 flex items-center justify-center text-center tracking-tighter rounded shadow-xs">
              NCUA
            </div>
          </div>
        </section>
      </main>

      {/* Global Brand Footer */}
      <footer className="bg-[#1a3644] text-white w-full py-10 px-6 md:px-16 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="text-xl font-bold tracking-tight text-white">
              Credit Union
            </div>
            <p className="text-xs text-[#a3b8c4] font-medium">
              © 2026 Credit Union. Member NCUA. Equal Housing Lender.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#a3b8c4]">
            <a className="hover:text-white transition-colors" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#security">
              Security
            </a>
            <a className="hover:text-white transition-colors" href="#terms">
              Terms of Service
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#disclosures"
            >
              Legal Disclosures
            </a>
          </div>
        </div>
      </footer>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop />
    </div>
  );
};

export default NewAccountForth;
