import React, { useState, useEffect } from "react";
import axiosClient from "../util/axiosClient";
import { Trash2, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AllTransactionHistory() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const [filters, setFilters] = useState({
    type: "All Types",
    status: "All Status",
    dateRange: "Last Month",
    search: "",
    from: "",
    to: "",
  });

  const getTransactions = async () => {
    try {
      setLoading(true);

      const { data } = await axiosClient.get("/api/transactions", {
        params: {
          page,
          limit: 4,
          ...filters,
        },
      });

      setTransactions(data.transactions);
      setPagination(data.pagination);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [page, filters]);

  const deleteTransaction = async (id) => {
    try {
      setDeleting(true);

      const { data } = await axiosClient.delete(`/api/transactions/${id}`);

      if (data.success) {
        toast.success(data.message || "Transaction deleted successfully");

        setShowDeleteModal(false);
        setSelectedTransaction(null);

        // Refresh transactions
        await getTransactions();
      }
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || "Failed to delete transaction",
      );
    } finally {
      setDeleting(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <div className="bg-[#F4F8FA] text-[#001F2A] text-left font-sans min-h-screen flex flex-col">
        {/* Main Container Wrapper */}
        <div className="flex-grow w-full max-w-[1230px] mx-auto px-6 py-10">
          {/* Upper Title Section */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#004B6E] mb-1">
                Transactions
              </h1>
              <p className="text-xs font-semibold text-[#556370]">
                Checking Account •••• 4829
              </p>
            </div>
            <button
              onClick={handleBack}
              className="inline-flex hover:border-[#004B6E] px-4 py-2 border border-[#CBD5E1] bg-white rounded-lg text-xs font-bold text-[#556370] hover:bg-slate-100 transition-colors"
            >
              Back
            </button>
          </div>

          {/* Filter Configuration Controls */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 items-end">
              <div className="space-y-1.5 lg:col-span-3">
                <label className="text-xs font-bold text-[#556370]">
                  Date Range
                </label>
                <div className="relative">
                  <select
                    className="w-full p-2.5 pl-9 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]"
                    value={filters.dateRange}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        dateRange: e.target.value,
                      })
                    }
                  >
                    <option>Last Month</option>
                    <option>Last Two Weeks</option>
                    <option>Last Week</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>This Year</option>
                    <option>Last Year</option>
                  </select>
                  <svg
                    className="w-4 h-4 text-[#556370] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-1.5 lg:col-span-2">
                <label className="text-xs font-bold text-[#556370]">Type</label>
                <div className="relative">
                  <select
                    className="w-full p-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]"
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        type: e.target.value,
                      })
                    }
                  >
                    <option>All Types</option>
                    <option>Transfer</option>
                    <option>Deposit</option>
                    <option>Withdrawal</option>
                    <option>Purchase</option>
                    <option>Subscription</option>
                  </select>
                  <svg
                    className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-1.5 lg:col-span-2">
                <label className="text-xs font-bold text-[#556370]">
                  Status
                </label>
                <div className="relative">
                  <select
                    className="w-full p-2.5 text-xs font-semibold bg-white border border-[#CBD5E1] rounded-lg text-[#002230] outline-none appearance-none cursor-pointer focus:border-[#004B6E]"
                    value={filters.status}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>All Status</option>
                    <option>Successful</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                  <svg
                    className="w-3.5 h-3.5 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History Workspace Table */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm  overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#EDF6FA] border-b border-[#DCDFE4]">
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Description
                    </th>
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Type
                    </th>
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Status
                    </th>
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Amount
                    </th>
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Date
                    </th>
                    <th className="px-5 py-3 text-xs font-bold text-[#556370]">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F4F8]">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-10 text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : transactions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-10 text-center">
                        No transactions found.
                      </td>
                    </tr>
                  ) : (
                    transactions.map((transaction) => (
                      <tr
                        key={transaction._id}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#EDF6FA] flex items-center justify-center text-[#004B6E]">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-[#001F2A]">
                              {transaction.description}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-xs font-medium text-[#556370]">
                          {transaction.type}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`font-semibold text-xs

${
  transaction.status === "Successful"
    ? "text-green-600"
    : transaction.status === "Pending"
      ? "text-yellow-600"
      : "text-red-600"
}
`}
                          >
                            <span>{transaction.status}</span>
                          </span>
                        </td>
                        <td
                          className={`px-5 py-4 font-bold

${transaction.type === "Deposit" ? "text-green-600" : "text-red-600"}
`}
                        >
                          {transaction.type === "Deposit" ? "+" : "-"}$
                          {transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-xs font-semibold text-[#001F2A]">
                            {new Date(
                              transaction.createdAt,
                            ).toLocaleDateString()}
                          </div>
                          <div className="text-[10px] text-[#8A99A8]">
                            {new Date(
                              transaction.createdAt,
                            ).toLocaleTimeString()}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                navigate(
                                  `/transaction-details/${transaction._id}`,
                                )
                              }
                              className="text-[#1d87c5] hover:underline font-semibold"
                            >
                              View
                            </button>

                            <button
                              onClick={() => {
                                setSelectedTransaction(transaction._id);
                                setShowDeleteModal(true);
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination Navigation */}
            <div className="px-5 py-4 border-t border-[#E2E8F0] bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs font-semibold text-[#556370]">
                Showing{" "}
                {transactions.length === 0
                  ? 0
                  : (page - 1) * pagination.limit + 1}
                -{Math.min(page * pagination.limit, pagination.total)} of{" "}
                {pagination.total} transactions
              </p>

              <div className="flex items-center gap-2">
                {/* Previous */}
                <button
                  disabled={!pagination.hasPrevPage}
                  onClick={() => setPage((prev) => prev - 1)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all
      ${
        pagination.hasPrevPage
          ? "border border-[#6396d4] text-[#556370] hover:bg-slate-100"
          : "border border-gray-200 text-gray-300 cursor-not-allowed"
      }`}
                >
                  Previous
                </button>

                {/* Dynamic Page Numbers */}
                {Array.from(
                  { length: pagination.totalPages || 0 },
                  (_, index) => {
                    const pageNumber = index + 1;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`w-9 h-9 rounded-md text-sm font-bold transition-all
          ${
            page === pageNumber
              ? "bg-[#004B6E] text-white"
              : "text-[#556370] hover:bg-slate-100"
          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  },
                )}

                {/* Next */}
                <button
                  disabled={!pagination.hasNextPage}
                  onClick={() => setPage((prev) => prev + 1)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all
      ${
        pagination.hasNextPage
          ? "border border-[#608dc4] text-[#556370] hover:bg-slate-100"
          : "border border-gray-200 text-gray-300 cursor-not-allowed"
      }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Informational Analytics Banner */}
          <section className="mt-8 relative overflow-hidden bg-[#152B35] rounded-xl p-6 text-white min-h-[160px] flex flex-col justify-end shadow-sm">
            {/* Decorative Graph Grid Mesh Overlay */}
            <div className="absolute top-0 right-0 w-80 h-full opacity-20 transform translate-x-10 pointer-events-none hidden md:block">
              <div className="w-full h-full border-b border-r border-dashed border-white/40 flex items-end p-4 gap-2">
                <div className="w-8 bg-white h-1/4 rounded-t-sm" />
                <div className="w-8 bg-white h-2/5 rounded-t-sm" />
                <div className="w-8 bg-white h-3/5 rounded-t-sm" />
                <div className="w-8 bg-white h-1/2 rounded-t-sm" />
                <div className="w-8 bg-white h-4/5 rounded-t-sm" />
              </div>
            </div>

            <div className="relative z-10 max-w-xl space-y-1">
              <h4 className="text-md font-bold">Maximize Your Savings</h4>
              <p className="text-xs text-[#BCE6FF] opacity-80 pb-3 leading-relaxed">
                Our high-interest savings accounts help your money grow faster.
                Speak with an advisor today.
              </p>
              <a
                className="text-[#D2FA82] text-xs font-bold flex items-center gap-1 hover:underline"
                href="#"
              >
                Learn More <span>→</span>
              </a>
            </div>
          </section>
        </div>

        {/* Global Application Footer */}
        <footer className="w-full py-8 bg-[#1A303B] text-white mt-12">
          <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <span className="font-bold text-md">America Bank</span>
              <p className="text-xs text-[#BCE6FF] opacity-70">
                Secure banking for the modern age. Member-focused,
                community-driven.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#BCE6FF] opacity-80">
                <a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-white transition-colors" href="#">
                  Security
                </a>
                <a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
                <a className="hover:text-white transition-colors" href="#">
                  Legal Disclosures
                </a>
              </nav>
              <p className="text-[11px] text-[#BCE6FF] opacity-50 md:text-right">
                © 2026 Credit Union. Member NCUA. Equal Housing Lender.
              </p>
            </div>
          </div>
        </footer>
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-8 w-8 text-red-600" />
                </div>
              </div>

              <h2 className="mt-5 text-center text-2xl font-bold text-[#001F2A]">
                Delete Transaction?
              </h2>

              <p className="mt-3 text-center text-sm text-gray-600">
                Are you sure you want to permanently delete this transaction?
                <br />
                This action cannot be undone.
              </p>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedTransaction(null);
                  }}
                  disabled={deleting}
                  className="flex-1 rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  onClick={() => deleteTransaction(selectedTransaction)}
                  disabled={deleting}
                  className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {deleting ? (
                    <>
                      <RefreshCw className="w-6 h-6 animate-spin" />
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
