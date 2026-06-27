import React from "react";

export default function Loans() {
  return (
    <div className="bg-white text-[#001f29] min-h-screen flex flex-col font-sans antialiased">
      {/* Top Utility Bar */}
      <div className="bg-[#11242e] text-white py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end gap-6 text-[11px] font-medium opacity-80">
          <a className="hover:text-white transition-colors" href="#">
            Locations
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Help Center
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Sign In to Online Banking
          </a>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden bg-gradient-to-r from-[#11242e] to-[#1b3644]">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-35 mix-blend-overlay"
              alt="Modern dark tech workspace setup"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyq3wXUpmkcMNhH_JvvVH2zRjr7FfzQz5kGnsi_vWGjNdvLNcJU_x12dCU6wzpQ69sr1GUiPp_KbfXZAaXab-SvalPLkoyFhpfctzxxtITe9Ofyar3_bykS57nRI-Gh-OWZye72a-8wQyeebU9T-kVxNQwUvuHI69-dqTVg6DzRlWoDKXry6J83ww-Sqk2hDv1l-fG5OIvS1M3VM4Ay4i9SZLINom16nn7gcZR1FrhPe9rf2D3zrbvYWpkM3YrahswRu7ww4DR1Gw"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                Empowering Your Next Big Step
              </h1>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-xl">
                From your first car to your forever home, our flexible loan
                options and competitive rates are designed to fuel your
                ambitions while maintaining your financial peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#006a91] text-white border border-[#006a91] px-6 py-3 rounded text-xs font-bold hover:bg-[#00516f] transition-colors shadow-sm">
                  Check My Rate
                </button>
                <button className="bg-white/10 backdrop-blur-xs text-white border border-white/20 px-6 py-3 rounded text-xs font-bold hover:bg-white/20 transition-colors">
                  View All Rates
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Rates Row */}
        <section className="py-12 bg-[#f8fafb]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rate Card 1 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] transition-shadow hover:shadow-md">
                <div className="text-[#556570] text-xs font-medium mb-1">
                  Mortgage Loans
                </div>
                <div className="text-2xl font-bold text-[#003853] mb-2">
                  6.45%{" "}
                  <span className="text-xs font-medium text-[#556570] ml-1">
                    APR
                  </span>
                </div>
                <p className="text-xs text-[#556570] mb-5">
                  Fixed-rate 30-year term. Stable and predictable.
                </p>
                <a
                  className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Explore Mortgages
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              {/* Rate Card 2 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] transition-shadow hover:shadow-md">
                <div className="text-[#556570] text-xs font-medium mb-1">
                  Auto Loans
                </div>
                <div className="text-2xl font-bold text-[#003853] mb-2">
                  4.25%{" "}
                  <span className="text-xs font-medium text-[#556570] ml-1">
                    APR
                  </span>
                </div>
                <p className="text-xs text-[#556570] mb-5">
                  New vehicle financing for terms up to 60 months.
                </p>
                <a
                  className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Vehicle Loans
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              {/* Rate Card 3 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] transition-shadow hover:shadow-md">
                <div className="text-[#556570] text-xs font-medium mb-1">
                  Personal Loans
                </div>
                <div className="text-2xl font-bold text-[#003853] mb-2">
                  8.99%{" "}
                  <span className="text-xs font-medium text-[#556570] ml-1">
                    APR
                  </span>
                </div>
                <p className="text-xs text-[#556570] mb-5">
                  No collateral required. Funds available next day.
                </p>
                <a
                  className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Apply Personal
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Calculator Area */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Slider Inputs Column */}
              <div className="lg:col-span-5 bg-[#f4faff] p-8 rounded-2xl border border-[#e2eaf0] flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#003853] mb-8">
                    Loan Estimator
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-semibold text-[#1b3644]">
                          Loan Amount
                        </label>
                        <span className="text-xs font-bold text-[#00516f] bg-white px-2 py-0.5 rounded border border-[#e2eaf0] shadow-2xs">
                          $25,000
                        </span>
                      </div>
                      <input
                        className="w-full h-1.5 bg-[#e2eaf0] rounded-lg appearance-none accent-[#00516f] cursor-pointer"
                        type="range"
                        min="1000"
                        max="100000"
                        defaultValue="25000"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-semibold text-[#1b3644]">
                          Term Length
                        </label>
                        <span className="text-xs font-bold text-[#00516f] bg-white px-2 py-0.5 rounded border border-[#e2eaf0] shadow-2xs">
                          48 Months
                        </span>
                      </div>
                      <input
                        className="w-full h-1.5 bg-[#e2eaf0] rounded-lg appearance-none accent-[#00516f] cursor-pointer"
                        type="range"
                        min="12"
                        max="84"
                        defaultValue="48"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1b3644] mb-2">
                        Loan Type
                      </label>
                      <select className="w-full bg-white border border-[#e2eaf0] rounded-lg p-3 text-xs font-medium text-[#001f29] outline-none focus:border-[#00516f] shadow-2xs">
                        <option>Auto Loan (4.25%)</option>
                        <option>Mortgage (6.45%)</option>
                        <option>Personal Loan (8.99%)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slate Results Metric Display Box */}
              <div className="lg:col-span-7 bg-[#1b3644] text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-[#1b3644]">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                    Estimated Monthly Payment
                  </div>
                  <div className="text-4xl font-bold tracking-tight mb-4">
                    $567.28
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-8 max-w-lg">
                    Estimated based on selected rate. Final terms may vary based
                    on creditworthiness and other institutional factors.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">
                        Total Interest
                      </div>
                      <div className="text-lg font-bold text-white">$2,229</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">
                        Total Repayment
                      </div>
                      <div className="text-lg font-bold text-white">
                        $27,229
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#bde46b] text-[#11242e] py-3 rounded text-xs font-bold hover:bg-[#acd45a] transition-colors shadow-xs">
                  Start Full Application
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid Content */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-3">
                Finding the Right Fit
              </h2>
              <p className="text-sm text-[#556570] max-w-xl mx-auto">
                Different dreams require different tools. Explore our
                specialized credit products tailored for your life stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Mortgages */}
              <div className="bg-white rounded-xl border border-[#e2eaf0] overflow-hidden shadow-2xs transition-transform hover:-translate-y-0.5">
                <div className="h-44 bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    alt="Suburban residence architecture structure"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgA4qkHuO2gDmG7xalxiZfIgkaCehooOPsDjJRUKJ5vIwSkiLcNTsSHbxYIVKrvGHf5MIJtnN5CXFW6SL53kUqTtkvZg11FFF9krpIjlRKB4EJYRTeBV0WQG9bq3fs8jJwnADLbdRokJBKli2TYIjkhYaAZ-iCLdmsYhFBLjDrhgKWGNULlbqE43tLZwLlmlcUZsCl5MhJBZD4Y7YJ--F57QK25cYyfjMaLqyer-HwufZgjQyUd8Y_Ei-2cRjZ8Oxu0J7-ezifyJY"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#003853] mb-4">
                    Mortgages
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fixed & Adjustable Rates
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      First-Time Buyer Programs
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Seamless Digital Closing
                    </li>
                  </ul>
                  <button className="w-full py-2.5 border border-[#e2eaf0] hover:border-[#003853] text-[#003853] text-xs font-bold rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 2: Vehicle Loans */}
              <div className="bg-white rounded-xl border border-[#e2eaf0] overflow-hidden shadow-2xs transition-transform hover:-translate-y-0.5">
                <div className="h-44 bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    alt="Sleek EV charge terminal snapshot"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQnqz5XetfQXVccGTx5noQo3Xrcgv-tu2UYAFn__WXyOdq-Wb-veGkAealWgafP9OT5OpgofltZSpkTPTe-MDF4o1Z9t8XJVMzdtIkY1hW-oUSI0z-wxanOk0wVIF3oE_g9B-yV_8By2Y9BtlgQZpZG3bVb4aSjW5SrjpXgDQ8IOU4Yx82vZC02hTUslCPmUmdtl1QckmmZK-sEQn9_BwyMQk1oJ4cUUOLXi_mjl3lAidN9ruONlCfOJfNtwotoWxDgII7ZkbTAjo"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#003853] mb-4">
                    Vehicle Loans
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      New & Used Financing
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Refinance Options
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      EV Specialty Discounts
                    </li>
                  </ul>
                  <button className="w-full py-2.5 border border-[#e2eaf0] hover:border-[#003853] text-[#003853] text-xs font-bold rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 3: Personal & Credit */}
              <div className="bg-white rounded-xl border border-[#e2eaf0] overflow-hidden shadow-2xs transition-transform hover:-translate-y-0.5">
                <div className="h-44 bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    alt="Holding premium design credit card variant"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIxA2T_ZXZif9I-R0FesgeIWvxTlRFPkeZ35tjbz7rLCbJHsWgl5P4OgeLPPNmwckkMngDrymQT6-k8ZOwfnMtKPQfrL_OuLnMAdzIpalMqFIffmg9Qzj4fsIAQwA_wOrwjvKS_nprIkPQIV_mifR_wcRULB-KbX6efRH2DTNftvm3H0EFl2J3pbWpDWytnulOOVTdpFsdyKXzxTfupDxLJTy_p3Oc1V8z8Z4d19W94pWHYGW86x8vosSv_A2hyDKUC0A-Ha_WTwE"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#003853] mb-4">
                    Personal & Credit
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Lines of Credit
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Unsecured Loans
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Travel Rewards Cards
                    </li>
                  </ul>
                  <button className="w-full py-2.5 border border-[#e2eaf0] hover:border-[#003853] text-[#003853] text-xs font-bold rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Block Section */}
        <section className="bg-[#00516f] py-16 text-center text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Ready to see your personalized rates?
            </h2>
            <p className="text-xs text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
              Checking your rate won't impact your credit score. It takes less
              than 3 minutes to find your best offer.
            </p>
            <button className="bg-[#bde46b] text-[#11242e] px-8 py-3.5 rounded text-xs font-bold hover:bg-[#acd45a] transition-colors shadow-md inline-flex items-center gap-2">
              Check My Rate Now
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
