import React from "react";
import {
  User,
  Briefcase,
  ShieldCheck,
  Zap,
  Headphones,
  CreditCard,
  BadgeDollarSign,
  Users,
  CheckCircle,
} from "lucide-react";
import growthImg from "../../assets/growthImg.png";
import related from "../../assets/related.jpg";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logs from "../../assets/america_bank_logo.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MainHome = () => {
  return (
    // ========= FeaturesSection=============
    <div className=" mt-5 mb-5">
      <section className="bg-gray-200 flex items-center justify-center py-20 px-6 md:px-24 min-h-[400px]">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-3 gap-14 justify-center items-center">
          {/* Personal Banking */}
          <div className="flex items-start gap-5 text-[#35404E] justify-center">
            {/* Icon outside */}
            <div className="bg-[#E6F4F1] p-4 rounded-full shrink-0 flex items-center justify-center">
              <User className="w-7 h-7 text-[#007C92]" />
            </div>

            {/* Text content */}
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-[18px] mb-2">
                Personal Banking
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-justify">
                Manage your money your way — from seamless transfers to smart
                savings and instant bill payments.
              </p>
            </div>
          </div>

          {/* Business Banking */}
          <div className="flex items-start gap-5 text-[#35404E] justify-center">
            <div className="bg-[#E6F4F1] p-4 rounded-full shrink-0 flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-[#007C92]" />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-[18px] mb-2">
                Business Banking
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-justify">
                Empower your business with flexible accounts, automated
                invoicing, and real-time transaction insights.
              </p>
            </div>
          </div>

          {/* Cards & Payments */}
          <div className="flex items-start gap-5 text-[#35404E] justify-center">
            <div className="bg-[#E6F4F1] p-4 rounded-full shrink-0 flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-[#007C92]" />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-[18px] mb-2">
                Cards & Payments
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-justify">
                Get instant access to digital and physical cards that work
                anywhere. Enjoy cashback rewards, zero hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======GrowthPartnerSection=========== */}
      <section className="bg-white py-40 mt-8 px-8 md:px-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12">
          <div className="flex-1 flex flex-col items-end px-10 md:px-8 text-left">
            {/* Text wrapper (aligns with image height) */}
            <div className="flex flex-col justify-end items-start">
              <h2 className="text-[#35404E] font-semibold text-[30px] md:text-[40px] leading-snug mb-6">
                We’re More Than a Bank — <br className="hidden md:block" />
                We’re Your Growth Partner.
              </h2>

              <p className="text-[#35404E] text-[16px] md:text-[18px] leading-relaxed mb-10 pb-2 max-w-[480px]">
                Experience personalized banking that adapts to your goals —
                whether you’re saving, investing, or expanding your business. We
                go beyond transactions to build lasting financial confidence.
              </p>

              <div className="flex justify-start md:justify-end mt-4 md:mt-6">
                <button className="bg-[#007C92] w-[140px] h-[42px] text-white text-sm md:text-base font-medium rounded-xl hover:bg-[#006b80] transition duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Button aligned with image bottom */}
          </div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 flex items-end justify-end"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <img
              src={growthImg}
              alt="We’re Your Growth Partner"
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* =============Why Choose Us======== */}
      <section
        className="relative w-full min-h-[730px] bg-center flex items-center justify-center px-6 sm:px-8 md:px-10 py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${logs})`,
          backgroundSize: "90%", // smaller image
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "brightness(0.8)", // reduced brightness
        }}
      >
        {/* Centered Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto text-center flex flex-col items-center justify-center">
          {/* Heading + Description */}
          <div className="flex flex-col items-center justify-center mb-12 px-2">
            <h2 className="text-green-400 font-semibold text-[28px] md:text-[40px] leading-snug mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#000000] text-[15px] md:text-[18px] leading-relaxed max-w-[700px] text-center mx-auto mb-14">
              We’re redefining digital banking with a commitment to trust,
              technology, and transformation — built to help you grow smarter
              and faster.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-left px-4 sm:px-6 md:px-8">
            {/* Secure & Reliable */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-green-500 font-semibold text-lg">
                  Secure & Reliable
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                Your data and transactions are protected by industry-leading
                encryption and multi-layer authentication.
              </p>
            </div>

            {/* Fast Transactions */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-green-500 font-semibold text-lg">
                  Fast Transactions
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                Enjoy instant payments, real-time transfers, and automated
                processing designed for speed and convenience.
              </p>
            </div>

            {/* 24/7 Customer Support */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-green-500 font-semibold text-lg">
                  24/7 Customer Support
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                Our dedicated team is always available to assist you — anytime,
                anywhere, with personalized care.
              </p>
            </div>

            {/* Transparent & Fair Pricing */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <BadgeDollarSign className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-green-500 font-semibold text-lg">
                  Transparent & Fair Pricing
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                No hidden fees, no surprises — just clear, fair, and upfront
                pricing designed to help you stay in control.
              </p>
            </div>

            {/* Personalized Customer Support */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-green-400 font-semibold text-lg">
                  Personalized Customer Support
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                Our experts provide tailored financial guidance to help you make
                smarter and more confident decisions.
              </p>
            </div>

            {/* Fully Licensed & Regulated */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffffff] p-3 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-green-400 font-semibold text-lg">
                  Fully Licensed & Regulated
                </h3>
              </div>
              <p className="text-[#000000] text-sm leading-relaxed">
                We operate under strict financial regulations, ensuring safety,
                compliance, and transparency for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== */}
      <section
        className="relative w-full h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${related})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex gap-5 flex-col items-center justify-center text-center mb-[70px] text-white h-full px-6 md:px-20">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-snug mb-6 max-w-2xl">
            Commitment You Can Count On, <br className="hidden md:block" />
            Innovation You Can Trust.
          </h2>

          <p className="text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-2xl">
            Combining decades of expertise with innovative technology, we
            deliver secure, forward-thinking financial solutions that help you
            grow confidently — today and tomorrow.
          </p>

          <Link
            to="/login"
            className="bg-[#007C92] w-[140px] h-10 text-white text-sm px-8 py-2 rounded-lg hover:bg-[#006b80] transition duration-200"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* ===================== */}

      <div className="bg-white py-10 overflow-hidden">
        <div className="relative flex w-max animate-marquee gap-20 mt-20 items-center h-[250px]">
          {/* First Set */}
          <img src={logo1} alt="Logo 1" className="h-[50px] object-contain" />
          <img src={logo2} alt="Logo 2" className="h-[50px] object-contain" />
          <img src={logo3} alt="Logo 3" className="h-[50px] object-contain" />
          <img src={logo4} alt="Logo 4" className="h-[50px] object-contain" />
          <img src={logo5} alt="Logo 5" className="h-[50px] object-contain" />

          {/* Duplicate Set */}
          <img src={logo1} alt="Logo 1" className="h-[50px] object-contain" />
          <img src={logo2} alt="Logo 2" className="h-[50px] object-contain" />
          <img src={logo3} alt="Logo 3" className="h-[50px] object-contain" />
          <img src={logo4} alt="Logo 4" className="h-[50px] object-contain" />
          <img src={logo5} alt="Logo 5" className="h-[50px] object-contain" />
        </div>
      </div>

      {/* ========================= */}
      <div className="bg-[#A3C85E] h-[280px] flex gap-5 flex-col items-center justify-center text-center text-gray-900 py-6 px-4">
        <h3 className="font-bold text-[22px] mb-4">
          Ready to Experience Smarter Banking?
        </h3>
        <p className="text-[16px] max-w-[600px] mb-13 leading-relaxed">
          Join thousands of individuals and businesses who trust Credit Union
          for seamless, secure, and rewarding digital banking.
        </p>
        <Link
          to="/new-account"
          className="w-[150px] h-[42px] transition duration-300 rounded-lg bg-[#006A91] text-white text-sm font-medium hover:bg-[#005c7d] py-2"
        >
          Open An Account
        </Link>
      </div>
    </div>
  );
};

export default MainHome;
