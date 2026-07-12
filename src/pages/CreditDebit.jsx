import React from "react";
import CountUp from "../components/ui/CountUp";
import { Link } from "react-router-dom";
import card from "../assets/card22.jpg"

export default function CreditDebit() {
  return (
    <div className="bg-[#f8fafb] text-left text-[#001f29] min-h-screen flex flex-col font-sans antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#11242e] to-[#1b3644] min-h-[520px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-25 mix-blend-overlay"
              alt="Premium Credit Card Environment Background"
              src={card}
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-16">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                Financial Freedom <br />
                in Your Pocket.
              </h1>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-md">
                From daily essentials to global adventures, our range of credit
                and debit cards is designed to reward every choice you make.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Bento Grid Section */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-3">
                Why Choose Our Cards?
              </h2>
              <p className="text-sm text-[#556570] max-w-lg mx-auto">
                Engineered for security, convenience, and growth. Experience
                banking that works for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1: Reward Card */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-[#e2eaf0] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-xs">
                <div className="flex-1">
                  <span className="inline-block bg-[#eef8d3] text-[#527202] px-2.5 py-1 rounded text-[10px] font-extrabold mb-4 uppercase tracking-wider">
                    Unmatched Value
                  </span>
                  <h3 className="text-xl font-bold text-[#003853] mb-3">
                    Earn While You Spend
                  </h3>
                  <p className="text-xs md:text-sm text-[#556570] leading-relaxed mb-6">
                    Get up to 3% cash back on groceries, gas, and travel. Our
                    points never expire and can be redeemed for travel, gift
                    cards, or statement credits.
                  </p>
                  <a
                    className="text-[#00516f] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    View Rewards Program
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-44 h-44 shrink-0 bg-[#e3f4fe] rounded-lg flex items-center justify-center p-6">
                  <svg
                    className="w-14 h-14 text-[#00516f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zM9 16l6-6M10 10h4v4"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2: Security Card */}
              <div className="bg-[#11242e] p-8 rounded-xl text-white flex flex-col justify-between shadow-md">
                <div>
                  <div className="text-[#bde46b] mb-6">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Zero-Liability Protection
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Advanced encryption and 24/7 fraud monitoring keep your
                    accounts safe. If you lose your card, freeze it instantly in
                    our app.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="h-[3px] w-10 bg-[#bde46b]"></div>
                </div>
              </div>

              {/* Card 3: Low APR Card */}
              <div className="bg-white p-8 rounded-xl border border-[#e2eaf0] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-[#00516f] mb-6">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#003853] mb-3">
                    Flexible Financing
                  </h3>
                  <p className="text-xs text-[#556570] leading-relaxed mb-6">
                    Enjoy introductory 0% APR for the first 12 months on balance
                    transfers and new purchases.
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="text-[10px] font-extrabold text-[#718594] uppercase tracking-wider">
                    Rates as low as{" "}
                    <CountUp
                      start={0}
                      end={12.99}
                      duration={2}
                      decimals={2}
                      suffix="%"
                    />
                  </span>
                </div>
              </div>

              {/* Card 4: Global Card */}
              <div className="lg:col-span-2 bg-[#00516f] p-8 rounded-xl text-white flex flex-col md:flex-row gap-8 items-center shadow-md relative overflow-hidden">
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold mb-3">Global Acceptance</h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-6">
                    No foreign transaction fees. Travel with confidence knowing
                    your card is accepted at millions of merchants worldwide and
                    thousands of surcharge-free ATMs.
                  </p>
                </div>
                <div className="w-full md:w-52 shrink-0 relative z-10">
                  <img
                    className="w-full h-32 object-cover rounded shadow-md"
                    alt="Global City Connectivity Landscape"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBptBNd9I3OV5QcvUAJNfPD5YVDwHpRxsyob-h4L4DmEcKdNLnPET3gtaVQvJwWR2apWu_HoCdck8UCwUjHmS84rqZRV5xteFIigfquKZ4BccyGdKAAlhWLx9U27MXIudx7Is16WS0hAZNXgZ5U5AVifxQq28MgkEgWHwHAFBeB3PGQed_lSKSLkJB-Kp6mD1hOTjx5gLjJhDZREzcakaKy2UNlt__TKMrNDPhmKyq4t1ywnmm9XmmAEfdNPBkrReTETduT-3V5Hoc"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Framework Section */}
        <section className="py-20 bg-white" id="comparison">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-3">
                Find Your Perfect Match
              </h2>
              <p className="text-sm text-[#556570]">
                Compare our tiered card options to see which fits your
                lifestyle.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-[#e2eaf0]">
                    <th className="p-5 font-bold text-[#718594] w-1/4 uppercase tracking-wider text-[11px]">
                      Feature
                    </th>
                    <th className="p-5 text-center w-1/4">
                      <div className="flex flex-col items-center">
                        <span className="text-[#658c03] font-extrabold text-[10px] uppercase tracking-wider mb-1">
                          Essential
                        </span>
                        <span className="font-bold text-[#003853] text-base">
                          Classic Debit
                        </span>
                      </div>
                    </th>
                    <th className="p-5 text-center w-1/4 bg-[#f8fafb]/80 rounded-t-xl border-x border-t border-[#e2eaf0]">
                      <div className="flex flex-col items-center">
                        <span className="text-[#00516f] font-extrabold text-[10px] uppercase tracking-wider mb-1">
                          Popular
                        </span>
                        <span className="font-bold text-[#003853] text-base">
                          Elite Rewards
                        </span>
                      </div>
                    </th>
                    <th className="p-5 text-center w-1/4">
                      <div className="flex flex-col items-center">
                        <span className="text-[#006c80] font-extrabold text-[10px] uppercase tracking-wider mb-1">
                          Premium
                        </span>
                        <span className="font-bold text-[#003853] text-base">
                          Platinum Preferred
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2eaf0] hover:bg-[#f8fafb]/30 transition-colors">
                    <td className="p-5 font-bold text-[#001f29]">Annual Fee</td>
                    <td className="p-5 text-center text-[#556570]">$0</td>
                    <td className="p-5 text-center text-[#556570] bg-[#f8fafb]/80 border-x border-[#e2eaf0] font-medium">
                      $0
                    </td>
                    <td className="p-5 text-center text-[#556570]">
                      $95 (Waived first year)
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2eaf0] hover:bg-[#f8fafb]/30 transition-colors">
                    <td className="p-5 font-bold text-[#001f29]">Cash Back</td>
                    <td className="p-5 text-center text-[#556570]">N/A</td>
                    <td className="p-5 text-center text-[#556570] bg-[#f8fafb]/80 border-x border-[#e2eaf0] font-medium">
                      1.5% Unlimited
                    </td>
                    <td className="p-5 text-center text-[#556570]">
                      3% Categories / 1% Base
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2eaf0] hover:bg-[#f8fafb]/30 transition-colors">
                    <td className="p-5 font-bold text-[#001f29]">
                      Interest Rate (APR)
                    </td>
                    <td className="p-5 text-center text-[#556570]">N/A</td>
                    <td className="p-5 text-center text-[#556570] bg-[#f8fafb]/80 border-x border-[#e2eaf0] font-medium">
                      14.99% - 18.99%
                    </td>
                    <td className="p-5 text-center text-[#556570]">
                      12.99% - 16.99%
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2eaf0] hover:bg-[#f8fafb]/30 transition-colors">
                    <td className="p-5 font-bold text-[#001f29]">
                      Security Features
                    </td>
                    <td className="p-5 flex justify-center text-[#527202]">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                    <td className="p-5 text-center bg-[#f8fafb]/80 border-x border-[#e2eaf0]">
                      <div className="flex justify-center text-[#527202]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center text-[#527202]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2eaf0] hover:bg-[#f8fafb]/30 transition-colors">
                    <td className="p-5 font-bold text-[#001f29]">
                      Concierge Service
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center text-gray-300">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="p-5 bg-[#f8fafb]/80 border-x border-[#e2eaf0]">
                      <div className="flex justify-center text-gray-300">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center text-[#527202]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="p-5"></td>
                    <td className="p-5 text-center">
                      <button className="text-[#00516f] font-bold text-xs hover:underline">
                        Apply Now
                      </button>
                    </td>
                    <td className="p-5 text-center bg-[#f8fafb]/80 border-x border-b border-[#e2eaf0] rounded-b-xl">
                      <button className="bg-[#003853] text-white px-5 py-2 rounded text-xs font-bold hover:bg-[#00516f] transition-colors">
                        Select Elite
                      </button>
                    </td>
                    <td className="p-5 text-center">
                      <button className="text-[#00516f] font-bold text-xs hover:underline">
                        Apply Now
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Action Bottom Section */}
        <section className="py-20 bg-[#1b3644]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Ready to upgrade your wallet?
            </h2>
            <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Applications take less than 5 minutes. Get an instant decision and
              start using your digital card immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                to={"/login"}
                className="bg-[#658c03] text-white px-8 py-3.5 rounded text-xs font-bold hover:bg-[#527202] transition-colors shadow-md"
              >
                Start Your Application
              </Link>
              <span className="text-white/50 text-xs font-medium">
                No impact on your credit score to check.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
