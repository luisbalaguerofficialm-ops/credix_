import React from "react";

export default function PayBills() {
  return (
    <div className="bg-[#F4F9FC] text-[#001F2A] font-sans min-h-screen flex flex-col">
      {/* Main Content Canvas */}
      <main className="grow max-w-300 w-full mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#004B6E] mb-2">Pay Bills</h1>
          <p className="text-[#556370] text-base max-w-3xl">
            Manage your recurring expenses and one-time payments with total
            security and ease.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Quick Pay & New Payment */}
          <div className="lg:col-span-8 space-y-6">
            {/* Quick Pay Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C3540] mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#004B6E]"
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
                Quick Pay
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Biller Card: Electric */}
                <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-[#E3F2FD] text-[#004B6E] rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6"
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
                  <span className="text-xs font-semibold text-[#556370] uppercase tracking-wider mb-1">
                    Electric
                  </span>
                  <span className="text-2xl font-bold text-[#002230]">
                    $142.50
                  </span>
                  <button className="mt-4 text-[#004B6E] font-semibold text-sm flex items-center gap-1 hover:underline">
                    Pay Now <span className="text-xs">›</span>
                  </button>
                </div>

                {/* Biller Card: Internet */}
                <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-[#E3F2FD] text-[#004B6E] rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        strokeWidth="1.5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12m-9 0a9 9 0 1 1 18 0 a9 9 0 1 1 -18 0"
                        strokeWidth="0"
                      />
                      <path
                        d="M4.93 4.93a10 10 0 0 1 14.14 0M7.76 7.76a6 6 0 0 1 8.48 0M10.6 10.6a2 2 0 0 1 2.83 0"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#556370] uppercase tracking-wider mb-1">
                    Internet
                  </span>
                  <span className="text-2xl font-bold text-[#002230]">
                    $79.99
                  </span>
                  <button className="mt-4 text-[#004B6E] font-semibold text-sm flex items-center gap-1 hover:underline">
                    Pay Now <span className="text-xs">›</span>
                  </button>
                </div>

                {/* Biller Card: Insurance */}
                <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-[#E3F2FD] text-[#004B6E] rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-6 h-6"
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
                  <span className="text-xs font-semibold text-[#556370] uppercase tracking-wider mb-1">
                    Insurance
                  </span>
                  <span className="text-2xl font-bold text-[#002230]">
                    $210.00
                  </span>
                  <button className="mt-4 text-[#004B6E] font-semibold text-sm flex items-center gap-1 hover:underline">
                    Pay Now <span className="text-xs">›</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Payment Form Block */}
            <div className="space-y-4">
              {/* Select Container */}
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-4 flex justify-between items-center shadow-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider">
                    instant pay method
                  </span>

                  <span className="text-base text-[#001F2A] font-medium mt-1">
                    Credit / Debit Card
                  </span>
                </div>
              </div>

              {/* Main Card Dynamic Dropdown Input Frame */}
              <section className="bg-[#FFFFFF] rounded-xl p-8 border border-[#CCEFEF]">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#004B6E] flex items-center justify-center rounded-lg shadow-sm">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#002230]">
                        Credit / Debit Card
                      </h3>
                      <p className="text-xs text-[#556370]">
                        Secure instant processing
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#004B6E]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#556370] mb-2">
                      Cardholder Name
                    </label>
                    <input
                      className="w-full bg-white border border-[#D1DBE0] focus:border-[#005B3F] focus:ring-1 focus:ring-[#005B3F] p-3.5 rounded-lg text-sm text-[#002230] outline-none transition-all placeholder-[#A0AEC0]"
                      placeholder="Enter full name"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#556370] mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-white border border-[#D1DBE0] focus:border-[#005B3F] focus:ring-1 focus:ring-[#005B3F] p-3.5 pr-12 rounded-lg text-sm text-[#002230] outline-none transition-all placeholder-[#A0AEC0]"
                        placeholder="XXXX XXXX XXXX XXXX"
                        type="text"
                      />
                      <svg
                        className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#718096]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#556370] mb-2">
                        Expiry Date (MM/YY)
                      </label>
                      <input
                        className="w-full bg-white border border-[#D1DBE0] focus:border-[#005B3F] focus:ring-1 focus:ring-[#005B3F] p-3.5 rounded-lg text-sm text-[#002230] outline-none transition-all placeholder-[#A0AEC0]"
                        placeholder="MM / YY"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#556370] mb-2">
                        CVV/CVC
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-white border border-[#D1DBE0] focus:border-[#005B3F] focus:ring-1 focus:ring-[#005B3F] p-3.5 rounded-lg text-sm text-[#002230] outline-none transition-all placeholder-[#A0AEC0]"
                          placeholder="***"
                          type="password"
                        />
                        <svg
                          className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#718096] cursor-help"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-[#004B6E] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#00442F] transition-colors shadow-sm">
                    Pay with Card
                  </button>
                  <button className="border border-[#CBD5E1] bg-white text-[#556370] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#F8FAFC] transition-colors shadow-sm">
                    Clear Form
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Scheduled Payments */}
          <aside className="lg:col-span-4">
            <div className="bg-[#E6F4FA] border border-[#D0E3ED] rounded-xl p-6 flex flex-col justify-between h-full shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#004B6E]">
                    Scheduled
                  </h2>
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="space-y-4">
                  {/* Scheduled Item 1 */}
                  <div className="flex gap-3 items-center pb-4 border-b border-[#D0E3ED]">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] shadow-sm text-center min-w-13.5">
                      <span className="text-[10px] font-bold text-[#718096] block uppercase tracking-wider">
                        Oct
                      </span>
                      <span className="font-extrabold text-base text-[#004B6E] block leading-tight">
                        15
                      </span>
                    </div>
                    <div className="grow">
                      <p className="font-bold text-sm text-[#002230] leading-snug">
                        Mortgage Payment
                      </p>
                      <p className="text-xs text-[#556370]">
                        FinCorp Home Loans
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-[#002230]">
                        $2,450.00
                      </p>
                      <span className="text-[10px] font-bold bg-[#FEF9E7] text-[#9A7D0A] px-2 py-0.5 rounded-md border border-[#F9E79F]">
                        PENDING
                      </span>
                    </div>
                  </div>

                  {/* Scheduled Item 2 */}
                  <div className="flex gap-3 items-center pb-4 border-b border-[#D0E3ED]">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] shadow-sm text-center min-w-13.5">
                      <span className="text-[10px] font-bold text-[#718096] block uppercase tracking-wider">
                        Oct
                      </span>
                      <span className="font-extrabold text-base text-[#004B6E] block leading-tight">
                        18
                      </span>
                    </div>
                    <div className="grow">
                      <p className="font-bold text-sm text-[#002230] leading-snug">
                        Gym Membership
                      </p>
                      <p className="text-xs text-[#556370]">Apex Fitness</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-[#002230]">$45.00</p>
                      <span className="text-[10px] font-bold bg-[#E8F8F5] text-[#117864] px-2 py-0.5 rounded-md border border-[#A3E4D7]">
                        AUTO
                      </span>
                    </div>
                  </div>

                  {/* Scheduled Item 3 */}
                  <div className="flex gap-3 items-center">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] shadow-sm text-center min-w-13.5">
                      <span className="text-[10px] font-bold text-[#718096] block uppercase tracking-wider">
                        Oct
                      </span>
                      <span className="font-extrabold text-base text-[#004B6E] block leading-tight">
                        22
                      </span>
                    </div>
                    <div className="grow">
                      <p className="font-bold text-sm text-[#002230] leading-snug">
                        Streaming Bundle
                      </p>
                      <p className="text-xs text-[#556370]">
                        Global Media Corp
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-[#002230]">$15.99</p>
                      <span className="text-[10px] font-bold bg-[#E8F8F5] text-[#117864] px-2 py-0.5 rounded-md border border-[#A3E4D7]">
                        AUTO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aggregated Block Card */}
              <div className="mt-8 p-5 bg-[#004B6E] rounded-xl relative overflow-hidden text-white shadow-md">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "12px 12px",
                  }}
                ></div>
                <p className="text-xs text-[#BCE6FF] font-medium tracking-wide mb-1">
                  Total Upcoming
                </p>
                <p className="text-3xl font-extrabold">$2,510.99</p>
                <button className="mt-4 w-full bg-[#D2FA82] text-[#1B3300] font-bold text-sm py-3 rounded-lg hover:bg-[#C1EB6F] transition-colors shadow-sm">
                  Manage All Auto-Pay
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
