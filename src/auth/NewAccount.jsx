import React, { useState } from "react";
import {
  Lock,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Headphones,
  History,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";

export default function NewAccount() {
  const navigate = useNavigate();

  // State to track selected account card matching the active state layout in screen4.jpg
  const [selectedAccount, setSelectedAccount] = useState(() => {
    return localStorage.getItem("choosedAccount");
  });

  const handleContinue = () => {
    localStorage.setItem("choosedAccount", selectedAccount);
    // Navigate to the next step in the account creation process
    navigate("/account-persional-info");
  };
  return (
    <div className="min-h-screen bg-[#f4f9fc] font-sans text-[#001f29] antialiased">
      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* STEPPER */}
        <div className="flex justify-center mb-14">
          <RegistrationStepper currentStep={1} />
        </div>

        {/* Header Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004b6e] tracking-tight mb-4">
            Choose Your Account
          </h1>
          <p className="text-base text-[#4a5b66] max-w-2xl mx-auto leading-relaxed">
            Join a community that puts your financial growth first. Select the
            account that best fits your daily needs and long-term goals.
          </p>
        </div>

        {/* Account Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Essential Checking Card */}
          <div
            onClick={() => setSelectedAccount("Essential Checking")}
            className={`group cursor-pointer bg-white border rounded-xl p-8 transition-all duration-300 flex flex-col h-full relative
              ${
                selectedAccount === "Essential Checking"
                  ? "border-[#006a91] ring-2 ring-[#006a91]/20 shadow-xl scale-[1.01]"
                  : "border-[#cfdadf] hover:border-[#a3b8c4] hover:shadow-md"
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#e3f4fd] rounded-lg text-[#006a91]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-[#bce46b] text-[#3b5308] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                  Most Popular
                </span>
                {/* <div className="w-5 h-5 rounded-full bg-[#004b6e] text-white flex items-center justify-center">
                  <span className="text-[10px]">✓</span>
                </div> */}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#004b6e] mb-2">
              Essential Checking
            </h3>
            <p className="text-[#4a5b66] text-sm mb-6 leading-relaxed">
              A modern checking account designed for everyday ease with zero
              monthly maintenance fees.
            </p>

            <div className="space-y-4 mb-8 grow">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  No monthly maintenance fees
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  30,000+ Fee-free ATMs nationwide
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  Early Payday (up to 2 days faster)
                </span>
              </div>
            </div>

            <div className="pt-5 border-t border-[#edf2f6]">
              <p className="text-xs text-[#556570]">
                Minimum to open:{" "}
                <span className="font-bold text-[#001f29]">$25.00</span>
              </p>
            </div>
          </div>

          {/* High-Yield Savings Card */}
          <div
            onClick={() => setSelectedAccount("High-Yield Savings")}
            className={`group cursor-pointer bg-white border rounded-xl p-8 transition-all duration-300 flex flex-col h-full relative
              ${
                selectedAccount === "High-Yield Savings"
                  ? "border-[#006a91] ring-2 ring-[#006a91]/20 shadow-xl scale-[1.01]"
                  : "border-[#cfdadf] hover:border-[#a3b8c4] hover:shadow-md"
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#e3f4fd] rounded-lg text-[#006a91]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text-right">
                <span className="block text-[#527505] font-extrabold text-2xl tracking-tight">
                  4.50% APY
                </span>
                <span className="text-[9px] font-bold text-[#718594] uppercase tracking-wider block mt-0.5">
                  Industry Leading Rate
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#004b6e] mb-2">
              High-Yield Savings
            </h3>
            <p className="text-[#4a5b66] text-sm mb-6 leading-relaxed">
              Watch your wealth grow faster with competitive interest rates and
              professional tools.
            </p>

            <div className="space-y-4 mb-8 grow">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  Earn 4.50% Annual Percentage Yield
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  Automated round-up savings tools
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527505] shrink-0" />
                <span className="text-sm text-[#001f29] font-medium">
                  Zero monthly service charges
                </span>
              </div>
            </div>

            <div className="pt-5 border-t border-[#edf2f6]">
              <p className="text-xs text-[#556570]">
                Minimum to open:{" "}
                <span className="font-bold text-[#001f29]">$100.00</span>
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Banner Action Block */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#e6f4fc] rounded-xl p-6 border border-[#cfdadf] gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-10 bg-[#162a35] text-[10px] font-black text-white p-1 flex items-center justify-center text-center tracking-tighter rounded shadow-sm shrink-0">
              NCUA
            </div>
            <div className="text-[12px] leading-snug text-[#4a5b66] font-medium">
              Your deposits are federally insured
              <br />
              up to $250,000 by the NCUA.
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto justify-end">
            <button
              onClick={handleContinue}
              className="flex-1 md:flex-initial px-8 py-3 bg-[#006a91] text-white font-semibold text-sm rounded-lg hover:bg-[#005676] transition-colors shadow-sm"
            >
              Continue to Personal Info
            </button>
          </div>
        </div>

        {/* Security Trust Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#e2eaf0] pt-8">
          <div className="flex items-center gap-2 justify-center text-[#556570]">
            <ShieldCheck className="w-4 h-4 text-[#718594]" />
            <span className="text-xs font-medium">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2 justify-center text-[#556570]">
            <ShieldAlert className="w-4 h-4 text-[#718594]" />
            <span className="text-xs font-medium">Fraud Monitoring</span>
          </div>
          <div className="flex items-center gap-2 justify-center text-[#556570]">
            <Headphones className="w-4 h-4 text-[#718594]" />
            <span className="text-xs font-medium">24/7 Expert Support</span>
          </div>
          <div className="flex items-center gap-2 justify-center text-[#556570]">
            <History className="w-4 h-4 text-[#718594]" />
            <span className="text-xs font-medium">Member Owned Since 1954</span>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="bg-[#1a3644] text-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Meridian
            </span>
            <p className="text-xs text-[#a3b8c4] mt-2 font-medium">
              © 2026 Meridian Credit Union. Member NCUA. Equal Housing Lender.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#a3b8c4]">
            <a
              className="hover:text-[#bce46b] transition-colors"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-[#bce46b] transition-colors"
              href="#security"
            >
              Security
            </a>
            <a className="hover:text-[#bce46b] transition-colors" href="#terms">
              Terms of Service
            </a>
            <a
              className="hover:text-[#bce46b] transition-colors"
              href="#disclosures"
            >
              Legal Disclosures
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
