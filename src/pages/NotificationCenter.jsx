import React from "react";
import {
  Inbox,
  Shield,
  FileText,
  Bell,
  User,
  Lock,
  Smartphone,
  RefreshCw,
  Sliders,
  CheckCircle2,
  MoreVertical,
  CreditCard,
  Laptop,
  Wallet,
  Sparkles,
  CheckSquare,
  Trash2,
} from "lucide-react";

export default function NotificationCenter() {
  return (
    <div className="bg-[#f4f9fc] min-h-screen text-left font-sans text-[#1c2024] antialiased">
      {/* --- Global Header Navigation --- */}

      {/* --- Main Workspace Wrapper --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* --- Section Header Row --- */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00212f] tracking-tight">
              Notification Center
            </h1>
            <p className="text-[#54626d] text-sm mt-1">
              Stay updated with your account activity, security alerts, and the
              latest updates from Meridian.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
            <button className="px-4 py-2 border border-[#00516f] text-[#00516f] font-semibold text-xs uppercase tracking-wider rounded bg-white hover:bg-[#e6f4fa] transition-colors flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Mark all as read
            </button>
            <button className="px-4 py-2 text-[#54626d] hover:text-[#00212f] font-semibold text-xs uppercase tracking-wider rounded flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-red-500" />
              Clear all
            </button>
          </div>
        </div>

        {/* --- Layout Context Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* --- Navigation Categories Workspace --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-[#e2eaf1] p-4 shadow-sm">
              <h2 className="text-[11px] font-bold text-[#54626d] uppercase tracking-wider mb-3 px-1">
                Categories
              </h2>
              <nav className="space-y-1">
                <button className="w-full flex items-center justify-between px-3 py-2.5 bg-[#e3f4fc] rounded-lg text-[#003b54] font-semibold text-sm transition-all text-left">
                  <div className="flex items-center gap-3">
                    <Inbox className="w-4 h-4 text-[#003b54]" />
                    <span>All Notifications</span>
                  </div>
                  <span className="bg-[#003b54] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    12
                  </span>
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2.5 text-[#54626d] hover:bg-[#f4f9fc] rounded-lg text-sm transition-all text-left">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-[#54626d]" />
                    <span>Security</span>
                  </div>
                  <span className="bg-[#ba1a1a] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    2
                  </span>
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2.5 text-[#54626d] hover:bg-[#f4f9fc] rounded-lg text-sm transition-all text-left">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#54626d]" />
                    <span>Activity</span>
                  </div>
                  <span className="text-[#1c2024] font-bold text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                    8
                  </span>
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2.5 text-[#54626d] hover:bg-[#f4f9fc] rounded-lg text-sm transition-all text-left">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#54626d]" />
                    <span>System Updates</span>
                  </div>
                  <span className="text-[#1c2024] font-bold text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                    2
                  </span>
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-[#e2eaf1]">
                <h2 className="text-[11px] font-bold text-[#54626d] uppercase tracking-wider mb-4 px-1">
                  Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-sm text-[#3a4852] font-medium">
                      Email Alerts
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#496801]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="text-sm text-[#3a4852] font-medium">
                      Push Notifications
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#496801]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Interactive Notifications List Workspace --- */}
          <div className="lg:col-span-3 space-y-8">
            {/* --- Today Segment --- */}
            <div>
              <h3 className="text-xs font-bold text-[#54626d] uppercase tracking-wider mb-4 px-1">
                Today
              </h3>
              <div className="space-y-3">
                {/* PIN Changed */}
                <div className="bg-[#eef7fc] border-l-4 border-[#ba1a1a] p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group">
                  <div className="bg-[#ffdad6] text-[#ba1a1a] p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-bold text-[#00212f] text-sm flex items-center gap-2">
                        Security Alert: PIN Changed
                        <span className="w-2 h-2 bg-[#00668b] rounded-full inline-block shrink-0"></span>
                      </h4>
                      <span className="text-xs text-[#707e8a] whitespace-nowrap">
                        2 mins ago
                      </span>
                    </div>
                    <p className="text-sm text-[#3a4852] leading-relaxed">
                      Your debit card PIN for account ending in *4299 was
                      successfully changed. If you did not make this change,
                      please contact us immediately.
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <button className="text-xs font-bold text-[#ba1a1a] uppercase tracking-wider hover:underline">
                        Report Issue
                      </button>
                      <span className="text-[#c2cbd4] text-xs">•</span>
                      <button className="text-xs font-bold text-[#00516f] uppercase tracking-wider hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                  <button className="text-[#54626d] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50 shrink-0 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Payment Reminder */}
                <div className="bg-[#eef7fc] border-l-4 border-[#00516f] p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group">
                  <div className="bg-[#00516f] text-white p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-bold text-[#00212f] text-sm flex items-center gap-2">
                        Upcoming Payment Reminder
                        <span className="w-2 h-2 bg-[#00668b] rounded-full inline-block shrink-0"></span>
                      </h4>
                      <span className="text-xs text-[#707e8a] whitespace-nowrap">
                        1 hour ago
                      </span>
                    </div>
                    <p className="text-sm text-[#3a4852] leading-relaxed">
                      A scheduled payment of $1,250.00 to "Home Mortgage
                      Services" is due tomorrow. Please ensure sufficient funds
                      are available.
                    </p>
                    <div className="mt-3">
                      <button className="text-xs font-bold text-[#00516f] uppercase tracking-wider hover:underline">
                        Manage Transfers
                      </button>
                    </div>
                  </div>
                  <button className="text-[#54626d] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50 shrink-0 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Device Login */}
                <div className="bg-white border-l-4 border-[#c2cbd4] p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group">
                  <div className="bg-[#f0f4f8] text-[#54626d] p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-semibold text-[#3a4852] text-sm">
                        New Device Login
                      </h4>
                      <span className="text-xs text-[#707e8a] whitespace-nowrap">
                        4 hours ago
                      </span>
                    </div>
                    <p className="text-sm text-[#54626d] leading-relaxed">
                      A new login was detected from a Chrome browser on Windows
                      11 (IP: 192.168.1.45) in Toronto, Canada.
                    </p>
                  </div>
                  <button className="text-[#54626d] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50 shrink-0 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- Yesterday Segment --- */}
            <div>
              <h3 className="text-xs font-bold text-[#54626d] uppercase tracking-wider mb-4 px-1">
                Yesterday
              </h3>
              <div className="space-y-3">
                {/* Direct Deposit */}
                <div className="bg-white border-l-4 border-[#c2cbd4] p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group">
                  <div className="bg-[#e8f3f8] text-[#00516f] p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-semibold text-[#3a4852] text-sm">
                        Direct Deposit Received
                      </h4>
                      <span className="text-xs text-[#707e8a] whitespace-nowrap">
                        Yesterday, 9:15 AM
                      </span>
                    </div>
                    <p className="text-sm text-[#54626d] leading-relaxed">
                      A direct deposit from "Global Tech Industries" for
                      $3,420.55 has been credited to your Premium Savings
                      account.
                    </p>
                  </div>
                  <button className="text-[#54626d] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50 shrink-0 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* System Update */}
                <div className="bg-white border-l-4 border-[#c2cbd4] p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group">
                  <div className="bg-[#f2f9e1] text-[#496801] p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="font-semibold text-[#3a4852] text-sm">
                        System Update: New Insights Tool
                      </h4>
                      <span className="text-xs text-[#707e8a] whitespace-nowrap">
                        Yesterday, 11:30 AM
                      </span>
                    </div>
                    <p className="text-sm text-[#54626d] leading-relaxed">
                      Check out our new Spending Insights tool to track your
                      monthly budget and save more effectively. Available now in
                      your dashboard.
                    </p>
                    <div className="mt-3">
                      <button className="text-xs font-bold text-[#496801] uppercase tracking-wider hover:underline">
                        Try Now
                      </button>
                    </div>
                  </div>
                  <button className="text-[#54626d] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50 shrink-0 flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- Pagination Trigger Area --- */}
            <div className="pt-4 flex justify-center">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#c2cbd4] rounded-full text-[#003b54] font-semibold text-sm shadow-sm hover:bg-[#e6f4fa] transition-colors">
                <RefreshCw className="w-4 h-4" />
                Load previous notifications
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- Promotional Pitch Split Section --- */}
      <section className="bg-[#1c3541] text-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-[40px] border-[8px] border-[#2d4957] overflow-hidden bg-[#152832] shadow-2xl">
              {/* Internal Mock Graphic Elements for the Smartphone Device */}
              <div className="p-4 space-y-4 pt-8">
                <div className="h-4 w-16 bg-[#2d4957] rounded mx-auto mb-6"></div>
                <div className="h-8 w-full bg-[#2d4957] rounded-lg"></div>
                <div className="h-28 w-full bg-[#2d4957] rounded-xl"></div>
                <div className="h-36 w-full bg-[#2d4957] rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Take Control of Your Security
              </h2>
              <p className="text-[#b2c8d4] text-base leading-relaxed">
                Customize your alert preferences to receive real-time
                notifications about logins, large transactions, and profile
                updates. Your safety is our priority.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#c4df9b] shrink-0 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Biometric Authentication
                  </h4>
                  <p className="text-[#b2c8d4] text-xs mt-1">
                    Enable FaceID or Fingerprint login for an extra layer of
                    security on mobile.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#c4df9b] shrink-0 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Custom Spending Alerts
                  </h4>
                  <p className="text-[#b2c8d4] text-xs mt-1">
                    Set thresholds for transactions to get instantly notified on
                    your phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer Base Global Segment --- */}
      <footer className="bg-[#152832] text-[#b2c8d4] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <span className="text-lg font-bold text-white tracking-tight">
              Meridian Credit Union
            </span>
            <p className="text-xs leading-relaxed max-w-sm">
              A reliable financial partner helping individuals and businesses
              grow through innovative banking solutions and security-first
              technology.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
              <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
              <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#c4df9b] uppercase tracking-wider">
                Resources
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold text-[#c4df9b] uppercase tracking-wider">
                Support
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Branch Locator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal Disclosures
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#112028] py-6 px-4 sm:px-6 lg:px-8 text-center md:text-left border-t border-white/5">
          <p className="max-w-7xl mx-auto text-[11px] text-[#708590]">
            © 2024 Meridian Credit Union. Member NCUA. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
