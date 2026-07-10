import React from "react";
import { HelpCircle, X, CheckCircle2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransactionPinUpdated() {
  const navigate = useNavigate();

  const handleBackToSettings = () => {
    navigate("/profile-settings");
  };

  const handleGoToDashboard = () => {
    navigate("/user-dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#001f29] font-sans antialiased">
      {/* --- Main Content Canvas --- */}
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6">
        <div className="max-w-[540px] w-full relative">
          {/* Abstract Blurred Ambient Background Shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-25 pointer-events-none">
            <div className="w-full h-full bg-[#c9f081] rounded-full blur-3xl" />
          </div>
          <div className="absolute -bottom-12 -right-12 w-52 h-52 opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[#c4e7ff] rounded-full blur-3xl" />
          </div>

          {/* Success Summary Presentation Card */}
          <div className="relative bg-white border border-[#e2eaf1] rounded-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 text-center">
            {/* Success Shield Icon Frame */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-[#e8f5cd] flex items-center justify-center text-[#496801] shadow-inner">
                <CheckCircle2 className="w-12 h-12 stroke-[2]" />
              </div>
            </div>

            {/* Content Header Block */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2024] tracking-tight mb-3">
              Transaction PIN Updated
            </h1>
            <p className="text-sm sm:text-base text-[#54626d] leading-relaxed mb-10">
              Your transaction PIN has been successfully changed and is ready
              for use.
            </p>

            {/* Interaction Route Controls */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleBackToSettings}
                type="button"
                className="w-full h-12 bg-[#006a91] text-white font-semibold text-sm rounded-xl hover:bg-[#00516f] transition-all active:scale-[0.99] shadow-sm"
              >
                Back to Security Settings
              </button>
              <button
                onClick={handleGoToDashboard}
                type="button"
                className="w-full h-12 bg-transparent border border-[#c2cbd4] text-[#00516f] font-semibold text-sm rounded-xl hover:bg-[#f0f9ff] transition-all"
              >
                Go to Dashboard
              </button>
            </div>

            {/* Compliance / Security Footnote Layout */}
            <div className="mt-10 pt-6 border-t border-[#e2eaf1]">
              <div className="flex items-start gap-3 text-left">
                <ShieldCheck className="w-5 h-5 text-[#496801] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#54626d] font-medium">
                  Remember, our staff will never ask for your PIN via email,
                  SMS, or phone. Keep your financial details secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer Component --- */}
      <footer className="w-full bg-[#152832] text-[#b2c8d4]">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-bold text-white tracking-tight block">
              Financial Partner
            </span>
            <p className="text-[#708590]">
              © 2026 Financial Partner. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Security Guarantee
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
