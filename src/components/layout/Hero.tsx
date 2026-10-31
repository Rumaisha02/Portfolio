import { StarOutline, Sparkle } from "../ui/Decor";
import heroImg from "../../assets/heroImg.png";

// Swap this when your photo is ready:
// import heroImg from "../../assets/hero.png";
const HERO_IMG = heroImg;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[700px] overflow-hidden bg-cobalt">
      {/* ---- background shapes ---- */}
      <div className="absolute -right-[67px] -top-[119px] size-[334px] rounded-full bg-lavender" />
      <div className="absolute -bottom-[160px] -left-[75px] size-[330px] rounded-full bg-white/20" />
      {/* TODO: export the bottom outline blobs from Figma as SVG and place here */}

      {/* ---- floating doodles ---- */}
      <StarOutline className="absolute left-[58px] top-[42px] size-[78px] text-pink" />
      <StarOutline className="absolute left-[40px] top-[420px] size-[50px] text-pink/80" />
      <Sparkle className="absolute right-[48px] top-[94px] size-6 text-white/60" />

      {/* ---- 3D layer slot (later): absolute inset-0 canvas goes here ---- */}

      {/* ---- text ---- */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-[140px] md:px-12 xl:px-[102px]">
        <p className="flex items-center gap-2 text-[28px] font-semibold text-pink">
          hello, i'm <Sparkle className="size-6" />
        </p>

        <h1 className="font-display text-[110px] font-black uppercase leading-[100px]">
          <span className="block text-white">Rumaisha</span>
          <span className="block text-pink">Qadeer</span>
        </h1>

        <p className="mt-8 max-w-[650px] text-[28px] font-semibold leading-[59px] text-white">
          Crafting experiences that doesn’t just look good but feels awesome is
          what keeps me going!
        </p>

        <a
          href="#work"
          className="mt-2 inline-flex h-10 items-center gap-2 rounded-full bg-pink px-4 text-base font-medium text-navy transition-transform hover:scale-105"
        >
          View My Work
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* ---- photo + dashed ring ---- */}
      <div className="absolute right-[60px] top-[112px] z-10 hidden size-[596px] rounded-full border-2 border-dashed border-pink lg:block">
        {HERO_IMG ? (
          <img src={HERO_IMG} alt="Rumaisha Qadeer"
            className="absolute -top-[84px] left-1/2 h-[840px] w-auto max-w-none -translate-x-1/2" />
        ) : (
          <div className="absolute -top-[84px] left-1/2 flex h-[840px] w-[345px] -translate-x-1/2 items-center justify-center rounded-3xl border-2 border-dashed border-white/50 text-white/70">
            photo goes here
          </div>
        )}

        <span className="absolute -top-[37px] left-[328px] rounded-full bg-white px-4 py-2 text-[22px] font-bold uppercase leading-none text-cobalt">
          UI/UX Designer
        </span>
      </div>
    </section>
  );
}