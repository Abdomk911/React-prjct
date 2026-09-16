import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean; // Keep optional if you want default = false
};

export default function Button({ children, disabled = false }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="bg-purple-800 hover:bg-purple-700 p-1.5 font-bold rounded-[7px] text-amber-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
