import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";

export default function OtpVerification() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleVerify = () => {
    navigate("/Transaction-Pin-Reset-Successfully");
  };

  return (
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
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Boxed Inputs Row */}
          <div className="flex justify-between gap-2.5 md:gap-3">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                aria-label={`Digit ${index + 1}`}
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={1}
                pattern="\d*"
                type="text"
                className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border border-[#cbd5e1] rounded-xl bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#004c66] focus:border-transparent transition-all"
              />
            ))}
          </div>

          {/* Controls & Primary Trigger Button */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex items-center justify-center gap-1.5 text-sm text-[#4a5568]">
              <span>Resend in</span>
              <span className="text-[#004c66] font-bold">0:52</span>
            </div>

            <button
              onClick={handleVerify}
              className="w-full bg-[#004c66] hover:bg-[#003d52] text-white py-3.5 rounded-xl font-semibold text-base transition-all active:scale-[0.99] shadow-sm"
              type="submit"
            >
              Verify & Continue
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
  );
}
