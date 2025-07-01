import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-2 h-11";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";
