import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, Shield, Award, Camera, Globe } from "lucide-react";

export default function ResetTransactionPin() {
  const navigate = useNavigate();
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans select-none">
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-[#e2e8f0] p-10 md:p-12 relative overflow-hidden">
          {/* Top Decorative Border Accent */}
          <div className="absolute top-0 left-0 w-full h-5 bg-[#00516f]"></div>

          {/* Card Lock Icon */}
          <div className="flex justify-center mb-6 mt-2">
            <div className="bg-[#e5f6ff] p-3 rounded-xl text-[#00516f]">
              <Lock className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Center Focus Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#002230] tracking-tight mb-3">
              Reset Your Transaction PIN
            </h1>
            <p className="text-[15px] text-[#4a5568] leading-relaxed max-w-sm mx-auto">
              Securely update the PIN for your{" "}
              <span className="font-semibold text-[#00516f]">
                transaction account
              </span>{" "}
              ending in ····4921
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              {/* New PIN */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#4a5568] uppercase tracking-wider">
                  New 4-Digit PIN
                </label>
                <div className="relative">
                  <input
                    className="w-full h-14 text-center text-2xl font-bold tracking-[0.5em] border border-[#cbd5e1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent bg-[#f8fafc] transition-all"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="····"
                    type={showNewPin ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPin(!showNewPin)}
                    className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-[#00516f] transition-colors"
                  >
                    {showNewPin ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm PIN */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#4a5568] uppercase tracking-wider">
                  Confirm New PIN
                </label>
                <div className="relative">
                  <input
                    className="w-full h-14 text-center text-2xl font-bold tracking-[0.5em] border border-[#cbd5e1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent bg-[#f8fafc] transition-all"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="····"
                    type={showConfirmPin ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPin(!showConfirmPin)}
                    className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-[#00516f] transition-colors"
                  >
                    {showConfirmPin ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Security Notice Banner */}
            <div className="flex gap-3 p-4 bg-[#f4fbf4] rounded-xl border-l-6 border-r-6 border-[#4b8a24]">
              <Shield className="w-5 h-5 text-[#4b8a24] shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#475569] leading-relaxed">
                <strong className="text-[#1e293b]">For your protection:</strong>{" "}
                Choose a PIN that is not easily guessable, such as sequential
                numbers (1234) or repeating digits (0000).
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                className="w-full h-13 bg-[#00516f] text-white font-semibold text-[16px] rounded-xl shadow-sm hover:bg-[#003f57] transition-all active:scale-[0.99] flex items-center justify-center"
                type="submit"
              >
                Update PIN
              </button>
              <button
                onClick={handleBack}
                className="w-full h-11 border border-[#00516f] bg-transparent text-[#00516f] font-semibold text-[15px] rounded-xl hover:bg-[#e5f6ff] transition-all"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
