import { Check } from "lucide-react";

export default function RegistrationStepper({ currentStep }) {
  const steps = ["Account Type", "Personal Info", "Verification", "Finalize"];

  return (
    <div className="flex justify-center mb-14">
      <div className="relative flex items-center justify-between w-[700px]">
        {/* Background line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300" />

        {/* Progress line */}
        <div
          className="absolute top-6 left-0 h-0.5 bg-[#006d94] transition-all duration-500"
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
              className="relative z-10 flex flex-col items-center bg-[#eef3f6] px-3"
            >
              {completed ? (
                <div className="w-12 h-12 rounded-xl bg-[#006d94] text-white flex items-center justify-center">
                  <Check size={18} />
                </div>
              ) : active ? (
                <div className="w-12 h-12 rounded-xl border-2 border-[#006d94] bg-white text-[#006d94] flex items-center justify-center font-semibold">
                  {stepNumber}
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl border-2 border-gray-300 bg-white text-gray-500 flex items-center justify-center font-semibold">
                  {stepNumber}
                </div>
              )}

              <span
                className={`mt-3 text-sm ${
                  completed || active ? "text-[#00516f]" : "text-gray-500"
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
