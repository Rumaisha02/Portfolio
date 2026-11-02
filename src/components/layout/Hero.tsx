import { StarOutline, Sparkle } from "../ui/Decor";
import heroImg from "../../assets/heroImg.png";
import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

// Swap this when your photo is ready:
// import heroImg from "../../assets/hero.png";
const HERO_IMG = heroImg;

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const pillInner = document.querySelector(".hero-pill-inner");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
        tl.from(".hero-decor", { opacity: 0, duration: 1.2, stagger: 0.1 }, 0)
          .from(".hero-hello", { y: 20, opacity: 0, duration: 0.7 }, 0.1)
          .from(".hero-name", { y: 40, opacity: 0, duration: 0.9, stagger: 0.15 }, 0.25)
          .from(".hero-ring", { opacity: 0, scale: 0.92, transformOrigin: "50% 50%", duration: 1 }, 0.5)
          .from(".hero-text", { y: 24, opacity: 0, duration: 0.8 }, 0.7)
          .from(".hero-photo", { y: 40, opacity: 0, duration: 1 }, 0.8)
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7 }, 0.9)
          // last: the pill pops, then the heartbeat takes over
          .fromTo(
            ".hero-pill",
            { scale: 0, opacity: 0, transformOrigin: "50% 50%" },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(2.4)",
              onComplete: () => pillInner?.classList.add("heartbeat"),
            },
            ">-0.1"
          );

        // wait for the fonts so the big headline doesn't jump mid-animation
        document.fonts.ready.then(() => tl.play());

        return () => pillInner?.classList.remove("heartbeat");
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="home" className="relative min-h-[700px] overflow-hidden bg-cobalt">
      {/* ---- background shapes ---- */}
      <div className="absolute -right-[67px] -top-[119px] size-[334px] rounded-full bg-lavender" />
      <div className="absolute -bottom-[160px] -left-[75px] size-[330px] rounded-full bg-white/20" />
      {/* TODO: export the bottom outline blobs from Figma as SVG and place here */}

      {/* ---- floating doodles ---- */}
      <StarOutline className=" hero-decor absolute left-[58px] top-[42px] size-[78px] text-pink" />
      <StarOutline className="hero-decor absolute left-[40px] top-[420px] size-[50px] text-pink/80" />
      <Sparkle className="hero-decor absolute right-[48px] top-[94px] size-6 text-white/60" />

      {/* ---- 3D layer slot (later): absolute inset-0 canvas goes here ---- */}

      {/* ---- text ---- */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-[140px] md:px-12 xl:px-[102px]">
        <p className=" hero-hello flex items-center gap-2 text-[28px] font-semibold text-pink">
          hello, i'm <Sparkle className="size-6" />
        </p>

        <h1 className="font-display text-[110px] font-black uppercase leading-[100px]">
          <span className=" hero-name block text-white">Rumaisha</span>
          <span className="hero-name block text-pink">Qadeer</span>
        </h1>

        <p className=" hero-text mt-8 max-w-[650px] text-[28px] font-semibold leading-[59px] text-white">
          Crafting experiences that doesn’t just look good but feels awesome is
          what keeps me going!
        </p>

        <a
          href="#work"
          className="hero-cta group mt-2 inline-flex h-10 items-center gap-2 rounded-full bg-pink px-4 text-base font-medium text-navy transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          View My Work
          <svg
            viewBox="0 0 24 24"
            className="size-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* ---- photo + dashed ring ---- */}
      <div className="hero-ring absolute right-[50px] top-[112px] z-10 hidden size-[596px] rounded-full border-2 border-dashed border-pink lg:block">
        {/* the wrapper is what animates; it must cover the whole ring */}
        <div className="hero-photo absolute inset-0">
          {HERO_IMG ? (
            <img
              src={HERO_IMG}
              alt="Rumaisha Qadeer"
              className="absolute -top-[84px] left-1/2 h-[840px] w-auto max-w-none -translate-x-1/2"
            />
          ) : (
            <div className="absolute -top-[84px] left-1/2 flex h-[840px] w-[345px] -translate-x-1/2 items-center justify-center rounded-3xl border-2 border-dashed border-white/50 text-white/70">
              photo goes here
            </div>
          )}
        </div>

        {/* outer span pops in; inner span does the heartbeat (they can't share a transform) */}
        <span className="hero-pill absolute -top-[37px] left-[328px]">
          <span className="hero-pill-inner block rounded-full bg-white px-4 py-2 text-[22px] font-bold uppercase leading-none text-cobalt">
            UI/UX Designer
          </span>
        </span>
      </div>
    </section>
  );
}