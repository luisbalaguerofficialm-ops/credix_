import React from "react";
import { Link } from "react-router-dom";

export default function Business() {
  return (
    <div className="bg-white text-[#001f29] min-h-screen flex flex-col font-sans antialiased">
      {/* Top Utility Bar */}
      <div className="bg-[#11242e] text-white py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end gap-6 text-[11px] font-medium opacity-80">
          <a className="hover:text-white transition-colors" href="#">
            Locations
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Support
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Careers
          </a>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[540px] flex items-center overflow-hidden bg-gradient-to-r from-[#11242e] to-[#1b3644]">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-35 mix-blend-overlay"
              alt="Corporate window cityscape backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALeyhQSwvWJ26ywwAYPNbm1vp4aRh1ZeEb6emRdsrJr33PpSe9nPdvNclQNBMI_GLwAAbkJH2eSERBoZLt_FdBL2ySxEW8TCg73_ifbYynhd2mutH9qIO1vh-CLSzgsBRjXKsLFE40kUCVxhKBifRA-wa0x_2Daelw9RdkL5IqTz-w3utTt__qWJpfkICR5vKy3iT31KMLrwrw0CQvlq36Vlf6e2iFSXU0nLRFUxVZj1R_Q3NnxNs5D8ylrP52Ik-4kKNMfGSauag"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                Empowering Your Business Vision
              </h1>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-xl">
                Partner with a financial institution that values your growth as
                much as you do. From local startups to established enterprises,
                we provide the tools to scale with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={"/first-set-transfer"}
                  className="bg-[#bde46b] text-[#11242e] px-6 py-3 rounded text-xs font-bold hover:bg-[#acd45a] transition-colors shadow-sm"
                >
                  Open an Account
                </Link>
                <button className="bg-white/10 backdrop-blur-xs text-white border border-white/20 px-6 py-3 rounded text-xs font-bold hover:bg-white/20 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-3">
                Scalable Banking Solutions
              </h2>
              <p className="text-sm text-[#556570] max-w-xl">
                Comprehensive financial services designed to streamline your
                operations and maximize your capital.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Feature 1: Checking & Savings */}
              <div className="lg:col-span-8 bg-[#e3f4fe] p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start md:items-center border border-[#e2eaf0]">
                <div className="flex-1">
                  <span className="inline-block p-2.5 bg-[#00516f] text-white rounded-md mb-4">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-[#003853] mb-2">
                    Business Checking & Savings
                  </h3>
                  <p className="text-xs md:text-sm text-[#556570] leading-relaxed mb-5">
                    High-yield savings and flexible checking accounts that grow
                    with your transactions. No monthly fees with minimum balance
                    requirements.
                  </p>
                  <a
                    className="text-[#00516f] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Explore Accounts
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
                <div className="w-full md:w-52 h-36 shrink-0 rounded overflow-hidden shadow-xs bg-white">
                  <img
                    className="w-full h-full object-cover"
                    alt="Leather wallet workspace styling setup"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc4ejMCcwlqs0jKwh1oMTTwYNTEwcIzpniu-eA4TYjGEKDU-_epWNBIkN4uEXaPGiewg89rwknor-UV3lq1VsNfwpsPNq8y0kBXlHF8ttFOD10wFF8euFHZFEgNveSBY6ul1qSK1w1-irWG1rbdwjzNyNL9aDplkG6xrO96-iI7UBPy2x4_srF08iiLFOGLdUtO1Ri-0VXIBm0GDhX1fON7eP_gWHEReWAFLtmxOt0ZmDCbaAHq1iSEw7VKHcz5MiS2rsPGs2HSGM"
                  />
                </div>
              </div>

              {/* Feature 2: Commercial Loans */}
              <div className="lg:col-span-4 bg-[#1b3644] p-8 rounded-xl text-white flex flex-col justify-between border border-[#1b3644]">
                <div>
                  <span className="inline-block p-2.5 bg-[#bde46b] text-[#1b3644] rounded-md mb-4">
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
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold mb-2">Commercial Loans</h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    Fuel your expansion with competitive rates on real estate,
                    equipment, and lines of credit.
                  </p>
                </div>
                <button className="w-full py-2.5 bg-white text-[#1b3644] rounded text-xs font-bold hover:bg-[#bde46b] hover:text-[#1b3644] transition-colors">
                  Apply Now
                </button>
              </div>

              {/* Feature 3: Merchant Services */}
              <div className="lg:col-span-4 bg-[#e3f4fe] p-8 rounded-xl border border-[#e2eaf0] flex flex-col justify-between">
                <div>
                  <span className="inline-block p-2.5 bg-[#00516f] text-white rounded-md mb-4">
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
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-[#003853] mb-2">
                    Merchant Services
                  </h3>
                  <p className="text-xs text-[#556570] leading-relaxed mb-5">
                    Accept payments anywhere with secure, lightning-fast
                    processing hardware and software.
                  </p>
                </div>
                <a
                  className="text-[#00516f] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Learn More
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Feature 4: Payroll & HR */}
              <div className="lg:col-span-8 bg-[#f8fafb] p-8 rounded-xl border border-[#e2eaf0] flex flex-col justify-center">
                <div className="max-w-xl">
                  <span className="inline-block p-2.5 bg-[#bde46b] text-[#003853] rounded-md mb-4">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-[#003853] mb-2">
                    Integrated Payroll Solutions
                  </h3>
                  <p className="text-xs text-[#556570] leading-relaxed mb-5">
                    Automate your payroll, tax filings, and employee benefits
                    with our seamless HR platform integration. Designed to save
                    you hours of manual work every month.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Next-day direct deposit
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#556570]">
                      <svg
                        className="w-4 h-4 text-[#527202]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Automated tax compliance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid Matrix */}
        <section className="py-12 bg-[#1b3644] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">15k+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Active Businesses
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">$2.4B</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Small Business Loans
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Support Access
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Member Satisfaction
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 bg-[#f4faff]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <img
                className="rounded-xl shadow-lg w-full h-[460px] object-cover relative z-10"
                alt="Corporate Relationship Management portrait profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0MrNNhuWlHn39d8SHcZjBzj9wJNhF68EajBeoo-WcUyf9euGeIQ-tKUdSMfbYHYQ9GpqoK7zG7hn9qwETirSHclSNpvEs_fv3KHRN_wBKVjtlRm9o9FhXfZGuaTfrBXMW2MXGp5ZCnAPZ8yXFc18dvZ6ujBAUVfYZbIBHzlk2Y4C6T_mejHxmHMFPnpGDE-5rerKaySbFrFr6l8jdGA8tPws2ZmahdXbmT4Bf7d4NaUZxiL17ouNk56HGfK2m-kGHR2N9Y8iljsU"
              />
              <div className="absolute -bottom-6 right-4 md:-right-6 bg-white p-5 rounded-lg shadow-md z-20 max-w-xs border border-[#e2eaf0]">
                <p className="text-[#00516f] text-xs italic leading-relaxed mb-3">
                  "Their specialized industry insights helped us secure the
                  capital we needed to double our production capacity in under
                  six months."
                </p>
                <div className="font-bold text-xs text-[#001f29]">
                  Sarah Jenkins
                </div>
                <div className="text-[11px] text-[#556570]">
                  CEO, TechFlow Systems
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-6">
                More Than Just a Bank—A Partner in Your Growth
              </h2>
              <p className="text-sm text-[#556570] leading-relaxed mb-8">
                We understand that every business is unique. Our dedicated
                Relationship Managers work alongside you to tailor financial
                strategies that align with your long-term objectives.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3.5">
                  <span className="text-[#527202] mt-0.5 shrink-0">
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
                        d="M14 10h4.757c1.27 0 2.298 1.05 2.298 2.347 0 1.297-1.028 2.348-2.298 2.348H14M4 10h4.757c1.27 0 2.299 1.05 2.299 2.347 0 1.297-1.03 2.348-2.299 2.348H4m10 4v4m0-16v4M4 4h16"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#003853] mb-0.5">
                      Dedicated Advisory
                    </h4>
                    <p className="text-xs text-[#556570]">
                      One-on-one guidance from industry specialists who know
                      your market.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-[#527202] mt-0.5 shrink-0">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#003853] mb-0.5">
                      Rapid Decision Making
                    </h4>
                    <p className="text-xs text-[#556570]">
                      Streamlined application processes for loans and account
                      openings.
                    </p>
                  </div>
                </li>
              </ul>
              <button className="bg-[#003853] text-white px-6 py-3 rounded text-xs font-bold hover:bg-[#00516f] transition-colors">
                Meet Our Advisors
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Grid Box */}
        <section className="bg-[#00516f] py-16 relative overflow-hidden text-center text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Ready to take your business further?
            </h2>
            <p className="text-sm text-white/70 mb-8 max-w-lg mx-auto">
              Join thousands of successful businesses who have found their home
              with Credit Union. Setup is quick and entirely digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00516f] px-8 py-3.5 rounded text-xs font-bold hover:bg-[#f8fafb] transition-colors shadow-md">
                Start Application
              </button>
              <button className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded text-xs font-bold hover:bg-white/10 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
