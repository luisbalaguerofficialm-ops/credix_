import { ArrowLeft } from "lucide-react";
import React from "react";

const TransactionHistory = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-20 mb-5 items-center text-center min-h-screen p-4 md:px-8 bg-gray-50">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center px-6 py-6">
        <div>
          <div className=" flex gap-2">
            <Link to="/Dashboard">
              <ArrowLeft size={18} className="text-gray-600 w-9 h-9" />
            </Link>
            <h1 className="text-2xl text-[#007C92] font-bold">
              Transaction History
            </h1>
          </div>
          <p className="text-gray-500">View all your account activities</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405M19 13V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6m12 6a2 2 0 01-2 2H9a2 2 0 01-2-2"
              />
            </svg>
          </button>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </header>

      {/* Search, Filters, Export */}
      <section className="bg-white rounded-lg border w-full h-55 max-w-6xl shadow border-gray-200 p-8 md:p-10 mb-32 md:mb-40 flex flex-col items-center justify-center text-center mx-auto">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 w-full md:w-100 h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by recipients or transaction ID"
              className="w-full focus:outline-none text-left"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto justify-center">
            <select className="border border-gray-300 w-70 rounded-lg p-2 h-10 focus:ring-2 focus:ring-[#007C92] text-gray-600">
              <option>All Types</option>
              <option>Transfer</option>
              <option>Deposit</option>
            </select>

            <select className="border border-gray-300 rounded-lg w-60 p-2 h-10 focus:ring-2 focus:ring-[#007C92] text-gray-600">
              <option>All Time</option>
              <option>Today</option>
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap justify-start gap-4 mt-10 md:mt-12 mb-8 w-full md:w-100">
          <button className="flex items-center justify-center w-45 h-10 gap-3 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
            Export CSV
          </button>

          <button className="flex items-center justify-center w-45 h-10 gap-3 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20h9M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z"
              />
            </svg>
            Export PDF
          </button>
        </div>
      </section>

      {/* Transactions Table */}
      <section className="bg-white border border-gray-300 rounded-lg w-full max-w-6xl overflow-x-auto shadow">
        {/* Make the table scrollable on mobile */}
        <div className="w-full min-w-180.5 sm:min-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200">
          <table className="w-full text-left text-gray-700 border-b h-46 text-medium md:text-base">
            <thead className="bg-gray-300 h-15 text-[#007C92] font-semibold">
              <tr>
                <th className="py-4 md:py-9 px-5 md:px-7 whitespace-nowrap">
                  Transaction ID
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Type
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Recipient
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Amount
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Status
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Date & Time
                </th>
                <th className="py-4 md:py-10 px-5 md:px-7 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3].map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 md:py-5 px-3 md:px-5 whitespace-nowrap">
                    TXN176125347028{i}
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 flex items-center gap-2 whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 ${
                        i === 2 ? "text-green-500" : "text-red-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          i === 2
                            ? "M7 14l-4-4m0 0l4-4m-4 4h18"
                            : "M17 10l4 4m0 0l-4 4m4-4H3"
                        }
                      />
                    </svg>
                    {i === 2 ? "Deposit" : "Transfer"}
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 whitespace-nowrap">
                    {i === 0 ? "Mike John" : "Davido John"}
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 font-medium whitespace-nowrap">
                    +₦400,000
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-sm md:text-medium font-semibold ${
                        i === 0
                          ? "bg-[#E6F9F5] text-[#FF9F10]"
                          : "bg-[#E6F9F5] text-[#007C92]"
                      }`}
                    >
                      {i === 0 ? "Pending" : "Completed"}
                    </span>
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 whitespace-nowrap">
                    10/23/2025, 10:30:04 PM
                  </td>
                  <td className="py-3 md:py-5 px-3 md:px-5 whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="6" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row h-11 justify-between items-center text-medium md:text-medium text-[#007C92] border-t p-5 md:p-10 gap-3 sm:gap-2">
          <p>Showing 4 of 50 Transactions</p>
          <div className="flex gap-3">
            <button className="px-4 md:px-3 w-10 h-7 py-1 border rounded-lg hover:bg-gray-400">
              «
            </button>
            <button className="px-2 md:px-3 py-1 w-10 h-7 border rounded-lg hover:bg-gray-400">
              »
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransactionHistory;
