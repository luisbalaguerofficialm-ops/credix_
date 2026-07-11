import React from "react";
import { useMemo, useState, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBigLeft, Globe, Info } from "lucide-react";
import TransactionStep from "../components/TransactionStep";

export default function FirstSepTransfer() {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);

  const [formData, setFormData] = useState({
    recipientCountry: "",
    bankName: "",
    recipientName: "",
    accountNumber: "",
    iban: "",
    swiftCode: "",
  });

  const isFormValid =
    formData.recipientCountry &&
    formData.bankName &&
    formData.recipientName &&
    formData.accountNumber;

  const handleContinue = () => {
    const transactionData = {
      recipientCountry: formData.recipientCountry,
      bankName: formData.bankName,
      recipientName: formData.recipientName,
      accountNumber: formData.accountNumber,
      iban: formData.iban,
      swiftCode: formData.swiftCode,
    };

    localStorage.setItem("transferData", JSON.stringify(transactionData));

    navigate("/second-step-transfer");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const countries = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
        flag: `https://flagcdn.com/w40/${country.value.toLowerCase()}.png`,
      }));
  }, []);

  return (
    <div className="bg-[#f3faff] min-h-screen flex flex-col font-sans antialiased text-[#001f29]">
      {/* --- Main Content Area --- */}
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[620px] bg-white rounded-2xl border border-[#bfc8cf] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          {/* Progress Stepper Grid Area */}
          <div className="px-6 sm:px-10 pt-8 pb-6 bg-[#e5f6ff]/40 border-b border-[#e2eaf1]">
            <TransactionStep currentStep={1} />
          </div>

          {/* Core Interactive User Form Section */}
          <div className="p-6 sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-extrabold text-[#111827] tracking-tight mb-2">
                Where are you sending money?
              </h1>
              <p className="text-sm text-[#54626d]">
                Enter the recipient details to initiate your secure transfer.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Country Selection Dropdown Context */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2">
                  Recipient's Country
                </label>

                <div className="relative">
                  <div className="absolute left-4 top-4 z-10 pointer-events-none">
                    <Globe className="w-5 h-5 text-[#64748b]" />
                  </div>

                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(option) => {
                      setSelectedCountry(option);

                      setFormData((prev) => ({
                        ...prev,
                        recipientCountry: option?.label || "",
                      }));
                    }}
                    isSearchable
                    placeholder="Search country..."
                    className="text-sm"
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "48px",
                        paddingLeft: "36px",
                        borderRadius: "12px",
                        borderColor: "#bfc8cf",
                        boxShadow: "none",
                      }),
                    }}
                    formatOptionLabel={(country) => (
                      <div className="flex items-center gap-3">
                        <img
                          src={country.flag}
                          alt={country.label}
                          className="w-6 h-4 rounded-sm shadow-sm"
                        />
                        <span>{country.label}</span>
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Account Number Field Block */}
              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  htmlFor="accountNumber"
                >
                  Account Number or IBAN
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      accountNumber: e.target.value,
                    })
                  }
                  placeholder="Enter recipient's account number or IBAN"
                  className="w-full h-12 px-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium"
                />
              </div>

              {/* Select Intermediary Local/Global Bank */}

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  htmlFor="bank"
                >
                  Recipient's Bank
                </label>
                <input
                  type="text"
                  id="bank"
                  placeholder=" bankName"
                  value={formData.bankName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bankName: e.target.value,
                    })
                  }
                  className="w-full h-12 px-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  htmlFor="recipientName"
                >
                  Full Recipient Name
                </label>
                <input
                  type="text"
                  id="recipientName"
                  placeholder="As it appears on their bank account"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientName: e.target.value,
                    })
                  }
                  className="w-full h-12 px-4 border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium"
                />
              </div>

              {/* Optional SWIFT / BIC Field Identification Layout */}
              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  htmlFor="swift"
                >
                  SWIFT / BIC Code (Optional)
                </label>
                <input
                  type="text"
                  id="swift"
                  value={formData.swiftCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      swiftCode: e.target.value,
                    })
                  }
                  placeholder="e.g. NEXUGB2L"
                  className="w-full h-12 px-4 bg-white border border-[#bfc8cf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00516f] focus:border-transparent transition-all text-sm font-medium"
                />
              </div>

              {/* Security Advisory / Information Notice Strip */}
              <div className="flex gap-3 p-4 bg-[#e5f6ff] rounded-xl border border-[#00516f]/10 mt-2">
                <Info className="w-5 h-5 text-[#006a91] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#40484e] font-medium">
                  Ensure the recipient's name exactly matches their bank record
                  to avoid delays in processing.
                </p>
              </div>

              {/* Explicit Submission Action Control Triggers */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
                <button
                  onClick={handleBack}
                  type="button"
                  className="w-full sm:w-auto px-8 h-12 font-semibold text-sm text-[#40484e] border border-[#bfc8cf] rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!isFormValid}
                  className={`w-full sm:w-auto px-12 h-12 rounded-xl text-white transition-all
    ${
      isFormValid
        ? "bg-[#00516f] hover:bg-[#003f57] cursor-pointer"
        : "bg-[#bfc8cf] cursor-not-allowed opacity-70"
    }`}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="flex mb-2 justify-center items-center">
            <Link
              to="/user-dashboard"
              className="inline-flex items-center gap-2 text-[#1a6f94] text-sm hover:underline"
            >
              <ArrowBigLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </main>

      {/* --- Footer Component Block --- */}
      <footer className="w-full bg-[#1c333d] text-white mt-auto">
        <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-3">
            <div className="text-xl font-bold tracking-tight">America Bank</div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-medium">
              Empowering your financial future with secure, global banking
              solutions.
            </p>
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
                Privacy Policy
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Support
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
                Security
              </span>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Security Center
              </a>
              <a
                className="text-slate-300 hover:text-white transition-colors"
                href="#"
              >
                Fraud Alert
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright statement context */}
        <div className="w-full bg-[#15272e] py-4 px-4 text-center border-t border-white/5">
          <p className="text-[11px] text-slate-400 font-medium">
            © 2026 Nexus Bank International. Member FDIC. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
