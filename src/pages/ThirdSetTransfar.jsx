import React, { useEffect, useState } from "react";
import {
  Check,
  Info,
  ChevronRight,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnterPin from "../components/modals/EnterPin";
import { useNavigate } from "react-router-dom";
import TransactionStep from "../components/TransactionStep";

export default function ThirdSetTransfer() {
  const navigate = useNavigate();

  const [transferData, setTransferData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transferData")) || {};
    setTransferData(data);
  }, []);

  // ---------------- CONFIRM PIN & TRANSFER ----------------
  // Pass enteredPin from EnterPin
  const handleConfirmPin = async (transactionPin) => {
    setShowPinModal(false);

    try {
      setLoading(true);

      const payload = {
        recipientName: transferData.recipientName,
        recipientEmail: transferData.recipientEmail,
        bankName: transferData.bankName,
        recipientCountry: transferData.recipientCountry,
        accountNumber: transferData.accountNumber,
        amount: transferData.amount,
        iban: transferData.iban,
        swiftCode: transferData.swiftCode,
        narration: transferData.narration,
      };

      const { data } = await axiosClient.post("/api/transactions", {
        ...payload,
        transactionPin,
      });

      const result = data;

      toast.success(data.message);
      // clear transfar data after success
      localStorage.removeItem("transferData");

      navigate(`/transfer-successfully/${result.transaction.transactionId}`);
    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      console.log("Request payload:", {
        ...payload,
        transactionPin,
      });
      toast.error(error?.response?.data?.message || " transfer failed");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/second-step-transfer");
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] min-h-screen flex flex-col font-sans">
      {/* --- Global Utility & Header Navigation Section --- */}
      <div className="w-full bg-[#1c333d] py-2 px-4 sm:px-6 lg:px-8 hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-end gap-6 items-center">
          <span className="text-xs text-slate-300 font-medium hover:text-white cursor-pointer transition-colors">
            Personal Banking
          </span>
          <span className="text-xs text-slate-300 font-medium hover:text-white cursor-pointer transition-colors">
            Business Solutions
          </span>
          <span className="text-xs text-slate-300 font-medium hover:text-white cursor-pointer transition-colors">
            Wealth Management
          </span>
        </div>
      </div>

      {/* --- Main Content Dashboard Body Canvas --- */}
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="w-full max-w-[620px]">
          {/* Main Context Panel Content Wrapper Container */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#bfc8cf] overflow-hidden">
            {/* Steps Management Linear Progress Tracking Module */}
            <div className="px-6 sm:px-10 pt-8 pb-6 bg-[#e5f6ff]/40 border-b border-[#e2eaf1]">
              <TransactionStep currentStep={3} />
            </div>
            {/* Structured Financial Ledger Block */}
            <div className="p-6 sm:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-x1 font-extrabold text-[#001f29] tracking-tight">
                    Confirm Your Transfer
                  </h1>
                  <p className="text-sm text-[#54626d] font-medium mt-0.5">
                    Please review the transaction details before finalizing.
                  </p>
                </div>
              </div>

              {/* Parametric Data Rows Section Layout */}
              <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-sm text-[#54626d] font-medium">
                    Recipient Name
                  </span>
                  <span className="text-sm text-[#001f29] font-bold">
                    {transferData.recipientName}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-sm text-[#54626d] font-medium">
                    Account Number
                  </span>
                  <span className="text-sm text-[#001f29] font-mono font-bold">
                    {transferData.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-sm text-[#54626d] font-medium">
                    Bank
                  </span>
                  <span className="text-sm text-[#001f29] font-bold">
                    {transferData.bankName}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-sm text-[#54626d] font-medium">
                    Amount
                  </span>
                  <span className="text-sm text-[#001f29] font-bold">
                    ${Number(transferData.amount).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-sm text-[#54626d] font-medium">
                    Description
                  </span>
                  <span className="text-sm text-[#496801] font-bold">
                    {transferData.narration}
                  </span>
                </div>
              </div>

              {/* Total Aggregate Sum Highlight Section Box */}
              <div className="bg-[#e5f6ff] rounded-xl p-5 mt-6 flex justify-between items-center border border-[#00516f]/10">
                <span className="text-sm font-bold text-[#001f29]">
                  Total Amount
                </span>
                <span className="text-2xl font-black text-[#00516f] tracking-tight">
                  ${Number(transferData.amount).toLocaleString()}
                </span>
              </div>

              {/* Core System Context Notice Advisory Frame */}
              <div className="mt-6 text-left flex gap-3 p-4 bg-slate-50 rounded-xl border border-[#bfc8cf]/60">
                <Info className="w-7 h-7 text-[#54626d] shrink-0 mt-0.5" />
                <p className="text-xs text-[#54626d] leading-relaxed font-medium">
                  Funds will be transferred immediately. This action cannot be
                  undone. By clicking 'Confirm & Send', you agree to our terms
                  of service for domestic transfers.
                </p>
              </div>

              {/* Call-to-Action Interactive Buttons Context Group */}
              <div className="mt-8 flex flex-col sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={() => setShowPinModal(true)}
                  disabled={loading}
                  className="flex-1 p-3 h-12 bg-[#006a91] text-white rounded-xl font-semibold text-sm hover:bg-[#00516f]"
                >
                  {loading ? "Processing..." : "Confirm & Send"}
                </button>

                <button
                  onClick={handleBack}
                  type="button"
                  className="flex-1 w-9 h-12 bg-slate-100 text-[#40484e] rounded-xl font-semibold text-sm hover:bg-slate-200/70 transition-colors"
                >
                  Back to Step 2
                </button>
              </div>
            </div>
          </div>

          {/* Contextual Technical Support Reference Link Anchor */}
          <div className="mt-6 text-center">
            <a
              className="text-sm font-semibold text-[#00516f] inline-flex items-center gap-0.5 hover:underline"
              href="#"
            >
              Need help with this transfer?
              <ChevronRight className="w-4 h-4 mt-0.5" />
            </a>
          </div>
        </div>
      </main>

      {/* --- Global System Layout Core Footer Frame Context --- */}
      <footer className="w-full bg-[#1c333d] text-white ">
        <div className="max-w-8xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4 max-w-sm">
            <span className="text-xl font-bold tracking-tight block">
              Credit Unoin Bank
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              A global leader in digital banking solutions, committed to your
              financial security and growth through innovation.
            </p>
            <div className="flex gap-3 pt-2">
              <Globe className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <ShieldCheck className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6">
            <div className="flex flex-col space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Company
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Legal
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-xs col-span-2 sm:col-span-1">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Security
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Security Hub
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Identification Notice Block Context */}
        <div className="w-full bg-[#15272e] py-4 px-4 text-center border-t border-white/5">
          <span className="text-[11px] text-slate-400 font-medium">
            © 2026 Credit Bank . Member FDIC. Equal Housing Lender.
          </span>
        </div>
      </footer>
      {showPinModal && (
        <EnterPin
          onClose={() => showPinModal(false)}
          onConfirm={handleConfirmPin}
        />
      )}
    </div>
  );
}
