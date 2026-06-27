import React, { useEffect, useState } from "react";

import { IDLE_FETCHER, useParams } from "react-router-dom";
import axiosClient from "../util/axiosClient";

export default function TransferSuccessfully() {
  const { transactionId } = useParams();

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fectchTransaction = async () => {
      try {
        const res = await axiosClient.get(`/api/transactions/${transactionId}`);

        if (res.data.success) {
          setTransaction(res.data.transactionId);
        } else {
          setError("Transaction not found");
        }
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.messsage || error.messsage);
      } finally {
        setLoading(false);
      }
    };
    fectchTransaction()[transactionId];
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText("MCU-77291-TX-0092");
    alert("Transaction ID copied to clipboard!");
  };

  return (
    <div className="bg-[#f3faff] min-h-screen flex flex-col font-sans">
      {/* */}
      <main className="grow flex items-center justify-center py-12 md:py-16 px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl border border-[#bfc8cf]/60 p-6 md:p-12 text-center shadow-sm">
          {/* */}
          <div className="mb-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-22 h-19 rounded-full bg-[#c6ed7e] mb-6">
              <span
                className="material-symbols-outlined text-4xl text-[#3b6600]"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                check
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
            <div className="flex flex-col gap-5">
              {/* */}
              <div className="border-b border-[#bfc8cf] pb-5 mb-1 flex justify-between items-end">
                <div>
                  <span className="text-xs font-semibold text-[#40484e] block uppercase tracking-wider mb-1">
                    Total Amount
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#00516f]">
                    {transaction.amount.toLocalString()}
                  </span>
                </div>
                <span className="bg-[#c8f0c2] text-[#0e230a] px-3 py-1 rounded-full text-xs font-semibold mb-1">
                  {transaction.status}
                </span>
              </div>

              {/* */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Recipient Name
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction.recipientName}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Account Number
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction.accountNumber}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Bank
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {transaction.bankName}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Date &amp; Time
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold">
                    {new Date(transaction.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-xs text-[#40484e] block mb-0.5">
                    Narration
                  </span>
                  <span className="text-sm text-[#001f29] font-semibold italic">
                    {transaction.description}
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
                  <button
                    className="flex items-center gap-1.5 text-[#006a91] text-xs font-semibold hover:underline transition-all"
                    onClick={copyToClipboard}
                  >
                    <span className="material-symbols-outlined text-base">
                      content_copy
                    </span>
                    Copy
                  </button>
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
            <button className="bg-[#00516f] text-white font-semibold text-sm py-3.5 px-8 rounded-xl hover:opacity-90 transition-all shadow-sm">
              Back to Dashboard
            </button>
            <button className="bg-white border border-[#bfc8cf] text-[#00516f] font-semibold text-sm py-3.5 px-8 rounded-xl hover:bg-[#e5f6ff] transition-all">
              Download Receipt
            </button>
          </div>
        </div>
      </main>

      {/* */}
      <footer className="bg-[#1a3540] w-full mt-auto text-white py-8 border-t border-white/10">
        <div className="w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold">Meridian Credit Union</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/80">
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
          </div>
          <p className="text-xs text-white/60 text-center md:text-right">
            © 2026 Credit Union. Member NCUA. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
