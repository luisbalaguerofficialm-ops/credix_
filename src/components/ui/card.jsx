import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-300 bg-[#ffffff] mb-6 text-gray-900 shadow-sm",
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-4", className)} // reduced padding from p-6 → p-4 for cleaner spacing
      {...props}
    />
  );
});

CardContent.displayName = "CardContent";

export { Card, CardContent };
