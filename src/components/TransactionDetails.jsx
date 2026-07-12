import React, { useEffect, useState } from "react";
import axiosClient from "../util/axiosClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Download,
  Copy,
  Briefcase,
  Building2,
  Headphones,
} from "lucide-react";

export default function TransactionDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const { data } = await axiosClient.get(`/api/transactions/${id}`);
      setTransaction(data.transaction);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(transaction?.transactionId || "");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Transaction not found.
      </div>
    );
  }

  const statusSteps = [
    "Pending",
    "Processing",
    "Funds Authorized",
    "Successful",
    "Failed",
    "Initiated from Web Portal",
  ];

  const currentStep = statusSteps.indexOf(transaction.status);

  const handBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#f4f9fc] text-[#001e2b] font-sans selection:bg-[#005a78] selection:text-white min-h-screen flex flex-col">
      {/* --- Main Area Content --- */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 flex-1 w-full">
        {/* Transaction Details Base Card */}
        <div className="bg-white rounded-lg shadow-xs border border-[#e1e9ef] overflow-hidden text-left">
          {/* Header Area Section */}
          <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-3
${
  transaction.status === "Successful"
    ? "bg-green-100 text-green-700"
    : transaction.status === "Pending"
      ? "bg-yellow-100 text-yellow-400"
      : transaction.status === "Processing"
        ? "bg-green-100 text-gray-700"
        : "bg-red-100 text-red-700"
}`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                {transaction.status}
              </div>
              <h1 className="text-4xl font-bold text-[#001e2b] tracking-tight">
                {transaction.type === "Deposit" ? "+" : "-"}$
                {transaction.amount.toLocaleString()}
              </h1>
              <p className="text-gray-500 text-sm mt-1">{transaction.type}</p>
            </div>
            <div className="flex flex-col md:items-end text-sm text-gray-500">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                Date & Time
              </span>
              <span className="text-[#001e2b] font-semibold text-base">
                {new Date(transaction.createdAt).toLocaleDateString()}
              </span>
              <span>
                {new Date(transaction.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>

          {/* Body Block Breakdown Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column Information */}
            <div className="space-y-8">
              {/* Sender Info block */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Sender Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-xs">Name</p>
                    <p className="text-[#001e2b] text-sm font-medium">
                      {transaction.user.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-[#001e2b] text-sm font-medium">
                      {transaction.user.email}
                    </p>
                  </div>
                </div>
              </section>

              {/* Recipient Details block */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Recipient Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="w-9 h-9 rounded-md bg-[#005a78] flex items-center justify-center text-white shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#001e2b] text-sm font-bold">
                        {transaction.bankName}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-1">
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <p className="text-[#001e2b] text-sm font-medium">
                        {transaction.recipientEmail}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Account Number</p>
                      <p className="text-[#001e2b] font-mono text-sm font-medium">
                        {transaction.accountNumber
                          ? transaction.accountNumber
                          : transaction.iban}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Name</p>
                      <p className="text-[#001e2b] text-sm font-medium">
                        {transaction.recipientName}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transaction Context Details block */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Transaction Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-xs">Description</p>
                    <p className="text-[#001e2b] text-sm font-medium leading-relaxed">
                      {transaction.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-xs">Type</p>
                      <p className="text-[#001e2b] text-sm font-medium">
                        {transaction.type}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Transaction ID</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-[#001e2b] font-mono text-sm font-medium select-all">
                        {transaction.transactionId}
                      </p>
                      <button
                        onClick={handleCopyId}
                        className="text-gray-400 hover:text-[#005a78] hover:bg-gray-100 p-1 rounded transition-all"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column Status Timeline and Category */}
            <div className="space-y-8">
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
                  Status History
                </h3>

                <div className="relative border-l-2 border-gray-100 pl-6 ml-3 space-y-6">
                  {statusSteps.map((step, index) => {
                    const Successful = index <= currentStep;

                    return (
                      <div key={step} className="relative">
                        <div
                          className={`absolute -left-[31px] top-0.5 z-10 w-4 h-4 rounded-full flex items-center justify-center ring-4 ring-white
              ${
                Successful
                  ? "bg-[#557a02] text-white"
                  : "bg-gray-200 text-transparent"
              }`}
                        >
                          {Successful && (
                            <Check className="w-2.5 h-2.5 stroke-[4]" />
                          )}
                        </div>

                        <div>
                          <p
                            className={`text-sm font-semibold ${
                              Successful ? "text-[#001e2b]" : "text-gray-400"
                            }`}
                          >
                            {step}
                          </p>

                          <p className="text-gray-400 text-xs mt-0.5">
                            {index <= currentStep
                              ? new Date(transaction.updatedAt).toLocaleString()
                              : "Pending"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Category Showcase Wrapper Box */}
              <div className="pt-2">
                <div className="bg-[#f0f7fc] p-5 rounded-lg border border-[#d2e4f0] space-y-2">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    Category
                  </p>
                  <div className="flex items-center gap-2.5 text-[#005a78]">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[#001e2b] text-sm font-semibold">
                      {transaction.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Actions Panel */}
          <div className="p-5 bg-gray-50 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handBack}
                className="px-4 py-2.5 border border-gray-200 bg-white text-gray-600 text-sm font-semibold rounded hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Support Banner Assistance Component */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between p-5 bg-white border border-[#e1e9ef] rounded-lg gap-4 text-left">
          <div className="flex items-center gap-4 text-center md:text-left w-full">
            <div className="w-10 h-10 bg-[#f0f7fc] text-[#005a78] rounded-full flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#001e2b] font-bold text-sm">
                Need help with this transfer?
              </h4>
              <p className="text-gray-400 text-xs mt-0.5">
                Our support team is available 24/7 for premium account holders.
              </p>
            </div>
          </div>
          <Link
            to="/profile-settingss"
            className="whitespace-nowrap w-full md:w-auto px-5 py-2 border border-gray-300 text-[#001e2b] text-sm font-semibold rounded-md hover:bg-gray-50 transition-all"
          >
            Contact Concierge
          </Link>
        </div>
      </main>
    </div>
  );
}
