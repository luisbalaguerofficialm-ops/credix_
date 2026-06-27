import React from "react";
import { Check, Mail, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TransactionStep from "../components/TransactionStep";

export default function SecondSepTransfer() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [narration, setNarration] = useState("");
  const [balance, setBalance] = useState(0);

  const handleContinue = () => {
    const existingData = JSON.parse(localStorage.getItem("transferData")) || {};

    localStorage.setItem(
      "transferData",
      JSON.stringify({
        ...existingData,
        amount,
        recipientEmail,
        narration,
      }),
    );

    navigate("/third-set-transfer");
  };
  const handleBack = () => {
    navigate("/first-step-transfer");
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans antialiased">
      {/* --- TopNavBar (Matches Step 1 Global Design Architecture) --- */}

      {/* --- Main Content Area --- */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[620px]">
          {/* Header Title Section Context */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-8">
              Transfer Money
            </h1>

            {/* Progress Stepper Tracking Indicator */}
          </div>

          {/* Core Transfer Form Card Context Layout */}
          <div className="bg-white border border-[#bfc8cf] rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Amount Transferred Input Area */}
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155]"
                  htmlFor="amount"
                >
                  Amount ($)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-[#40484e] font-bold text-lg">$</span>
                  </div>
                  <input
                    type="number"
                    id="amount"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-slate-50/50 h-14 pl-9 pr-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-xl font-bold tracking-tight text-[#00516f] placeholder:text-[#bfc8cf]"
                  />
                </div>
                <p className="text-xs text-[#54626d] font-medium pl-1">
                  Available Balance: Available Balance: $
                  {balance.toLocaleString()}
                </p>
              </div>

              {/* Recipient Electronic Mail Notification Address */}
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155]"
                  htmlFor="email"
                >
                  Recipient Email
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full h-12 pl-12 pr-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Optional Narration / Reference Subtext Input Field */}
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155]"
                  htmlFor="narration"
                >
                  Narration / Description
                </label>
                <textarea
                  id="narration"
                  rows={3}
                  value={narration}
                  onChange={(e) => setNarration(e.target.value)}
                  placeholder="What is this transfer for?"
                  className="w-full p-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium resize-none"
                />
              </div>

              {/* Form Action Controls Trigger Group */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <button
                  onClick={handleBack}
                  type="button"
                  className="w-full sm:w-1/3 order-2 sm:order-1 h-12 font-semibold text-sm text-[#40484e] border border-[#bfc8cf] rounded-xl hover:bg-slate-100 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  type="submit"
                  className="w-full sm:w-2/3 order-1 sm:order-2 h-12 font-semibold text-sm bg-[#00516f] text-white rounded-xl shadow-sm hover:bg-[#003a52] transition-all"
                >
                  Continue to Review
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Security Cryptographic Warning Notice */}
          <div className="mt-8 flex gap-3 p-4 bg-[#e5f6ff] rounded-xl border border-[#00516f]/10">
            <ShieldAlert className="w-5 h-5 text-[#006a91] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-[#40484e] font-medium">
              Your transaction is protected by bank-grade encryption. Nexus Bank
              will never ask for your password or PIN via email.
            </p>
          </div>
        </div>
      </main>

      {/* --- Footer Component Block --- */}
      <footer className="w-full bg-[#1c333d] text-white mt-auto">
        <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-3">
            <div className="text-xl font-bold tracking-tight">Nexus Bank</div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-medium">
              Secure, intelligent banking for the modern age. Elevate your
              financial future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex flex-col space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Company
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Support
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Security
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Legal copyright footer base metadata line */}
        <div className="w-full bg-[#15272e] py-4 px-4 text-center border-t border-white/5">
          <p className="text-[11px] text-slate-400 font-medium">
            © 2026 Credit union Bank. Member FDIC. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
