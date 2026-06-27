import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /> */}

      {/* Right Section */}
      <div className="flex flex-col flex-1 ">
        {/* Page Content */}
        <main className="flex-1  p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
