import { useEffect, useState } from "react";
import { Sparkle } from "./Decor";

const KEY = "responsive-notice-dismissed";

function shouldShow() {
  if (window.innerWidth >= 1024) return false; // desktop is fine, no notice
  try {
    return !sessionStorage.getItem(KEY);
  } catch {
    return true;
  }
}

export default function ResponsiveNotice() {
  const [eligible] = useState(shouldShow);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!eligible) return;
    const open = setTimeout(() => setShown(true), 1200);   // slides in after 1.2s
    const auto = setTimeout(() => setShown(false), 11000); // slides away on its own
    return () => {
      clearTimeout(open);
      clearTimeout(auto);
    };
  }, [eligible]);

  const close = () => {
    setShown(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* private mode: ignore */
    }
  };

  if (!eligible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={!shown}
      className={`fixed bottom-4 right-4 z-[90] flex w-[min(320px,calc(100vw-2rem))] items-start gap-3 rounded-2xl border-2 border-pink bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out ${
        shown ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-[120%] opacity-0"
      }`}
    >
      <Sparkle className="mt-0.5 size-5 shrink-0 text-pink" />
      <p className="text-sm leading-5 text-navy">
        <strong className="font-semibold">Heads up!</strong> I'm still making this site
        phone-friendly, so it might look a little off here. It's best on a laptop for now.
      </p>
      <button
        onClick={close}
        aria-label="Dismiss"
        className="-mr-1 -mt-1 flex size-7 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-pink-soft"
      >
        ✕
      </button>
    </div>
  );
}