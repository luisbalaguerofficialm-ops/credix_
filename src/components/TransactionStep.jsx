import { Check } from "lucide-react";

export default function TransactionStep({ currentStep }) {
  const steps = ["Select Recipient", "Transfer Details", "Confirm"];

  const progressWidth =
    currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%";

  return (
    <div className="flex justify-center">
      <div className="relative flex items-center justify-between w-full max-w-[620px]">
        {/* Background Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#bfc8cf]" />

        {/* Progress Line */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-[#00516f] transition-all duration-500"
          style={{ width: progressWidth }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center bg-[#e5f6ff]/40 px-2"
            >
              {completed ? (
                <div className="w-10 h-10 rounded-full bg-[#00516f] text-white flex items-center justify-center shadow-sm">
                  <Check size={18} />
                </div>
              ) : active ? (
                <div className="w-10 h-10 rounded-full bg-[#00516f] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {stepNumber}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full border-2 border-[#bfc8cf] bg-white text-[#40484e] flex items-center justify-center font-bold text-sm">
                  {stepNumber}
                </div>
              )}

              <span
                className={`mt-2 text-xs text-center font-medium ${
                  completed || active
                    ? "text-[#00516f] font-semibold"
                    : "text-[#54626d]"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
