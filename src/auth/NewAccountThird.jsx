import React, { useState } from "react";
import {
  Check,
  Bell,
  UserCircle,
  Fingerprint,
  Upload,
  Lock,
  Shield,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import RegistrationStepper from "../components/RegistrationStepper";

export default function NewAccountThird() {
  const navigate = useNavigate();

  const currentStep = 3;
  const [profileImage, setProfileImage] = useState(null);

  const choosedAccount = localStorage.getItem("choosedAccount");
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setProfileImage(file);

    const preview = URL.createObjectURL(file);

    const registrationData =
      JSON.parse(localStorage.getItem("registrationData")) || {};

    registrationData.profileImagePreview = preview;

    localStorage.setItem("registrationData", JSON.stringify(registrationData));
  };

  // When the user uploads the photo:
  const registrationData =
    JSON.parse(localStorage.getItem("registrationData")) || {};

  registrationData.profileImage = profileImage;

  localStorage.setItem("registrationData", JSON.stringify(registrationData));

  const handleContinue = () => {
    navigate("/new-account-Final", {
      state: {
        profileImage,
      },
    });
  };
  return (
    <div className="min-h-screen bg-[#eef5f8] text-[#001f29]">
      {/* Main */}
      <main className="max-w-[1400px] mx-auto px-6 py-12">
        {/* STEPPER */}
        <div className="flex justify-center mb-14">
          <RegistrationStepper currentStep={3} />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Left Section */}
          <div>
            {/* Upload Card */}
            <div className="bg-white border border-[#d6dde1] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Fingerprint size={40} className="text-[#006d97]" />

                <h3 className="text-4xl font-medium">Upload Identification</h3>
              </div>

              <p className="text-[#40484e] leading-8 mb-8 text-left">
                Please upload an image of your government-issued ID
                (biographical page).
              </p>
              <div className="mb-8 p-6 bg-[#e5f6ff] rounded-xl border border-[#bfc8cf]50 flex flex-col items-center text-center">
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-16 h-16 text-[#006a91]" />
                )}
                <h3 className="font-headline-sm text-[18px] mb-2">
                  Profile Photo
                </h3>
                <p className="font-body-md text-[14px] text-[#40484e] mb-4">
                  Please upload a clear, recent photo of yourself for your
                  profile.
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="profileImage"
                />

                <label
                  htmlFor="profileImage"
                  className="bg-[#00516f] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#234552] transition-colors flex items-center gap-2"
                >
                  <Upload size={18} />
                  Upload Photo
                </label>
              </div>

              {/* Security Card */}
              <div className="mt-8 border border-[#d6dde1] rounded-lg bg-[#f5fbff] p-5 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded bg-[#234552] text-white flex items-center justify-center">
                    <Lock size={20} />
                  </div>

                  <div className="w-10 h-10 rounded bg-[#6c8d16] text-white flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Bank-Grade Encryption</p>

                  <p className="text-sm text-[#555]">
                    Your documents are processed via end-to-end encrypted
                    tunnels and are never stored on your device's local cache.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-8 bg-[#edf8e7] border-l-4 border-[#6b8f1c] justify-center p-6 rounded-r-lg">
              <p className="italic text-[#555]">
                "Your privacy is our priority. Credit Union uses these documents
                solely for legal identity verification under federal 'Know Your
                Customer' regulations."
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-white border border-[#d6dde1] rounded-lg overflow-hidden">
              <div className="bg-[#006d97] p-4">
                <h3 className="uppercase tracking-widest text-white text-sm">
                  Review Selection
                </h3>
              </div>

              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  {profileImage ? (
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="Profile"
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  ) : (
                    <UserCircle className="w-16 h-16 text-[#006a91]" />
                  )}

                  <div>
                    <p className="text-[#006d97] font-medium">
                      Meridian Premier Savings
                    </p>

                    <p className="text-sm text-[#666]">APY: 4.25%</p>
                  </div>
                </div>

                <hr className="mb-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Initial Deposit</span>
                    <span>$00.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Monthly Fee</span>
                    <span>$0.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Identity Status</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="w-full h-14 bg-[#006d97] text-white rounded mt-6 flex items-center justify-center hover:bg-[#005a7d] transition-colors gap-2"
            >
              Submit Application
              <ArrowRight size={20} />
            </button>

            <button className="w-full h-12 mt-4 border border-[#d6dde1] bg-white rounded">
              Save and Exit
            </button>

            <div className="bg-[#e9f6fc] border border-[#bfd8e6] rounded-lg p-6 mt-6 text-center">
              <p className="mb-2">Need help with verification?</p>

              <button className="text-[#006d97] font-semibold flex items-center justify-center gap-2 mx-auto">
                <MessageSquare size={18} />
                Chat with an agent
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1f4958] mt-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-6">
          <h2 className="text-2xl font-semibold"> Credit Union</h2>

          <div className="flex flex-wrap gap-6 text-sm">
            <button>Privacy Policy</button>
            <button>Security</button>
            <button>Terms of Service</button>
            <button>Legal Disclosures</button>
          </div>

          <p className="text-sm opacity-80">
            © 2026 Credit Union. Member NCUA. Equal Housing Lender.
          </p>
        </div>
      </footer>
    </div>
  );
}
