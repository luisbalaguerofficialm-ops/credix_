import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../util/axiosClient";

export default function TransferSuccessfully() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      navigate("/user-dashboard");
      return;
    }

    const fetchTransaction = async () => {
      try {
        const res = await axiosClient.get(`/api/transactions/${id}`);

        if (!res.data.success) {
          throw new Error(res.data.message || "Transaction not found");
        }

        setTransaction(res.data.transaction);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to load transaction",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id, navigate]);

  const handleBackToDashboard = () => {
    navigate("/user-dashboard");
  };

  const handleAnotherTransfer = () => {
    navigate("/first-step-transfer");
  };

  return (
    <div className="bg-[#f3faff] min-h-screen flex flex-col font-sans">
      {/* */}
      <main className="grow flex items-center justify-center py-12 md:py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl border border-[#bfc8cf]/60 p-6 md:p-12 text-center shadow-sm">
          {/* */}
          <div className="mb-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-20 h-19 rounded-full bg-[#c6ed7e] mb-6">
              <span className="text-2xl text-[#3b6600]">
                <CheckCircle2 className="w-10 h-11 rounded-md" />
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#001f29] mb-2">
              Transfer Successful
            </h1>
            <p className="text-sm text-[#40484e]">
              Your transfer was completed successfully.
            </p>
          </div>

          {/* */}
          <div className="bg-[#f4f4f4]/60 rounded-xl border border-[#bfc8cf]/30 p-5 md:p-8 text-left mb-8">
            <div className="flex flex-col gap-4">
              {/* */}
              <div className="border-b border-[#bfc8cf] pb-5 mb-1 flex justify-between items-end">
                <div>
                  <span className="text-xs font-semibold text-[#40484e] block uppercase tracking-wider mb-1">
                    Total Amount
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#00516f]">
                    {`$${Number(transaction?.amount || 0).toLocaleString()}`}
                  </span>
                </div>
                <span className="bg-[#ebf0c2] text-[#0e230a] px-3 py-1 rounded-full text-xs font-semibold mb-1">
                  {transaction?.status}
                </span>
              </div>

              {/* */}
              <div className="flex flex-col gap-6 text-medium text-[#001f29]">
                <div className=" flex justify-between">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Recipient Name
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction?.recipientName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Account Number
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction?.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Bank
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction?.bankName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Narration
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction?.description}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Date &amp; Time
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction?.createdAt &&
                      new Date(transaction.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="md:col-span-2 flex items-center justify-between bg-white border border-[#bfc8cf]/40 p-4 rounded-lg shadow-sm">
                  <div>
                    <span className="text-xs text-[#40484e] block mb-0.5">
                      Transaction ID
                    </span>
                    <span className="text-sm text-[#001f29] font-mono font-medium">
                      MCU-77291-TX-0092
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-[#ffdad6]/40 border border-[#ba1a1a]/20 rounded-xl p-5 mb-8 text-left flex items-start gap-4">
            <span className="material-symbols-outlined text-[#ba1a1a] mt-0.5 shrink-0">
              warning
            </span>
            <div className="grow">
              <p className="text-sm text-[#001f29] mb-2 leading-relaxed">
                If you did not authorize this transaction, please report it
                immediately to our security team.
              </p>
              <a
                className="text-xs font-bold text-[#ba1a1a] inline-flex items-center gap-1 hover:underline"
                href="#"
              >
                Report Transaction
                <span className="material-symbols-outlined text-sm font-bold">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBackToDashboard}
              className="bg-[#00516f] text-white font-semibold text-sm py-3.5 px-8 rounded-xl hover:opacity-90 transition-all shadow-sm"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleAnotherTransfer}
              className="bg-white border border-[#bfc8cf] text-[#00516f] font-semibold text-sm py-3.5 px-8 rounded-xl hover:bg-[#e5f6ff] transition-all"
            >
              Make Another Transfer
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
