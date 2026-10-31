import { useEffect } from "react";
import type { Artwork } from "../../data/artworks";

type Props = {
  items: Artwork[];
  index: number;
  onClose: () => void;
  onChange: (next: number) => void;
};

export default function Lightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index];
  const n = items.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % n);
      if (e.key === "ArrowLeft") onChange((index - 1 + n) % n);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // lock page scroll
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, n, onClose, onChange]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      data-lightbox
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-full bg-pink text-2xl font-bold text-navy transition-transform hover:scale-110"
      >
        ✕
      </button>

      {n > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onChange((index - 1 + n) % n); }}
            aria-label="Previous"
            className="absolute left-6 flex size-12 items-center justify-center rounded-full bg-white text-xl text-navy"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onChange((index + 1) % n); }}
            aria-label="Next"
            className="absolute right-6 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-navy"
          >
            →
          </button>
        </>
      )}

      {item.src ? (
        <img
          src={item.src}
          alt={item.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        />
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex h-[80vh] w-[min(60vh,90vw)] items-center justify-center rounded-lg bg-blue-soft text-navy/50"
        >
          {item.title}
        </div>
      )}
    </div>
  );
}