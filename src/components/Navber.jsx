import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogIn, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 flex flex-row items-center rounded-lg font-medium transition-all duration-200
     ${
       isActive
         ? "bg-[#001736] text-white"
         : " hover:text-green-600 hover:bg-green-50 text-[#003853]"
     }`;

  return (
    <header className="w-full">
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-extrabold">
            <NavLink to="/" className="flex items-center gap-2">
              <Logo />
              <span className="truncate max-w-[140px] md:max-w-none">
                Credit Union
              </span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center text-left space-x-2">
            <NavLink to="/business" className={linkClass}>
              Business
            </NavLink>
            <NavLink to="/personal" className={linkClass}>
              Personal Banking
            </NavLink>
            <NavLink to="/about-us" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/loans" className={linkClass}>
              Loans & Credit
            </NavLink>
            <NavLink to="/credit-card" className={linkClass}>
              Credit & Debit Cards
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-2">
            <NavLink
              to="/tracking"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Track Parcel
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/about-us"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/global-network"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Global Network
            </NavLink>

            <NavLink
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="block bg-[#001736] text-white text-center px-6 py-3 rounded-lg font-bold mt-4"
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
