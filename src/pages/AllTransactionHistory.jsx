import React from "react";

import { Trash2 } from "lucide-react";

export default function AllTransactionHistory() {
  return (
    <div className="bg-[#F4F8FA] text-[#001F2A] text-left font-sans min-h-screen flex flex-col">
      {/* Main Container Wrapper */}
      <div className="flex-grow w-full max-w-[1240px] mx-auto px-6 py-10">
        {/* Upper Title Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#004B6E] mb-1">
              Transactions
            </h1>
            <p className="text-xs font-semibold text-[#556370]">
              Checking Account •••• 4829
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#CBD5E1] bg-white rounded-lg text-xs font-bold text-[#556370] hover:bg-slate-50 transition-colors self-start sm:self-center shadow-sm">
            <svg
              className="w-4 h-4 text-[#556370]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Export Statement</span>
          </button>
        </div>

        {/* Filter Configuration Controls */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 items-end">
            <div className="space-y-1.5 lg:col-span-3">
              <label className="text-xs font-bold text-[#556370]">
                Date Range
              </label>
              <div className="relative">
                <select className="w-full p-2.5 pl-9 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]">
                  <option>Last Month</option>
                  <option>Last Two Weeks</option>
                  <option>Last Week</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Year</option>
                  <option>Last Year</option>
                </select>
                <svg
                  className="w-4 h-4 text-[#556370] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <svg
                  className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-1.5 lg:col-span-2">
              <label className="text-xs font-bold text-[#556370]">Type</label>
              <div className="relative">
                <select className="w-full p-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]">
                  <option>All Types</option>
                  <option>Purchase</option>
                  <option>Deposit</option>
                  <option>Transfer</option>
                </select>
                <svg
                  className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-1.5 lg:col-span-2">
              <label className="text-xs font-bold text-[#556370]">
                Category
              </label>
              <div className="relative">
                <select className="w-full p-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Income</option>
                  <option>Utilities</option>
                  <option>Dining Out</option>
                </select>
                <svg
                  className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-1.5 lg:col-span-2">
              <label className="text-xs font-bold text-[#556370]">Status</label>
              <div className="relative">
                <select className="w-full p-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]">
                  <option>All Status</option>
                  <option>Successful</option>
                  <option>Failed</option>
                  <option>Pending</option>
                </select>
                <svg
                  className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-2 w-full">
              <button className="w-full bg-[#1A3A4A] hover:bg-[#132B37] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Transaction History Workspace Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#EDF6FA] border-b border-[#DCDFE4]">
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Description
                  </th>
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Type
                  </th>
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Category
                  </th>
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Status
                  </th>
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Amount
                  </th>
                  <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F4F8]">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-[#001F2A]">
                        Whole Foods Market
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                    Purchase
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#EAF5FA] text-[#3A6B85]">
                      Groceries
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6B1A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B1A]"></span>
                      <span>Successful</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#B02A2A]">
                    -$142.50
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#001F2A]">
                      Oct 24, 2024
                    </div>
                    <div className="text-[10px] text-[#8A99A8]">10:45 AM</div>
                  </td>

                  <button className="px-4 py-2 text-[#54626d] hover:text-[#00212f] font-semibold text-xs uppercase tracking-wider rounded flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-[#001F2A]">
                        Payroll Deposit
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                    Deposit
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#EBF6D7] text-[#557A12]">
                      Income
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6B1A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B1A]"></span>
                      <span>Successful</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#4A6B1A]">
                    +$4,250.00
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#001F2A]">
                      Oct 23, 2024
                    </div>
                    <div className="text-[10px] text-[#8A99A8]">02:15 PM</div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-[#001F2A]">
                        Evergreen Energy
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                    Transfer
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#E5F1F6] text-[#2F6880]">
                      Utilities
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#718096]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A0AEC0]"></span>
                      <span>Pending</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#556370]">
                    -$85.00
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#001F2A]">
                      Oct 22, 2024
                    </div>
                    <div className="text-[10px] text-[#8A99A8]">09:12 AM</div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-[#001F2A]">
                        The Coffee Bean
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                    Purchase
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#F3EBF6] text-[#7C4D8A]">
                      Dining Out
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B02A2A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B02A2A]"></span>
                      <span>Failed</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#B02A2A]">
                    -$12.75
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#001F2A]">
                      Oct 21, 2024
                    </div>
                    <div className="text-[10px] text-[#8A99A8]">11:30 PM</div>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-[#001F2A]">
                        Netflix Subscription
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                    Subscription
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#F6EBEB] text-[#9C4D4D]">
                      Entertainment
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6B1A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B1A]"></span>
                      <span>Successful</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#B02A2A]">
                    -$19.99
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#001F2A]">
                      Oct 20, 2024
                    </div>
                    <div className="text-[10px] text-[#8A99A8]">04:45 PM</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Pagination Navigation */}
          <div className="px-5 py-4 border-t border-[#E2E8F0] bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs font-semibold text-[#556370]">
              Showing 1 to 5 of 128 transactions
            </p>

            <div className="flex items-center gap-1.5">
              <button
                disabled
                className="p-1.5 rounded-md border border-[#E2E8F0] text-[#A0AEC0] cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="px-3 py-1 text-xs font-bold rounded-md bg-[#004B6E] text-white">
                1
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded-md text-[#556370] hover:bg-slate-100">
                2
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded-md text-[#556370] hover:bg-slate-100">
                3
              </button>
              <span className="px-1 text-xs text-[#A0AEC0]">...</span>
              <button className="px-3 py-1 text-xs font-semibold rounded-md text-[#556370] hover:bg-slate-100">
                26
              </button>

              <button className="p-1.5 rounded-md border border-[#E2E8F0] text-[#556370] hover:bg-slate-50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Informational Analytics Banner */}
        <section className="mt-8 relative overflow-hidden bg-[#152B35] rounded-xl p-6 text-white min-h-[160px] flex flex-col justify-end shadow-sm">
          {/* Decorative Graph Grid Mesh Overlay */}
          <div className="absolute top-0 right-0 w-80 h-full opacity-20 transform translate-x-10 pointer-events-none hidden md:block">
            <div className="w-full h-full border-b border-r border-dashed border-white/40 flex items-end p-4 gap-2">
              <div className="w-8 bg-white h-1/4 rounded-t-sm" />
              <div className="w-8 bg-white h-2/5 rounded-t-sm" />
              <div className="w-8 bg-white h-3/5 rounded-t-sm" />
              <div className="w-8 bg-white h-1/2 rounded-t-sm" />
              <div className="w-8 bg-white h-4/5 rounded-t-sm" />
            </div>
          </div>

          <div className="relative z-10 max-w-xl space-y-1">
            <h4 className="text-md font-bold">Maximize Your Savings</h4>
            <p className="text-xs text-[#BCE6FF] opacity-80 pb-3 leading-relaxed">
              Our high-interest savings accounts help your money grow faster.
              Speak with an advisor today.
            </p>
            <a
              className="text-[#D2FA82] text-xs font-bold flex items-center gap-1 hover:underline"
              href="#"
            >
              Learn More <span>→</span>
            </a>
          </div>
        </section>
      </div>

      {/* Global Application Footer */}
      <footer className="w-full py-8 bg-[#1A303B] text-white mt-12">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <span className="font-bold text-md">Meridian Credit Union</span>
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
              © 2024 Meridian Credit Union. Member NCUA. Equal Housing Lender.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
