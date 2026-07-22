import React from "react";
import { Mail, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SecondSepTransfer() {
  const navigate = useNavigate();
  const [transferType, setTransferType] = useState("");
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
        transferType,
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
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* --- Main Content Area --- */}
      <main className="flex-grow flex items-start sm:items-center justify-center py-5 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[620px]">
          {/* Header */}
          <div className="mb-5 sm:mb-8 text-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Transfer Money
            </h1>
          </div>

          {/* Card */}
          <div className="bg-white border border-[#bfc8cf] rounded-xl sm:rounded-2xl p-4 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Transfer Type */}
              <div className="space-y-2">
                <label
                  htmlFor="transferType"
                  className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#334155]"
                >
                  Transfer Type
                </label>

                <select
                  id="transferType"
                  value={transferType}
                  onChange={(e) => setTransferType(e.target.value)}
                  className="w-full h-12 sm:h-14 px-4 border border-[#bfc8cf] rounded-xl bg-white text-sm font-medium text-[#00516f] focus:outline-none focus:ring-2 focus:ring-[#00516f]"
                >
                  <option value="">choose a method</option>
                  <option value="Domestic">Domestic Transfer</option>
                  <option value="International">International Transfer</option>
                  <option value="Wire">Wire Transfer</option>
                </select>

                <p className="text-[11px] text-[#64748b]">
                  Select the type of transfer you want to perform.
                </p>
              </div>
              {/* Amount */}
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#334155]"
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
                    className="w-full h-12 sm:h-14 pl-9 pr-4 bg-slate-50 border border-[#bfc8cf] rounded-xl text-lg sm:text-xl font-bold text-[#00516f] placeholder:text-[#bfc8cf] focus:outline-none focus:ring-2 focus:ring-[#00516f]"
                  />
                </div>

                <p className="text-[11px] sm:text-xs text-[#54626d] font-medium">
                  Available Balance: ${balance.toLocaleString()}
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#334155]"
                >
                  Recipient Email
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                    <Mail className="w-5 h-5" />
                  </span>

                  <input
                    type="email"
                    id="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full h-12 pl-12 pr-4 border border-[#bfc8cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00516f]"
                  />
                </div>
              </div>

              {/* Narration */}
              <div className="space-y-2">
                <label
                  htmlFor="narration"
                  className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#334155]"
                >
                  Narration / Description
                </label>

                <textarea
                  id="narration"
                  rows={4}
                  value={narration}
                  onChange={(e) => setNarration(e.target.value)}
                  placeholder="What is this transfer for?"
                  className="w-full p-4 border border-[#bfc8cf] rounded-xl resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[#00516f]"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full sm:w-1/3 h-12 border border-[#bfc8cf] rounded-xl font-semibold text-[#40484e] hover:bg-slate-100 transition"
                >
                  Back
                </button>

                <button
                  type="submit"
                  onClick={handleContinue}
                  className="w-full sm:w-2/3 h-12 rounded-xl bg-[#00516f] text-white font-semibold hover:bg-[#003a52] transition"
                >
                  Continue to Review
                </button>
              </div>
            </form>
          </div>

          {/* Security Notice */}
          <div className="mt-5 sm:mt-8 flex items-start gap-3 p-4 bg-[#e5f6ff] rounded-xl border border-[#00516f]/10">
            <ShieldAlert className="w-5 h-5 text-[#006a91] shrink-0 mt-1" />

            <p className="text-[12px] sm:text-xs leading-relaxed text-[#40484e] font-medium">
              Your transaction is protected by bank-grade encryption. Nexus Bank
              will never ask for your password or PIN via email.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1c333d] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* Left */}
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-xl font-bold">Nexus Bank</h2>

            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto md:mx-0">
              Secure, intelligent banking for the modern age. Elevate your
              financial future.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Company
              </h3>

              <div className="flex flex-col gap-2 text-xs">
                <a href="#" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </a>

                <a href="#" className="text-slate-300 hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Support
              </h3>

              <div className="flex flex-col gap-2 text-xs">
                <a href="#" className="text-slate-300 hover:text-white">
                  Security
                </a>

                <a href="#" className="text-slate-300 hover:text-white">
                  Help Center
                </a>

                <a href="#" className="text-slate-300 hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 bg-[#15272e] py-4 px-4 text-center">
          <p className="text-[11px] text-slate-400">
            © 2026 America Bank. Member FDIC. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
