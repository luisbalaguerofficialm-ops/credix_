import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Personal() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="bg-white text-[#001f29] text-left min-h-screen flex flex-col font-sans antialiased">
      {/* Top Utility Nav Link Strip */}

      <main>
        {/* Hero Banner Area Component */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden bg-gradient-to-r from-[#11242e] to-[#1b3644]">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-35 mix-blend-overlay object-center"
              alt="A smiling young woman looking over her mobile phone banking dashboard application screen setup context layout"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWu1PKosgy8blWFbGsRtd3seRC5CSrheC-1fnzhr-sF1Jw6bOx79jTEV2XSY1Ylg9Lp1whKm8TsXE4A78SojL7rrKW68Zz03HxGAmhi0UVa24rzfo6ktmx9dYyzX6J0fOabHcbqDdifC9lqONdbGnf9u5DkThnhexeXMxzBHV1Rw1KgZ6v9syRZNAjHR4tdPLab-Tp1qbucSYEatHLQm4MMXedrp5VsaZE_twocR8ghYW9qjwBqDnbx5moTBwahYkH9dYAYDRMVlg"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
            <div className="max-w-2xl text-white">
              <span className="bg-[#527202] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-4 inline-block">
                Personal Banking
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                Banking that grows with your ambitions.
              </h1>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-xl">
                Experience a higher standard of personal finance with zero-fee
                accounts, market-leading rates, and tools designed for your
                long-term well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={"/new-account"}
                  className="bg-[#bde46b] text-[#11242e] px-6 py-3 rounded text-xs font-bold hover:bg-[#acd45a] transition-colors shadow-sm"
                >
                  Open an Account
                </Link>
                <button className="bg-white/10 backdrop-blur-xs text-white border border-white/20 px-6 py-3 rounded text-xs font-bold hover:bg-white/20 transition-colors">
                  Compare Products
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid Row Module Block */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-3">
                Everyday banking made effortless
              </h2>
              <p className="text-sm text-[#556570] max-w-xl mx-auto">
                Modern features designed to keep your money safe and your future
                bright.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Card Module 1: High Yield Savings Area Column */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#e2eaf0] flex flex-col justify-between shadow-2xs min-h-[250px]"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#527202] text-[10px] font-bold uppercase tracking-wider mb-3">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    Growth
                  </div>
                  <h3 className="text-lg font-bold text-[#003853] mb-2">
                    High-Yield Savings Accounts
                  </h3>
                  <p className="text-xs text-[#556570] leading-relaxed max-w-xl">
                    Earn up to 4.50% APY on your balance. No minimum deposit, no
                    monthly maintenance fees, just pure growth.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    View Rates
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Card Module 2: Freedom Checking Panel Context */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-5 bg-[#00516f] p-8 rounded-2xl text-white flex flex-col justify-between shadow-xs min-h-[250px]"
              >
                <div>
                  <div className="text-[#bde46b] mb-4">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Freedom Checking</h3>
                  <p className="text-xs text-white/80 leading-relaxed max-w-sm">
                    Zero fees. Zero stress. Access 55,000+ fee-free ATMs
                    nationwide.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    className="text-[#bde46b] text-xs font-bold inline-flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    Learn More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Card Module 3: Mobile Banking Column Content */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-4 bg-white p-8 rounded-2xl border border-[#e2eaf0] flex flex-col justify-between shadow-2xs min-h-[250px]"
              >
                <div>
                  <div className="text-[#00516f] mb-4">
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
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#003853] mb-2">
                    Mobile Banking
                  </h3>
                  <p className="text-xs text-[#556570] leading-relaxed">
                    Deposit checks, pay bills, and track spending from anywhere.
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  <span className="px-2.5 py-1 bg-[#f4faff] border border-[#e2eaf0] rounded text-[9px] font-bold text-[#00516f]">
                    APP STORE
                  </span>
                  <span className="px-2.5 py-1 bg-[#f4faff] border border-[#e2eaf0] rounded text-[9px] font-bold text-[#00516f]">
                    PLAY STORE
                  </span>
                </div>
              </motion.div>

              {/* Card Module 4: Financial Wellness Row Split Column Panel */}
              <motion.div
                variants={fadeDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-8 bg-[#e8f5fd] border border-[#d2e6f4] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch shadow-2xs min-h-[250px]"
              >
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-[#003853] mb-2">
                      Financial Wellness Hub
                    </h3>
                    <p className="text-xs text-[#556570] leading-relaxed max-w-xs">
                      Access free credit monitoring, budgeting tools, and
                      personalized financial coaching at no extra cost.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button className="bg-[#00516f] text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-[#003853] transition-colors">
                      Explore Tools
                    </button>
                  </div>
                </div>
                <div className="sm:w-1/2 relative min-h-[160px] sm:min-h-auto bg-gray-100">
                  <img
                    className="w-full h-full object-cover absolute inset-0 object-center"
                    alt="Financial analytics graph application interface demonstration data layout structural form mockup setup"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwk_lZcvy0xcM7-fomPQHE2mra-E8lNe6_l626AiAnWhVn-AdW04vypwkusX9OTMPQOVedJ8lBFSb0Myvg4e-AmxzPC3xR5x-Q_GUuLE8cc1wHCR9gjrxKiOZYp-Ya-lYoFNj_6_Y_zYWv0chKqtIIibbEwZZAKfRWZdvkjYDu_qOmnAjmr1-NugTxjysc_TkZ07LaLtkLIxZIvoMcAkCelTWq95ec3bHiS5RiqIwyy0HO3yE-Exk-yla9bbrOpxKZM2VOkA10zL4"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Showcase Grid Layout Column */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-2">
                  Everything you need, all in one place.
                </h2>
                <p className="text-sm text-[#556570]">
                  From your first paycheck to your golden years, we provide the
                  stability and expertise you deserve.
                </p>
              </div>
              <a
                className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 shrink-0 hover:underline"
                href="#"
              >
                Browse all personal products
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Variant Panel 1 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] flex flex-col justify-between hover:border-[#00516f] transition-colors group">
                <div>
                  <div className="w-10 h-10 bg-[#f4faff] text-[#00516f] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#00516f] group-hover:text-white transition-colors">
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
                  </div>
                  <h4 className="text-base font-bold text-[#003853] mb-2">
                    Credit Cards
                  </h4>
                  <p className="text-xs text-[#556570] leading-relaxed mb-6">
                    Low APR cards with generous rewards, travel perks, and no
                    annual fees for qualified members.
                  </p>
                </div>
                <button className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 text-left transition-all w-fit">
                  Apply Now
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Variant Panel 2 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] flex flex-col justify-between hover:border-[#00516f] transition-colors group">
                <div>
                  <div className="w-10 h-10 bg-[#f4faff] text-[#00516f] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#00516f] group-hover:text-white transition-colors">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-[#003853] mb-2">
                    Mortgages & Loans
                  </h4>
                  <p className="text-xs text-[#556570] leading-relaxed mb-6">
                    Competitive rates and personalized support to help you get
                    into your dream home faster.
                  </p>
                </div>
                <button className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 text-left transition-all w-fit">
                  Get a Quote
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Variant Panel 3 */}
              <div className="bg-white p-6 rounded-xl border border-[#e2eaf0] flex flex-col justify-between hover:border-[#00516f] transition-colors group">
                <div>
                  <div className="w-10 h-10 bg-[#f4faff] text-[#00516f] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#00516f] group-hover:text-white transition-colors">
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
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v1a1 1 0 01-1 1H9m4-1h2.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 17.586V19a1 1 0 01-1 1h-1"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-[#1b3644] mb-2">
                    Auto Loans
                  </h4>
                  <p className="text-xs text-[#556570] leading-relaxed mb-6">
                    Quick approval and low interest rates for new and used
                    vehicles, with flexible payment terms.
                  </p>
                </div>
                <button className="text-[#00516f] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 text-left transition-all w-fit">
                  Calculate Payment
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Integrity and Core Pillar Trust Framework Area */}
        <section className="py-20 bg-[#1b3644] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                <img
                  className="w-full h-full object-cover object-center"
                  alt="Customer onboarding handshake scenario representation structure layout placeholder contextual frame content"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhLeLFd5B8ZVN6WO5FIfJZQ8GqiOoKiQXc_ranC9wMtkuxs9MDXJu9HG7i0PJgSWGrppL1lvVf9PWBV87CCOdELpGp67bG6CvTmjftgbhrPaAEa7m0d7dyg71nsUd2RR4dcEQVOx8TLDxPdW4m8PwtKIQm7L3qRFcY1brI35fQAT9mHfTLPn1AWxoxkkZ0xlYJ4BEy-KFLV8KK4VcPSBWx97BTtS1LCXkMVr6BFtm0Nq1sFtTWcQOT21Dz3LHpMgqAbvAJHEgjAVw"
                />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
                  Our commitment to your security and success.
                </h2>

                <div className="space-y-6">
                  {/* Trust Badge Line Item item 1 */}
                  <div className="flex gap-4">
                    <div className="bg-[#00516f] p-2.5 rounded-lg text-[#bde46b] shrink-0 h-10 w-10 flex items-center justify-center">
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
                    <div>
                      <h4 className="text-sm font-bold mb-1">NCUA Insured</h4>
                      <p className="text-xs text-white/70 leading-relaxed max-w-md">
                        Your deposits are federally insured up to $250,000,
                        providing you with absolute peace of mind.
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge Line Item item 2 */}
                  <div className="flex gap-4">
                    <div className="bg-[#00516f] p-2.5 rounded-lg text-[#bde46b] shrink-0 h-10 w-10 flex items-center justify-center">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">
                        Advanced Encryption
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed max-w-md">
                        We use state-of-the-art multi-factor authentication and
                        biometric security for all transactions.
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge Line Item item 3 */}
                  <div className="flex gap-4">
                    <div className="bg-[#00516f] p-2.5 rounded-lg text-[#bde46b] shrink-0 h-10 w-10 flex items-center justify-center">
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
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">
                        24/7 Local Support
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed max-w-md">
                        Speak to a real person whenever you need help, with 24/7
                        fraud monitoring and account support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lime Colored Highlight Promotion Module Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-[#bde46b] rounded-2xl p-10 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#acd45a]">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-2xl font-bold text-[#11242e] mb-2">
                  Ready to take control of your financial future?
                </h2>
                <p className="text-xs text-[#11242e]/80 font-medium">
                  Open your account online in as little as 5 minutes. No
                  paperwork, no hassle.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-4 shrink-0 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#1b3644] text-white px-6 py-3 rounded text-xs font-bold hover:bg-[#11242e] transition-colors shadow-sm">
                  Get Started Today
                </button>
                <button className="w-full sm:w-auto bg-white text-[#1b3644] border border-white px-6 py-3 rounded text-xs font-bold hover:bg-gray-50 transition-colors shadow-2xs">
                  Find a Branch
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
