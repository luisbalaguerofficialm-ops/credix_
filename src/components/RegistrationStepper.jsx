import { Check } from "lucide-react";

export default function RegistrationStepper({ currentStep }) {
  const steps = ["Account Type", "Personal Info", "Verification", "Finalize"];

  return (
    <div className="w-full flex justify-center mb-10 px-4">
      <div className="relative flex items-start justify-between w-full max-w-[700px]">
        {/* Background Line */}
        <div className="absolute top-5 md:top-6 left-0 right-0 h-0.5 bg-gray-300" />

        {/* Progress Line */}
        <div
          className="absolute top-5 md:top-6 left-0 h-0.5 bg-[#006d94] transition-all duration-500"
          style={{
            width:
              currentStep === 1
                ? "0%"
                : currentStep === 2
                  ? "33%"
                  : currentStep === 3
                    ? "66%"
                    : "100%",
          }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center bg-[#f4f9fc] px-1 md:px-3"
            >
              {completed ? (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#006d94] text-white flex items-center justify-center">
                  <Check size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
              ) : active ? (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-2 border-[#006d94] bg-white text-[#006d94] flex items-center justify-center font-semibold">
                  {stepNumber}
                </div>
              ) : (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-2 border-gray-300 bg-white text-gray-500 flex items-center justify-center font-semibold">
                  {stepNumber}
                </div>
              )}

              {/* Desktop label */}
              <span
                className={`hidden md:block mt-3 text-sm text-center ${
                  completed || active ? "text-[#00516f]" : "text-gray-500"
                }`}
              >
                {step}
              </span>

              {/* Mobile label */}
              <span
                className={`md:hidden mt-2 text-[10px] text-center ${
                  completed || active ? "text-[#00516f]" : "text-gray-500"
                }`}
              >
                Step {stepNumber}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
