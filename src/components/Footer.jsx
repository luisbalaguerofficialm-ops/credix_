import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/america_bank_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#234552] text-white flex flex-col justify-center items-center px-0 md:px-5">
      {/* Centered container so everything stays inside on mobile */}
      <div className="max-w-6xl">
        {/* ===== Top Section ===== */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 items-start mt-[50px] md:mt-5 text-center md:text-left">
          {/* === Logo + Description === */}
          <div className="flex flex-col items-center md:items-start gap-5 justify-center text-center md:text-left pt-6 md:pt-0">
            <img
              src={logo}
              alt="Credit Union Logo"
              className="w-40 h-auto mb-4 mt-6 md:mt-3 mx-auto md:mx-0"
            />
            <p className="text-sm leading-relaxed text-gray-300 max-w-[260px] mb-6 mx-auto md:mx-0">
              From individuals to growing businesses, we provide secure
              financial tools that simplify transactions, encourage smart
              saving, and accelerate growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="border border-gray-400 rounded-md p-2 hover:bg-[#007C92] hover:border-[#007C92] transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="border border-gray-400 rounded-md p-2 hover:bg-[#007C92] hover:border-[#007C92] transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="border border-gray-400 rounded-md p-2 hover:bg-[#007C92] hover:border-[#007C92] transition"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          {/* === Company === */}
          <div className="flex flex-col items-center gap-4 md:items-start justify-center">
            <h3 className="font-bold mb-4 text-white text-lg">Company</h3>
            <div className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </div>
          </div>

          {/* === Banking Services === */}
          <div className="flex flex-col items-center gap-5 md:items-start justify-center">
            <h3 className="font-bold mb-4 text-white text-lg">
               Services
            </h3>
            <div className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-white">
                  Personal Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Business Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Loans & Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cards & Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Savings & Investments
                </a>
              </li>
            </div>
          </div>

          {/* === Resources === */}
          <div className="flex flex-col items-center gap-5 md:items-start justify-center">
            <h3 className="font-semibold mb-4 text-white text-lg">Resources</h3>
            <div className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </div>
          </div>
        </div>

        {/* ===== Divider & Copyright ===== */}
        <div className="border-t border-gray-500 pt-6 mt-10 text-center text-sm text-green-400 w-full">
          Copyright © {new Date().getFullYear()} America Bank. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
