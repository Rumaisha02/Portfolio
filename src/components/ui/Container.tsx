import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-12 xl:px-40 ${className}`}>
      {children}
    </div>
  );
}