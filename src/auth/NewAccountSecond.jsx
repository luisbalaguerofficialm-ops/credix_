import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  CircleHelp,
  ShieldCheck,
  BadgeCheck,
  Phone,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { State, City } from "country-state-city";
import RegistrationStepper from "../components/RegistrationStepper";

export default function NewAccountSecond() {
  const navigate = useNavigate();

  const currentStep = 2;
  const choosedAccount = localStorage.getItem("choosedAccount");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    socialSecurityNumber: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    accountType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordsMatch = formData.password === formData.confirmPassword;

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.username.trim() &&
    formData.socialSecurityNumber.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.password.trim() &&
    formData.confirmPassword.trim() &&
    passwordsMatch &&
    formData.address.trim() &&
    formData.state &&
    formData.city &&
    formData.zipcode.trim();
  formData.accountType;

  const handleContinue = () => {
    if (!isFormValid) return;

    localStorage.setItem(
      "registrationData",
      JSON.stringify({
        ...formData,
        choosedAccount,
      }),
    );

    navigate("/new-account-kyc");
  };

  // HNADLE BACK BUTTON
  const handleBack = () => {
    navigate("/new-account");
  };
  const usStates = State.getStatesOfCountry("US");
  const cities = formData.state
    ? City.getCitiesOfState("US", formData.state)
    : [];
  return (
    <div className="min-h-screen bg-[#eef3f6] flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 h-[72px]">
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="text-[20px] font-bold text-[#00516f]">
              Credit Union
            </h1>
          </div>
          <button className="flex items-center gap-2 text-[#40484e] hover:text-[#00516f] transition">
            <CircleHelp size={20} />
            <span className="font-medium">Next and Exit</span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 pt-[110px] pb-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-center mb-14">
            <RegistrationStepper currentStep={2} />
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT PANEL */}
            <div className="col-span-8">
              <div className="bg-white rounded-xl border border-[#c8d0d5] p-12 min-h-[760px]">
                <div className="mb-10">
                  <h2 className="text-[32px] font-semibold text-[#00516f] mb-3">
                    Tell us about yourself
                  </h2>

                  <p className="text-[#50575d] text-lg">
                    We need a few more details to secure your account and comply
                    with federal regulations.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 font-medium">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="As it appears on your ID"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="As it appears on your ID"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">
                        User Name
                      </label>

                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Choose a unique username"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">
                        Social Security Number
                      </label>

                      <input
                        type="text"
                        name="socialSecurityNumber"
                        value={formData.socialSecurityNumber}
                        onChange={handleChange}
                        placeholder="SSN"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 font-medium">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Password</label>

                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="*******"
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="*******"
                        className={`w-full h-14 px-4 bg-[#f5f7f9] rounded-md border ${
                          formData.confirmPassword &&
                          formData.password !== formData.confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#c8d0d5]"
                        }`}
                      />

                      {formData.confirmPassword &&
                        formData.password !== formData.confirmPassword && (
                          <p className="text-red-500 text-sm mt-2">
                            Passwords do not match.
                          </p>
                        )}

                      {formData.confirmPassword &&
                        formData.password === formData.confirmPassword && (
                          <p className="text-green-600 text-sm mt-2">
                            ✓ Passwords match.
                          </p>
                        )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Residential Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street Address (No P.O. Boxes)"
                      className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="col-span-1">
                      <label className="block mb-2 font-medium">State</label>

                      <select
                        name="state"
                        value={formData.state}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            state: e.target.value,
                            city: "",
                          }));
                        }}
                        className="w-50 h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      >
                        <option value="">Select State</option>

                        {usStates.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-3">
                      <label className="block mb-2 font-medium">City</label>

                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!formData.state}
                        className="w-50 h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      >
                        <option value="">Select City</option>

                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="block mb-2 font-medium">Zip Code</label>

                      <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="w-full h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      />
                    </div>

                    <div className="col-span-3">
                      <label className="block mb-2 font-medium">
                        Account Type
                      </label>

                      <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        className="w-50 h-14 px-4 bg-[#f5f7f9] border border-[#c8d0d5] rounded-md"
                      >
                        <option value="">Select account type</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-[#c8d0d5] pt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="h-14 px-8 border border-[#00516f] rounded-md text-[#00516f] hover:bg-[#00516f] hover:text-white transition flex items-center gap-2"
                    >
                      <ArrowLeft size={18} />
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleContinue}
                      disabled={!isFormValid}
                      className={`w-[220px] h-14 rounded-md flex items-center justify-center gap-2 transition-colors ${
                        isFormValid
                          ? "bg-[#006d94] hover:bg-[#005a7d] text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="col-span-4 space-y-6">
              <div className=" flex flex-col text-left bg-[#1f4b59] rounded-xl p-8 text-white">
                <ShieldCheck size={42} className="text-[#c9f081] mb-6" />

                <h3 className="text-3xl font-semibold mb-5">
                  Your safety is our priority
                </h3>

                <p className="text-white/90 mb-6">
                  We use bank-level 256-bit encryption to protect your data.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <BadgeCheck size={18} className="text-[#c9f081]" />
                    NCUA Insured
                  </li>

                  <li className="flex items-center gap-3">
                    <BadgeCheck size={18} className="text-[#c9f081]" />
                    SOC2 Type II Compliant
                  </li>

                  <li className="flex items-center gap-3">
                    <BadgeCheck size={18} className="text-[#c9f081]" />
                    24/7 Fraud Monitoring
                  </li>
                </ul>
              </div>
              {/* <!-- Help Card --> */}
              <div className="bg-[#e5f6ff] p-8 rounded-xl border border-[#bfc8cf]">
                <h3 className="font-headline-sm text-headline-sm text-[#00516f] mb-4">
                  Need help?
                </h3>
                <p className="font-body-md text-body-md text-[#40484e] mb-6">
                  Our membership specialists are available to guide you through
                  the process.
                </p>
                <div className="space-y-4">
                  <a
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-[#bfc8cf] hover:border-[#00516f] transition-colors"
                    href="tel:18005550199"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c6ed7e] flex items-center justify-center text-[#4d6c06]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-[#001f29]">
                        1-800-555-0199
                      </p>
                      <p className="text-xs text-[#40484e]">
                        Mon-Fri, 8am-8pm EST
                      </p>
                    </div>
                  </a>
                  <button className="w-full flex items-center gap-4 p-4 rounded-lg bg-white border border-[#bfc8cf] hover:border-[#00516f] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#c6ed7e] flex items-center justify-center text-[#4d6c06]">
                      <MessageSquare size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-label-md text-label-md text-[#001f29]">
                        Live Chat
                      </p>
                      <p className="text-xs text-[#40484e]">
                        Avg. wait: 2 mins
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                <img
                  alt="Meridian Security"
                  className="w-full h-full object-cover"
                  data-alt="A professional, high-end close-up of a person's hands typing on a sleek silver laptop in a bright, modern glass-walled office environment. Soft natural sunlight floods the space, creating a warm and secure atmosphere. The focus is sharp on the keyboard, symbolizing digital security and progress, with a subtle lime green accent in the background. The mood is corporate, clean, and highly professional."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSWR8NzpbDavuJgn6zvFRAtPUISk__CuGTlm9g4yMs-kA4vGRQKdqhXCs5HoE4tTmRDb72Undjj5WbFnOEWTLJIjJYMpn1mExeEFlwgyEpyEwQixulZmKt_qtuNgYweYZYBWN8N6nZnVXrCYK-8FKfkTJHXzaCDHAsfzjl46s9ayTQ6Js8yCvkvySXZolUkoPkZyivqYsjuK8BafTAZbGr9YHtnAoxmGsqkA1AyxWG0iwH1FhOYU3CszJ6mhq4ldNssR6zftTZyKg"
                />
                <div className="absolute inset-0 bg-[#00516f] opacity-20"></div>
              </div>
              {/* Need Help Card */}
              {/* Image Card */}
              {/* Footer */}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
