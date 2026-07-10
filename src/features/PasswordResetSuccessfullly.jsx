import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function PasswordResetSuccessfully() {
  return (
    <div className="bg-[#f3faff] text-[#001f29] font-sans min-h-screen flex flex-col items-center justify-between py-12 px-4 select-none">
      {/* Spacer to push content to match screen99.png vertical alignment */}
      <div className="hidden md:block flex-grow-0 min-h-[40px]"></div>

      {/* Focused Content Canvas */}
      <main className="w-full max-w-[540px] bg-white border border-[#d6e3ec] rounded-2xl p-10 md:p-14 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] my-auto">
        <div className="text-center">
          {/* Branding */}
          <div className="mb-10">
            <span className="text-3xl font-bold text-[#004b66] tracking-tight">
              Credit Union 
            </span>
          </div>

          {/* Success Icon container mirroring the green squircle badge in screen99.png */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#c5e784] text-[#2d5214]">
              <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
            </div>
          </div>

          {/* Messaging */}
          <h1 className="text-3xl font-bold text-[#001f29] tracking-tight mb-5">
            Password Reset Successful
          </h1>
          <p className="text-[15px] text-[#4a5568] leading-relaxed max-w-[420px] mx-auto mb-10">
            Your password has been successfully updated. Your account security
            is our priority. You can now use your new credentials to access your
            banking dashboard.
          </p>

          {/* Primary Action Button */}
          <a
            className="inline-flex items-center justify-center w-full bg-[#004c66] text-white font-semibold text-base py-4 px-8 rounded-xl transition-all duration-200 hover:bg-[#003d52] active:scale-[0.99] shadow-sm"
            href="#"
          >
            Back to Sign In
          </a>

          {/* Helper Support Footer */}
          <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#4a5568]">
              Didn't perform this action?{" "}
              <a
                className="text-[#004c66] font-semibold hover:underline ml-1"
                href="#"
              >
                Contact Support immediately
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="w-full max-w-xl mx-auto flex flex-col items-center gap-6 mt-auto pt-10">
        {/* Security Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#d7f2ff] rounded-full border border-[#bce3f7]">
          <ShieldCheck className="w-4 h-4 text-[#3c7a1a] stroke-[2.5]" />
          <span className="text-xs font-semibold text-[#004c66]">
            Secure 256-bit encryption
          </span>
        </div>
      </footer>
    </div>
  );
}
