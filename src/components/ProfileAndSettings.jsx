import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileAndSettings() {
  const navigate = useNavigate();

  const handelChangePransactionPin = () => {
    navigate("/change-transaction-pin");
  };

  const handelChangePassword = () => {
    navigate("/change-password");
  };

  return (
    <div className="bg-[#F4F8FA] text-[#001F2A] text-left font-sans min-h-screen flex flex-col">
      {/* Main Container */}
      <div className="flex-grow w-full max-w-[1240px] mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#004B6E] mb-2">
            Settings & Security
          </h1>
          <p className="text-sm text-[#556370] max-w-2xl">
            Manage your premium profile, update security preferences, and
            customize your banking experience.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main Panels Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Card: Personal Information */}
            <section className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0F4F8] pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#EDF6FA] flex items-center justify-center text-[#004B6E] flex-shrink-0">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001F2A]">
                      Personal Information
                    </h3>
                    <p className="text-xs text-[#556370]">
                      Update your account details and contact info
                    </p>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 border bg-[#002230] border-[#CBD5E1] rounded-lg text-xs font-bold text-[#ffffff] hover:bg-[#023146] transition-colors self-start sm:self-center">
                  <svg
                    className="w-4 h-4 text-[#ffffff]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Change Photo</span>
                </button>
              </div>

              {/* Form Input Layout Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    Full Name
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                    type="text"
                    defaultValue="Alex Rivera"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    Email Address
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                    type="email"
                    defaultValue="alex.rivera@premium-meridian.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    Account Type
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                    type="text"
                    defaultValue="Personal"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    User Name
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                    type="text"
                    defaultValue="alex_rivera"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#556370]">
                    State
                  </label>
                  <input
                    type="text"
                    defaultValue="Alabama"
                    className="w-full p-3 text-sm bg-[#F4F8FA] border border-[#D1DBE0] rounded-lg text-[#002230] outline-none focus:border-[#004B6E]"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#556370]">
                    Residential Address
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-[#EDF6FA] border border-[#D0E3ED] rounded-lg text-[#556370] outline-none"
                    type="text"
                    readOnly
                    defaultValue="123 Business Bay, Toronto, ON, Canada"
                  />
                </div>
              </div>
            </section>

            {/* Card: Security & Authentication */}
            <section className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 border-b border-[#F0F4F8] pb-4 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#004B6E] flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#001F2A]">
                  Security & Authentication
                </h3>
              </div>

              {/* Rows List */}
              <div className="divide-y divide-[#F0F4F8]">
                {/* Row 1 */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#001F2A]">
                      Account Password
                    </h4>
                    <p className="text-xs text-[#556370]">
                      Update your login credentials
                    </p>
                  </div>
                  <button
                    onClick={handelChangePassword}
                    className="px-4 py-2 border border-[#CBD5E1] text-[#004B6E] font-bold text-xs rounded-lg hover:bg-slate-50 transition-colors self-start sm:self-center"
                  >
                    Change Password
                  </button>
                </div>

                {/* Row 2 */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#001F2A]">
                      Password
                    </h4>
                    <p className="text-xs text-[#556370]">
                      Last changed 3 months ago
                    </p>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#001F2A]">
                      Transaction PIN
                    </h4>
                    <p className="text-xs text-[#556370]">
                      Manage your 4-digit secure transaction PIN
                    </p>
                  </div>
                  <button
                    onClick={handelChangePransactionPin}
                    className="px-4 py-2 border border-[#CBD5E1] text-[#004B6E] font-bold text-xs rounded-lg hover:bg-slate-50 transition-colors self-start sm:self-center"
                  >
                    Change Transaction PIN
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar Preferences Section */}
          <aside className="lg:col-span-4 space-y-6 w-full">
            {/* Preferences Panel Area */}
            <div className="bg-[#CEEBFB] border border-[#B1DDF6] rounded-xl p-5">
              <h3 className="text-[11px] font-bold text-[#004B6E] uppercase tracking-wider mb-5">
                Preferences
              </h3>

              <div className="space-y-5">
                {/* Dark Mode Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#002230]">
                    <svg
                      className="w-4 h-4 text-[#004B6E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <span>Dark Mode</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-[#A9D3EC] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004B6E]"></div>
                  </label>
                </div>

                {/* Push Alerts Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#002230]">
                    <svg
                      className="w-4 h-4 text-[#004B6E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.07 6.07 0 00-1-3.5M9 17v1a3 3 0 006 0v-1M9 17H4l1.405-1.405A2.032 2.032 0 005 14.158V11a6.07 6.07 0 011-3.5m7-3.5a3.37 3.37 0 11-6.74 0 3.37 3.37 0 016.74 0z"
                      />
                    </svg>
                    <span>Push Alerts</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-[#A9D3EC] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004B6E]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Exclusive Promo Area Panel */}
            <div className="relative overflow-hidden bg-[#152B35] rounded-xl p-6 text-white min-h-[160px] flex flex-col justify-end shadow-sm">
              {/* Geometric Grid Card Overlay Mockup Background */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#1C3A47] to-[#0A181F] transform translate-x-12 -translate-y-12 rotate-45 rounded-xl opacity-80 border border-[#2A4D5C] flex items-center justify-center p-4">
                <div className="w-full h-full border border-dashed border-[#3D6677] rounded-lg opacity-40" />
              </div>

              <div className="relative z-10 space-y-1">
                <h4 className="text-md font-bold">Grow Your Future</h4>
                <p className="text-xs text-[#BCE6FF] opacity-80 pb-3 leading-relaxed">
                  Explore our exclusive high-yield investment accounts designed
                  for premium members.
                </p>
                <a
                  className="text-[#D2FA82] text-xs font-bold flex items-center gap-1 hover:underline"
                  href="#"
                >
                  Learn More <span>→</span>
                </a>
              </div>
            </div>

            {/* Sticky Actions Trigger Section */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-[#004B6E] text-white font-bold text-sm py-3.5 rounded-xl shadow-sm hover:bg-[#003853] transition-colors">
                Save Changes
              </button>
              <button className="w-full bg-white border border-[#CBD5E1] text-[#556370] font-bold text-sm py-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                Discard Edits
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Global Application Footer */}
      <footer className="w-full py-8 bg-[#1A303B] text-white mt-12">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <span className="font-bold text-md"> Credit Union</span>
            <p className="text-xs text-[#BCE6FF] opacity-70">
              Secure banking for the modern age. Member-focused,
              community-driven.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#BCE6FF] opacity-80">
              <a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Security
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Legal Disclosures
              </a>
            </nav>
            <p className="text-[11px] text-[#BCE6FF] opacity-50 md:text-right">
              © 2026 Credit Union. Member NCUA. Equal Housing Lender.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
