import { useState } from "react";
import Container from "../ui/Container";
import Lightbox from "../art/Lightbox";
import { artworks } from "../../data/artworks";

/* ---------- positions: ONE place that decides where every card sits ----------
   Today these feed inline styles + a CSS transition.
   Later with GSAP: gsap.to(card, { ...getPose(offset) }) — same function, no rewrite. */
type Pose = { x: number; y: number; rotate: number; scale: number; opacity: number; z: number };
const CARD_W = 440; // change this one number to resize everything
function getPose(offset: number): Pose {
  if (offset === 0) return { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, z: 30 };
  if (offset === -1) return { x: -CARD_W * 0.7, y: 56, rotate: -15, scale: 1, opacity: 1, z: 10 };
  if (offset === 1) return { x: CARD_W * 0.7, y: 56, rotate: 15, scale: 1, opacity: 1, z: 10 };
  return { x: 0, y: 40, rotate: 0, scale: 0.8, opacity: 0, z: 0 };
}
// Signed distance from the active card, wrapping around: -1 = left, 0 = front, 1 = right
function offsetOf(i: number, active: number, n: number) {
  const half = Math.floor(n / 2);
  return ((i - active + n + half) % n) - half;
}

export default function ArtRoom() {
  const n = artworks.length;
  const [active, setActive] = useState(Math.min(1, n - 1)); // start with the middle one in front
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="artroom" className="relative overflow-hidden bg-white pb-24 pt-10">
      {/* ---- background decor ---- */}
      <div className="absolute -left-[320px] -top-[220px] h-[470px] w-[900px] rounded-full bg-pink-soft" />
      <div className="absolute -right-[140px] -top-[60px] size-[320px] rounded-full bg-pink-soft" />
      <div className="absolute -right-[80px] bottom-[40px] size-[300px] rounded-full bg-pink-soft" />
      {/* TODO: export the pink squiggly line from Figma as SVG and place here */}

      <Container className="relative z-10">
        <h2 className="artroom-heading text-center font-display text-[100px] font-black leading-none text-pink">
          ArtRoom
        </h2>
        <p className="artroom-intro mt-6 text-center text-xl text-ink">
          A little peek into things I try to improve my sense of design along with
          keeping up with my art hobbies!
        </p>
      </Container>

      {/* ---- card stage ---- */}
      <div className="art-stage relative z-10 mx-auto mt-14 h-[760px] max-w-[1440px]">
        {artworks.map((art, i) => {
          const offset = offsetOf(i, active, n);
          const p = getPose(offset);
          const isFront = offset === 0;
          const visible = Math.abs(offset) <= 1;

          return (
            <button
              key={art.id}
              data-art-card
              onClick={() => (isFront ? setOpen(i) : setActive(i))}
              aria-label={isFront ? `Open ${art.title} fullscreen` : `Bring ${art.title} forward`}
              tabIndex={visible ? 0 : -1}
              className="absolute inset-x-0 top-0 mx-auto transition-[transform,opacity] duration-500 ease-out [backface-visibility:hidden] will-change-transform"
              style={{
                width: CARD_W,
                transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg) scale(${p.scale})`,
                opacity: p.opacity,
                zIndex: p.z,
                pointerEvents: visible ? "auto" : "none",
                cursor: isFront ? "zoom-in" : "pointer",
              }}
            >
              <div className="relative rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                {/* tape */}
                <span className="absolute -top-3 left-1/2 h-[18px] w-[120px] -translate-x-1/2 rounded-sm bg-pink/80" />

                <div className="aspect-[5/6] overflow-hidden rounded-sm bg-blue-soft">
                  {art.src ? (
                    <img src={art.thumb ?? art.src} alt={art.title} className="size-full object-cover" />
                  ) : (
                    <div className="flex size-full items-center justify-center text-navy/40">
                      {art.title}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ---- prev/next: only appear once you have more than 3 pieces ---- */}
      {n > 3 && (
        <div className="relative z-10 mt-4 flex justify-center gap-4">
          <button
            onClick={() => setActive((active - 1 + n) % n)}
            aria-label="Previous artwork"
            className="flex size-12 items-center justify-center rounded-full bg-pink text-xl text-navy transition-transform hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={() => setActive((active + 1) % n)}
            aria-label="Next artwork"
            className="flex size-12 items-center justify-center rounded-full bg-pink text-xl text-navy transition-transform hover:scale-110"
          >
            →
          </button>
        </div>
      )}

      {open !== null && (
        <Lightbox
          items={artworks}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </section>
  );
}