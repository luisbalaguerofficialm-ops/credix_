import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";
import Footer from "../components/Footer";
// import ChatWidget from "../components/ChatWidget";

export default function PublicLayout() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Chat Widget */}
      {/* <ChatWidget /> */}
    </div>
  );
}
