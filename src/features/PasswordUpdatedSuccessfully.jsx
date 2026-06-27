import React from "react";
import { ShieldCheck, HelpCircle, X, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PasswordUpdatedSuccessfully() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/user-dashboard");
  };

  const handleBackToSettings = () => {
    navigate("/profile-settings");
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans antialiased relative">
      {/* --- Top Utility Navigation --- */}
      <header className="w-full bg-[#f3faff] border-b border-[#e2eaf1] z-50">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16">
          <div className="text-xl font-bold text-[#00516f] tracking-tight">
            Financial Partner
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-[#00516f] hover:bg-[#e6f4fa] p-2 rounded-full transition-colors flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="text-[#40484e] hover:bg-[#e6f4fa] p-2 rounded-full transition-colors flex items-center justify-center">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* --- Main Content Canvas --- */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 z-10">
        <div className="max-w-xl w-full text-center bg-white p-8 md:p-12 rounded-3xl border border-[#e2eaf1] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          {/* --- Success Badge Icon Layout --- */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#cbf274] text-[#496801]">
            <ShieldCheck className="w-12 h-12 stroke-[2.25]" />
          </div>

          {/* --- Content Header Block --- */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#001f29] tracking-tight mb-4 max-w-sm mx-auto leading-tight">
            Password Updated Successfully
          </h1>
          <p className="text-sm md:text-base text-[#40484e] font-medium mb-10 max-w-xs mx-auto">
            Your account is now secure with your new password.
          </p>

          {/* --- Action Buttons Layout --- */}
          <div className="space-y-3 max-w-md mx-auto">
            <button
              onClick={handleBackToSettings}
              className="w-full py-3 px-8 bg-[#00516f] hover:bg-[#003b54] text-white font-semibold text-sm rounded-xl transition-all active:scale-[0.99] shadow-sm"
            >
              Back to Security Settings
            </button>
            <button
              onClick={handleGoToDashboard}
              className="w-full py-3 px-8 bg-white border border-[#c2cbd4] text-[#00516f] hover:bg-[#e6f4fa] hover:border-[#00516f] font-semibold text-sm rounded-xl transition-all active:scale-[0.99]"
            >
              Go to Dashboard
            </button>
          </div>

          {/* --- Bottom Ambient Watermark Indicator --- */}
          <div className="mt-12 flex justify-center text-[#1c2024] opacity-[0.06]">
            <LockKeyhole className="w-24 h-24 stroke-[1.5]" />
          </div>
        </div>
      </main>

      {/* --- Success Feedback Atmospheric Backdrop Gradients --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[#c6ed7e]/15 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-[#006a91]/8 blur-[130px] rounded-full"></div>
      </div>

      {/* --- Footer Core segment --- */}
      <footer className="w-full bg-[#152832] text-[#b2c8d4] mt-auto z-10">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-base font-bold text-white tracking-tight mb-2 md:mb-0">
            Financial Partner
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-2 md:mb-0">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Security Guarantee
            </a>
          </div>
          <div className="text-[#708590] text-center md:text-right">
            © 2026 Financial Partner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
