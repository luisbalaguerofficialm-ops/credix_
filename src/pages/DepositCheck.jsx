import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";
import axiosClient from "../util/axiosClient";

export default function DepositCheck() {
  const frontRef = useRef();
  const backRef = useRef();
  const [form, setForm] = useState({
    amount: "",
    accountNumber: "",
    accountType: "",
  });

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const getDeposits = async () => {
    try {
      setFetching(true);

      const { data } = await axiosClient.get("/api/check-deposits");

      setDeposits(data.deposits);
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    getDeposits();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitDeposit = async (e) => {
    e.preventDefault();

    if (!frontImage || !backImage) {
      return toast.error("Upload both images.");
    }

    try {
      if (!form.amount || !form.accountNumber || !form.accountType) {
        return toast.error("Please complete all fields.");
      }
      setLoading(true);

      const formData = new FormData();

      formData.append("amount", form.amount);
      formData.append("accountNumber", form.accountNumber);
      formData.append("accountType", form.accountType);

      formData.append("frontImage", frontImage);
      formData.append("backImage", backImage);

      const { data } = await axiosClient.post("/api/check-deposits", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(data.message);

      frontRef.current.value = "";
      backRef.current.value = "";

      setForm({
        amount: "",
        accountNumber: "",
        accountType: "",
      });

      setFrontImage(null);
      setBackImage(null);

      getDeposits();
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to submit deposit.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Approved":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-[#F4F9FC] text-[#001F2A] font-sans min-h-screen flex flex-col">
      <main className="max-w-[1200px] w-full mx-auto px-6 py-10 flex-grow">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#004B6E] mb-2">
            Deposit Check
          </h1>
          <p className="text-[#556370] text-sm">
            Securely deposit your personal or business checks from your
            computer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Deposit Form & History */}
          <div className="lg:col-span-8 space-y-6">
            {/* Deposit Form Card */}
            <section className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h2 className="text-lg font-bold text-[#1C3540] mb-6">
                Enter Deposit Details
              </h2>

              <form className="space-y-6" onSubmit={submitDeposit}>
                <div className="flex gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-[#556370] uppercase tracking-wider mb-2">
                      Deposit To
                    </label>
                    <div className="relative">
                      <select
                        name="accountType"
                        value={form.accountType}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#D1DBE0] rounded-lg p-3.5 text-sm text-[#002230] outline-none appearance-none cursor-pointer pr-10 focus:border-[#004B6E]"
                      >
                        <option value="">Select Account</option>

                        <option value="Business Checking">
                          Business Checking (...4829)
                        </option>

                        <option value="Corporate Savings">
                          Corporate Savings (...1102)
                        </option>

                        <option value="Payroll Reserve">
                          Payroll Reserve (...9934)
                        </option>
                      </select>
                      <svg
                        className="w-4 h-4 text-[#718096] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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

                  <div>
                    <label className="block text-[10px] font-bold text-[#556370] uppercase tracking-wider mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096] text-sm font-medium">
                        $
                      </span>
                      <input
                        className="w-full bg-white border border-[#D1DBE0] rounded-lg py-3.5 pl-8 pr-4 text-sm text-[#002230] outline-none placeholder-[#A0AEC0] focus:border-[#004B6E]"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        type="number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#556370] uppercase tracking-wider mb-2">
                      Account Number
                    </label>
                    <input
                      className="w-full bg-white border border-[#D1DBE0] rounded-lg py-3.5 pl-8 pr-4 text-sm text-[#002230] outline-none placeholder-[#A0AEC0] focus:border-[#004B6E]"
                      name="accountNumber"
                      value={form.accountNumber}
                      onChange={handleChange}
                      placeholder="********"
                      type="text"
                    />
                  </div>
                </div>

                {/* Check Image Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <div className="border-2 border-dashed border-[#CBD5E1] rounded-xl h-44 overflow-hidden relative">
                      <input
                        type="file"
                        id="frontImage"
                        accept="image/*"
                        ref={frontRef}
                        className="hidden"
                        onChange={(e) => setFrontImage(e.target.files[0])}
                      />

                      <label
                        htmlFor="frontImage"
                        className="w-full h-full flex items-center justify-center cursor-pointer"
                      >
                        {frontImage ? (
                          <img
                            src={URL.createObjectURL(frontImage)}
                            alt="Front Check"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center px-4">
                            <span className="font-semibold text-sm text-[#002230]">
                              Click to upload front image
                            </span>

                            <p className="text-xs text-[#718096] mt-2">
                              Ensure all corners are visible and lighting is
                              clear.
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Back of Check */}
                  <div className="border-2 border-dashed border-[#CBD5E1] rounded-xl h-44 overflow-hidden relative">
                    <input
                      type="file"
                      id="backImage"
                      accept="image/*"
                      ref={backRef}
                      className="hidden"
                      onChange={(e) => setBackImage(e.target.files[0])}
                    />

                    <label
                      htmlFor="backImage"
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      {backImage ? (
                        <img
                          src={URL.createObjectURL(backImage)}
                          alt="Back Check"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center px-4">
                          <span className="font-semibold text-sm text-[#002230]">
                            Click to upload back image
                          </span>
                          <p className="text-xs text-[#718096] mt-2">
                            Must be endorsed with "For Mobile Deposit Only".
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="pt-4 ">
                  <button
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg text-white font-bold ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#004B6E] hover:bg-[#003853]"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit Deposit Request"}
                  </button>
                </div>
              </form>
            </section>

            {/* Deposit History Table Section */}
            <section className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#E2E8F0] flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#004B6E]">
                  Deposit History
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EDF6FA] text-[#556370] text-xs font-semibold">
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Date
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Account
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Amount
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0]">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b border-[#E2E8F0] text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-sm text-[#002230]">
                    {fetching ? (
                      <tr>
                        <td colSpan="5" className="text-center py-10">
                          Loading...
                        </td>
                      </tr>
                    ) : deposits.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-10">
                          No deposits found.
                        </td>
                      </tr>
                    ) : (
                      deposits.map((deposit) => (
                        <tr
                          key={deposit._id}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            {" "}
                            {new Date(deposit.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 font-medium text-[#556370]">
                            {deposit.accountNumber}
                          </td>
                          <td className="px-6 py-4 font-bold text-[#004B6E]">
                            ${Number(deposit.amount).toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                deposit.status,
                              )}`}
                            >
                              {deposit.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <a
                              className="text-[#718096] hover:text-[#004B6E] mx-auto"
                              href={deposit.frontImage}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column: Instructions & QR Mobile Framework */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mobile Scan Promotion Section */}
            <section className="bg-[#1C3540] p-6 rounded-xl text-white shadow-sm text-center relative overflow-hidden">
              <h3 className="text-lg font-bold mb-3">Prefer Mobile?</h3>
              <p className="text-xs text-[#BCE6FF] opacity-90 mb-6 leading-relaxed">
                Scan this code with your smartphone to continue this deposit on
                the FinCorp mobile app for a faster capture experience.
              </p>

              {/* Minimal Mock QR Code Area Box */}
              <div className="bg-white p-4 rounded-xl w-40 h-40 mx-auto flex items-center justify-center border-4 border-[#12252E] shadow-sm">
                <div className="w-32 h-32 bg-[#E2E8F0] rounded flex flex-col items-center justify-center text-black p-2 border-2 border-black relative">
                  {/* Styled Nested Box Structure Imitating Functional Banking Layout Elements */}
                  <div className="w-full h-full border-4 border-black relative bg-white flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#004B6E] rounded-md shadow-sm border border-white flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D2FA82]">
                <span className="w-2 h-2 rounded-full bg-[#D2FA82] animate-pulse"></span>
                Secure Mobile Sync Active
              </div>
            </section>

            {/* Instruction Steps Area Block */}
            <section className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-md font-bold text-[#1C3540] mb-6">
                Instructions
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Endorse your check
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Sign the back and write "For Mobile Deposit Only" below
                      your signature.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Capture Front & Back
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Upload high-resolution scans or photos. JPG or PNG files
                      accepted up to 10MB.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#004B6E] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1C3540]">
                      Keep the check
                    </h4>
                    <p className="text-xs text-[#556370] mt-1">
                      Store the physical check securely for 14 days before
                      shredding it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitations Notice Container banner */}
              <div className="mt-8 p-4 bg-[#EDF6FA] border border-[#D0E3ED] rounded-xl flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#004B6E] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-xs text-[#556370] leading-normal">
                  <strong className="text-[#004B6E] block font-bold mb-0.5">
                    Limits & Clearing
                  </strong>
                  Standard daily limit is $5,000.00. Funds are typically
                  available within 1-2 business days pending verification.
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Global Footer Block */}
      <footer className="w-full text-left py-8 mt-auto bg-[#1C3540] text-white border-t border-[#12252E]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-1">
            <span className="font-bold text-lg">FinCorp Global</span>
            <p className="text-xs text-[#BCE6FF] opacity-70">
              Empowering growth with secure, stable, and clear financial
              solutions for individuals and enterprises worldwide.
            </p>
            <p className="text-[11px] text-[#BCE6FF] opacity-50 pt-2">
              © 2026 Banking Solutions. Internal Use Only.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-xs text-[#BCE6FF] opacity-80">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Security Standards
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Compliance
            </a>
            <a className="hover:text-white transition-colors" href="#">
              System Status
            </a>
          </div>
        </div>
      </footer>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
