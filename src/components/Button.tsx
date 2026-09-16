import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">;

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "p-1.5 font-bold rounded-[7px] text-amber-50 transition-transform duration-300 ease-in-out hover:scale-105 group disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <button
      {...props}
      className={twMerge(baseStyles, getVariantStyles(variant), className)}
    >
      {children}
    </button>
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-purple-800 hover:bg-purple-700";
    case "secondary":
      return "bg-slate-700 hover:bg-slate-600";
    case "ghost-destructive":
      return "bg-transparent text-red-500 hover:bg-red-500/10";
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
