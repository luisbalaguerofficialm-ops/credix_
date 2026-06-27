import React, { useState } from "react";
import {
  ArrowLeft,
  HelpCircle,
  ShieldCheck,
  Bell,
  History,
  Info,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChangeTransactionPin() {
  const navigate = useNavigate();
  const handleTransactionPinChange = () => {
    navigate("/transaction-pin-updated");
  };

  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPin !== confirmPin) {
      alert("New PIN and Confirmation PIN do not match!");
      return;
    }
    if (newPin.length < 6) {
      alert("PIN must be exactly 6 digits.");
      return;
    }
    // Process PIN modification dispatch hooks safely here
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans antialiased pt-16">
      {/* --- TopAppBar Navigation --- */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-[#c2cbd4] shadow-sm z-50">
        <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#00516f] hover:text-[#003b54] transition-all group"
              aria-label="Back to Settings"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Settings</span>
            </button>
            <div className="h-5 w-px bg-[#bfc8cf] mx-4" />
            <span className="text-xl font-bold text-[#00516f] tracking-tight">
              Lumina Bank
            </span>
          </div>
          <button
            type="button"
            className="text-[#6c757d] hover:text-[#00516f] p-2 rounded-full transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* --- Main Content Canvas --- */}
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full">
          {/* Security Branding Header Block */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c5e8f8] text-[#00516f] mb-4 shadow-sm">
              <History className="w-6 h-6 stroke-[2.25] transform -rotate-45" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#001f29] tracking-tight mb-2">
              Change Transaction PIN
            </h1>
            <p className="text-sm text-[#54626d]">
              Update your 4-digit PIN to ensure your account remains secure.
            </p>
          </div>

          {/* Transaction Form Card Wrapper */}
          <div className="bg-white border border-[#e2eaf1] rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00516f]" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Current 6-Digit PIN */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-bold text-[#40484e]"
                  htmlFor="current-pin"
                >
                  Current 6-Digit PIN
                </label>
                <div className="relative">
                  <input
                    id="current-pin"
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="[0-9]*"
                    placeholder="••••••"
                    value={currentPin}
                    onChange={(e) =>
                      setCurrentPin(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full h-12 px-4 border border-[#a0aab2] rounded-xl focus:ring-1 focus:ring-[#00516f] focus:border-[#00516f] outline-none transition-all text-center text-xl font-bold tracking-[0.5em] bg-white placeholder:tracking-normal placeholder:font-normal"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <a
                      href="#"
                      className="text-xs font-bold text-[#00516f] hover:underline whitespace-nowrap"
                    >
                      Forgot PIN?
                    </a>
                  </div>
                </div>
              </div>

              {/* Grid Wrapper for New & Confirmation PINs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 2: New PIN Input */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-bold text-[#40484e]"
                    htmlFor="new-pin"
                  >
                    New 4-Digit PIN
                  </label>
                  <input
                    id="new-pin"
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="[0-9]*"
                    placeholder="••••"
                    value={newPin}
                    onChange={(e) =>
                      setNewPin(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full h-12 px-4 border border-[#a0aab2] rounded-xl focus:ring-1 focus:ring-[#00516f] focus:border-[#00516f] outline-none transition-all text-center text-xl font-bold tracking-[0.5em] bg-white placeholder:tracking-normal placeholder:font-normal"
                    required
                  />
                </div>

                {/* Field 3: Confirm PIN Input */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-bold text-[#40484e]"
                    htmlFor="confirm-pin"
                  >
                    Confirm New PIN
                  </label>
                  <input
                    id="confirm-pin"
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="[0-9]*"
                    placeholder="••••"
                    value={confirmPin}
                    onChange={(e) =>
                      setConfirmPin(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full h-12 px-4 border border-[#a0aab2] rounded-xl focus:ring-1 focus:ring-[#00516f] focus:border-[#00516f] outline-none transition-all text-center text-xl font-bold tracking-[0.5em] bg-white placeholder:tracking-normal placeholder:font-normal"
                    required
                  />
                </div>
              </div>

              {/* Security Advisory Alert Layout */}
              <div className="flex items-start gap-3 p-4 bg-[#edf7fd] rounded-xl border border-[#c4e7ff]">
                <Info className="w-4 h-4 text-[#00516f] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#40484e] font-medium">
                  Avoid using sequential numbers (123456) or repeating numbers
                  (111111). A strong PIN improves your safety during transfers
                  and payments.
                </p>
              </div>

              {/* Dynamic Action Interaction Blocks */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleTransactionPinChange}
                  type="submit"
                  className="w-full h-12 bg-[#00516f] hover:bg-[#003b54] text-white font-semibold text-sm rounded-xl transition-all active:scale-[0.99] shadow-sm flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
                <button
                  type="button"
                  className="w-full h-12 bg-transparent text-[#00516f] font-semibold text-sm rounded-xl hover:bg-[#e6f4fa] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* --- Bottom Auxiliary Feature Badges --- */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-2">
              <ShieldCheck className="w-5 h-5 text-[#496801] mb-2 stroke-[2]" />
              <h3 className="text-xs font-bold text-[#54626d]">
                Secure Encryption
              </h3>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <Bell className="w-5 h-5 text-[#496801] mb-2 stroke-[2]" />
              <h3 className="text-xs font-bold text-[#54626d]">
                Instant Alerts
              </h3>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <History className="w-5 h-5 text-[#496801] mb-2 stroke-[2]" />
              <h3 className="text-xs font-bold text-[#54626d]">Audit Logged</h3>
            </div>
          </div>
        </div>
      </main>

      {/* --- Lumina Bank Application Footer --- */}
      <footer className="bg-[#152832] text-[#b2c8d4] w-full mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-bold text-white tracking-tight block">
              Lumina Bank
            </span>
            <p className="text-[#708590]">
              © 2026 Lumina Financial Group. Member FDIC. Equal Housing Lender.
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
              Security Center
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Contact Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
