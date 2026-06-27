import React from "react";

export default function DepositCheck() {
  return (
    <div className="bg-[#F4F9FC] text-[#001F2A] font-sans min-h-screen flex flex-col">
      {/* Top Header Navigation Line Placeholder (Matches App Global Flow) */}
      <div className="w-full bg-white border-b border-[#E2E8F0] px-6 py-3 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <span className="font-bold text-[#004B6E] text-lg">
            Credit Union Internal
          </span>
          <nav className="hidden md:flex gap-4 text-[#556370]">
            <a href="#" className="hover:text-[#004B6E]">
              Dashboard
            </a>
            <a
              href="#"
              className="text-[#004B6E] font-semibold border-b-2 border-[#004B6E] pb-3 pt-1"
            >
              Accounts
            </a>
            <a href="#" className="hover:text-[#004B6E]">
              Support
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <svg
            className="w-5 h-5 text-[#556370]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.07 6.07 0 00-1-3.5M9 17v1a3 3 0 006 0v-1M9 17H4l1.405-1.405A2.032 2.032 0 005 14.158V11a6.07 6.07 0 011-3.5m7-3.5a3.37 3.37 0 11-6.74 0 3.37 3.37 0 016.74 0zM3 20h18M12 4v1"
            />
          </svg>
          <div className="w-8 h-8 rounded-full bg-[#CBD5E1] overflow-hidden">
            <div className="w-full h-full bg-[#004B6E]" />
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] w-full mx-auto px-6 py-10 flex-grow">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#004B6E] mb-2">
            Deposit Check
          </h1>
          <p className="text-[#556370] text-sm">
            Securely deposit your personal or business checks from your
            computer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Deposit Form & History */}
          <div className="lg:col-span-8 space-y-6">
            {/* Deposit Form Card */}
            <section className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h2 className="text-lg font-bold text-[#1C3540] mb-6">
                Enter Deposit Details
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-[#556370] uppercase tracking-wider mb-2">
                      Deposit To
                    </label>
                    <div className="relative">
                      <select className="w-full bg-white border border-[#D1DBE0] rounded-lg p-3.5 text-sm text-[#002230] outline-none appearance-none cursor-pointer pr-10 focus:border-[#004B6E]">
                        <option>Business Checking (...4829)</option>
                        <option>Corporate Savings (...1102)</option>
                        <option>Payroll Reserve (...9934)</option>
                      </select>
                      <svg
                        className="w-4 h-4 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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

                  <div>
                    <label className="block text-[10px] font-bold text-[#556370] uppercase tracking-wider mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096] text-sm font-medium">
                        $
                      </span>
                      <input
                        className="w-full bg-white border border-[#D1DBE0] rounded-lg py-3.5 pl-8 pr-4 text-sm text-[#002230] outline-none placeholder-[#A0AEC0] focus:border-[#004B6E]"
                        placeholder="0.00"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Check Image Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Front of Check */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#556370]">
                      Front of Check
                    </span>
                    <div className="border-2 border-dashed border-[#CBD5E1] bg-white rounded-xl h-44 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8FAFC] transition-colors p-4 text-center">
                      <svg
                        className="w-8 h-8 text-[#004B6E] mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5h.008v.008H16.5V10.5z"
                          strokeWidth="2"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        />
                      </svg>
                      <span className="text-sm font-bold text-[#002230]">
                        Click to upload front image
                      </span>
                      <p className="text-xs text-[#718096] mt-1 max-w-[200px]">
                        Ensure all corners are visible and lighting is clear.
                      </p>
                    </div>
                  </div>

                  {/* Back of Check */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#556370]">
                      Back of Check (Endorsed)
                    </span>
                    <div className="border-2 border-dashed border-[#CBD5E1] bg-white rounded-xl h-44 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8FAFC] transition-colors p-4 text-center">
                      <svg
                        className="w-8 h-8 text-[#004B6E] mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                      <span className="text-sm font-bold text-[#002230]">
                        Click to upload back image
                      </span>
                      <p className="text-xs text-[#718096] mt-1 max-w-[200px]">
                        Must be endorsed with "For Mobile Deposit Only".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    className="bg-[#004B6E] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#003853] transition-colors shadow-sm"
                    type="submit"
                  >
                    Submit Deposit Request
                  </button>
                </div>
              </form>
            </section>

            {/* Deposit History Table Section */}
            <section className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#E2E8F0] flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#004B6E]">
                  Deposit History
                </h2>
                <button className="text-[#004B6E] font-bold text-xs flex items-center gap-0.5 hover:underline">
                  View All <span className="text-base leading-none">›</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EDF6FA] text-[#556370] text-xs font-semibold">
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Date
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Account
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Amount
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0] text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-sm text-[#002230]">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">Oct 24, 2023</td>
                      <td className="px-6 py-4 font-medium text-[#556370]">
                        ...4829
                      </td>
                      <td className="px-6 py-4 font-bold text-[#004B6E]">
                        $1,250.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#E8F8F5] text-[#117864] text-[10px] font-bold border border-[#A3E4D7]">
                          <span className="w-1 h-1 rounded-full bg-[#117864]"></span>{" "}
                          Cleared
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#718096] hover:text-[#004B6E] mx-auto">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">Oct 26, 2023</td>
                      <td className="px-6 py-4 font-medium text-[#556370]">
                        ...4829
                      </td>
                      <td className="px-6 py-4 font-bold text-[#004B6E]">
                        $450.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#EBF5FB] text-[#2980B9] text-[10px] font-bold border border-[#AED6F1]">
                          <span className="w-1 h-1 rounded-full bg-[#2980B9]"></span>{" "}
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#718096] hover:text-[#004B6E] mx-auto">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">Oct 26, 2023</td>
                      <td className="px-6 py-4 font-medium text-[#556370]">
                        ...1102
                      </td>
                      <td className="px-6 py-4 font-bold text-[#004B6E]">
                        $2,100.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#EBF5FB] text-[#2980B9] text-[10px] font-bold border border-[#AED6F1]">
                          <span className="w-1 h-1 rounded-full bg-[#2980B9]"></span>{" "}
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#718096] hover:text-[#004B6E] mx-auto">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column: Instructions & QR Mobile Framework */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mobile Scan Promotion Section */}
            <section className="bg-[#1C3540] p-6 rounded-xl text-white shadow-sm text-center relative overflow-hidden">
              <h3 className="text-lg font-bold mb-3">Prefer Mobile?</h3>
              <p className="text-xs text-[#BCE6FF] opacity-90 mb-6 leading-relaxed">
                Scan this code with your smartphone to continue this deposit on
                the FinCorp mobile app for a faster capture experience.
              </p>

              {/* Minimal Mock QR Code Area Box */}
              <div className="bg-white p-4 rounded-xl w-40 h-40 mx-auto flex items-center justify-center border-4 border-[#12252E] shadow-sm">
                <div className="w-32 h-32 bg-[#E2E8F0] rounded flex flex-col items-center justify-center text-black p-2 border-2 border-black relative">
                  {/* Styled Nested Box Structure Imitating Functional Banking Layout Elements */}
                  <div className="w-full h-full border-4 border-black relative bg-white flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#004B6E] rounded-md shadow-sm border border-white flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D2FA82]">
                <span className="w-2 h-2 rounded-full bg-[#D2FA82] animate-pulse"></span>
                Secure Mobile Sync Active
              </div>
            </section>

            {/* Instruction Steps Area Block */}
            <section className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-md font-bold text-[#1C3540] mb-6">
                Instructions
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Endorse your check
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Sign the back and write "For Mobile Deposit Only" below
                      your signature.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Capture Front & Back
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Upload high-resolution scans or photos. JPG or PNG files
                      accepted up to 10MB.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Keep the check
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Store the physical check securely for 14 days before
                      shredding it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitations Notice Container banner */}
              <div className="mt-8 p-4 bg-[#EDF6FA] border border-[#D0E3ED] rounded-xl flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#004B6E] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-xs text-[#556370] leading-normal">
                  <strong className="text-[#004B6E] block font-bold mb-0.5">
                    Limits & Clearing
                  </strong>
                  Standard daily limit is $5,000.00. Funds are typically
                  available within 1-2 business days pending verification.
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Global Footer Block */}
      <footer className="w-full py-8 mt-auto bg-[#1C3540] text-white border-t border-[#12252E]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-1">
            <span className="font-bold text-lg">FinCorp Global</span>
            <p className="text-xs text-[#BCE6FF] opacity-70">
              Empowering growth with secure, stable, and clear financial
              solutions for individuals and enterprises worldwide.
            </p>
            <p className="text-[11px] text-[#BCE6FF] opacity-50 pt-2">
              © 2026 Banking Solutions. Internal Use Only.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-xs text-[#BCE6FF] opacity-80">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Security Standards
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Compliance
            </a>
            <a className="hover:text-white transition-colors" href="#">
              System Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
