import * as React from "react";
import { cn } from "../../lib/utils";

export const Switch = React.forwardRef(
  ({ className, checked, defaultChecked, onChange, ...props }, ref) => {
    const [isOn, setIsOn] = React.useState(defaultChecked || false);

    const handleToggle = (e) => {
      const value = checked !== undefined ? !checked : !isOn;
      setIsOn(value);
      onChange && onChange(e);
    };

    const isChecked = checked !== undefined ? checked : isOn;

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200",
          isChecked ? "bg-blue-600" : "bg-gray-300",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200",
            isChecked ? "translate-x-6" : "translate-x-1",
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";
