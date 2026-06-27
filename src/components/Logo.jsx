import React from "react";
import logo from "../assets/credit-union.jpg";

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="Credit Union Logo" className="w-20 h-15" />
    </div>
  );
}
