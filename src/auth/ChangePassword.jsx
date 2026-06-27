import React, { useState } from "react";
import {
  ArrowLeft,
  HelpCircle,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  // Input Visibility States
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Form Field Value States
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Evaluates simple mock metric ranges matching standard visual layouts
  const getStrengthMetric = (val) => {
    if (!val) return { label: "Weak", barClass: "w-[10%] bg-[#ba1a1a]" };
    if (val.length < 6)
      return { label: "Weak", barClass: "w-[25%] bg-[#ba1a1a]" };
    if (val.length < 10)
      return { label: "Medium", barClass: "w-[60%] bg-amber-500" };
    return { label: "Strong", barClass: "w-full bg-[#496801]" };
  };

  const strength = getStrengthMetric(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Perform standard state mutation or authentication endpoints dispatch here
  };
  const handlePasswordChange = () => {
    navigate("/password-updated-successfully");
  };
  return (
    <div className="bg-[#f3faff] text-[#001f29] font-sans antialiased min-h-screen flex flex-col pt-16">
      {/* --- TopAppBar Header Segment --- */}
      <header className="bg-white fixed top-0 left-0 right-0 h-16 border-b border-[#c2cbd4] shadow-sm z-50 transition-colors">
        <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#40484e] hover:text-[#00516f] transition-all group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Settings</span>
            </button>
            <div className="h-5 w-px bg-[#bfc8cf] mx-4" />
            <span className="text-xl font-bold text-[#003b54] tracking-tight">
              Lumina Bank
            </span>
          </div>
          <button
            type="button"
            className="text-[#00516f] hover:bg-[#e6f4fa] p-2 rounded-full transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* --- Main Content Layout --- */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full">
          {/* Section Dynamic Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#001f29] tracking-tight mb-2">
              Change Password
            </h1>
            <p className="text-sm md:text-base text-[#54626d]">
              Keep your account secure with a strong, unique password.
            </p>
          </div>

          {/* Central Security Card Canvas */}
          <div className="bg-white rounded-2xl border border-[#e2eaf1] shadow-[0_4px_25px_rgba(0,0,0,0.01)] overflow-hidden p-6 sm:p-10 mb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Current Password */}
              <div className="space-y-1.5">
                <label
                  className="block text-sm font-semibold text-[#001f29]"
                  htmlFor="current_password"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    id="current_password"
                    type={showCurrent ? "text" : "password"}
                    placeholder="Enter current password"
                    className="w-full h-11 px-4 pr-11 rounded-xl border border-[#a0aab2] focus:border-[#00516f] focus:ring-1 focus:ring-[#00516f] outline-none text-sm transition-all bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#707e8a] hover:text-[#00516f] p-1 rounded-full transition-colors"
                  >
                    {showCurrent ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Field 2: New Password Layout */}
              <div className="space-y-1.5">
                <label
                  className="block text-sm font-semibold text-[#001f29]"
                  htmlFor="new_password"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="new_password"
                    type={showNew ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full h-11 px-4 pr-11 rounded-xl border border-[#a0aab2] focus:border-[#00516f] focus:ring-1 focus:ring-[#00516f] outline-none text-sm transition-all bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#707e8a] hover:text-[#00516f] p-1 rounded-full transition-colors"
                  >
                    {showNew ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Visual Real-time Password Strength Segment */}
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#54626d]">
                      Strength: {strength.label}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#e6f4fa] rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strength.barClass}`}
                    />
                  </div>
                </div>
              </div>

              {/* Field 3: Confirm Password Input */}
              <div className="space-y-1.5">
                <label
                  className="block text-sm font-semibold text-[#001f29]"
                  htmlFor="confirm_password"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirm_password"
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full h-11 px-4 pr-11 rounded-xl border border-[#a0aab2] focus:border-[#00516f] focus:ring-1 focus:ring-[#00516f] outline-none text-sm transition-all bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#707e8a] hover:text-[#00516f] p-1 rounded-full transition-colors"
                  >
                    {showConfirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Requirements Informational Box Block */}
              <div className="bg-[#edf7fd] p-5 rounded-xl border border-[#c4e7ff] flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#00516f] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#00212f] tracking-wide uppercase">
                    Password Requirements
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#3a4852] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00516f] shrink-0" />
                      <span>At least 8 characters long</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00516f] shrink-0" />
                      <span>
                        Include a mix of uppercase and lowercase letters
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00516f] shrink-0" />
                      <span>Use at least one number or special character</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Structured Action Footers */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handlePasswordChange}
                  type="submit"
                  className="w-full bg-[#00516f] hover:bg-[#003b54] text-white font-semibold text-sm py-3 px-6 rounded-xl transition-all active:scale-[0.99] shadow-sm"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="w-full bg-white border border-[#c2cbd4] text-[#54626d] hover:bg-gray-50 font-semibold text-sm py-3 px-6 rounded-xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* --- Secondary Encryption Disclaimer Block --- */}
          <div className="p-5 bg-white rounded-2xl border border-[#e2eaf1] shadow-[0_4px_20px_rgba(0,0,0,0.005)] flex items-center gap-5">
            <div className="w-12 h-12 shrink-0 bg-[#cbf274] rounded-xl flex items-center justify-center text-[#496801]">
              <LockKeyhole className="w-5 h-5 stroke-[2.25]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-[#001f29]">
                Enhanced Security
              </h4>
              <p className="text-xs text-[#54626d] leading-relaxed">
                Lumina Bank uses end-to-end encryption to protect your
                credentials. We recommend updating your password every 90 days.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* --- Global System Footer Section --- */}
      <footer className="w-full bg-[#152832] text-[#b2c8d4] mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-bold text-white tracking-tight block">
              Lumina Bank
            </span>
            <p className="text-[#708590]">
              © 2026 Lumina Financial Group. Member FDIC. Equal Housing Lender.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
