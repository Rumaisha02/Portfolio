import type { ReactNode } from "react";

type Variant = "blue" | "pink" | "white" | "blue-outline" | "pink-outline";

const styles: Record<Variant, string> = {
  blue: "bg-cobalt text-white",
  pink: "bg-pink text-navy",
  white: "bg-white text-navy",
  "blue-outline": "border-2 border-cobalt text-cobalt",
  "pink-outline": "border-2 border-pink text-navy",
};

type Props = { variant?: Variant; children: ReactNode; className?: string };

export default function Pill({ variant = "blue", children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex h-8 items-center rounded-full px-4 text-[13px] font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}