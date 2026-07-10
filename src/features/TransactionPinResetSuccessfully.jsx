import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Shield, ArrowRight, Lock } from "lucide-react";

export default function TransactionPinResetSuccessfully() {
  const navigate = useNavigate();

  const handlefirsttransfer = () => {
    navigate("/first-step-transfer");
  };
  return (
    <div className="bg-[#f3faff] text-[#001f29] font-sans min-h-screen flex flex-col items-center justify-between select-none relative overflow-x-hidden">
      {/* Soft Background Radial Light Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#c4e7ff] opacity-20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-[#c9f081] opacity-15 rounded-full blur-[100px]"></div>
      </div>

      {/* Header Area */}
      <header className="w-full flex justify-center pt-12 pb-6 z-10">
        <span className="text-3xl font-bold text-[#004c66] tracking-tight">
          Credit Union
        </span>
      </header>

      {/* Main Content Card Canvas */}
      <main className="flex-grow flex items-center justify-center w-full max-w-xl px-4 py-6 z-10 my-auto">
        <div className="bg-white border border-[#d6e3ec] rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.02)] w-full p-10 md:p-12 text-center">
          {/* Success Icon Badge (Matching screen999.png green squircle layout) */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#c5e784] text-[#2d5214]">
              <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#001f29] tracking-tight leading-snug mb-5 max-w-md mx-auto">
            Transaction PIN Reset Successful
          </h1>

          {/* Description Paragraph */}
          <p className="text-[15px] text-[#4a5568] leading-relaxed max-w-[420px] mx-auto mb-8">
            Your new security PIN is now active. You can immediately use it to
            authorize transfers, payments, and account changes.
          </p>

          {/* Content Separation Line */}
          <div className="w-full h-[1px] bg-[#e2e8f0] mb-8"></div>

          {/* Security Recommendation Block */}
          <div className="flex items-start gap-4 text-left mb-8 bg-[#e5f6ff] p-5 rounded-xl border border-[#cbe7f7]">
            <Shield className="w-5 h-5 text-[#004c66] shrink-0 mt-0.5 stroke-[2.2]" />
            <div>
              <h3 className="text-sm font-bold text-[#1e293b] mb-1">
                Security Recommendation
              </h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                We've sent a confirmation email to your registered address. If
                you did not perform this action, please lock your account
                immediately.
              </p>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handlefirsttransfer}
              className="bg-[#004c66] hover:bg-[#003d52] text-white font-semibold text-base py-3.5 px-8 rounded-xl transition-all active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm"
              type="button"
            >
              <span>Transfer Funds</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="w-full bg-[#1e3a45] text-white py-6 px-8 z-10 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide">
          {/* Left Security Badge */}
          <div className="flex items-center gap-2 text-slate-200">
            <Lock className="w-4 h-4 text-slate-300 stroke-[2.5]" />
            <span>SECURE TRANSACTION ENVIRONMENT</span>
          </div>

          {/* Right Layout Info */}
          <div className="flex items-center gap-4 text-slate-300">
            <span>© 2026 TrustMark Credit Union</span>
            <div className="h-3 w-[1px] bg-slate-500 opacity-50"></div>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
