import { useLayoutEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";
import { Sparkle, StarOutline } from "../ui/Decor";
import ProjectCard from "../work/ProjectCard";
import { projects } from "../../data/projects";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap";

/* background shapes, one set per slide (alternates left/right) */
function SlideDecor({ index }: { index: number }) {
  return index % 2 === 0 ? (
    <>
      <div className="absolute -right-10 -top-40 size-[420px] rounded-full bg-white/10" />
      <div className="absolute -left-[360px] top-[18%] size-[560px] rounded-full bg-lavender/60" />
      <Sparkle className="absolute right-[64px] top-[48%] size-8 text-white/50" />
      <Sparkle className="absolute bottom-[10%] left-[62px] size-7 text-white/50" />
    </>
  ) : (
    <>
      <div className="absolute -right-[200px] top-[30%] size-[560px] rounded-full bg-lavender/50" />
      <StarOutline className="absolute left-[50px] top-[40%] size-12 text-pink/60" />
      <Sparkle className="absolute bottom-[14%] right-[64px] size-8 text-white/50" />
    </>
  );
}

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const wraps = Array.from(
        root.current?.querySelectorAll<HTMLElement>(".project-fit") ?? []
      );
      if (!wraps.length) return;

      const inners = wraps.map((w) => w.firstElementChild as HTMLElement);
      const tallest = Math.max(...inners.map((el) => el.offsetHeight));
      const available = window.innerHeight - 83 - 48;             // navbar + breathing room
      const z = Math.max(0.6, Math.min(1, available / tallest));  // never below 60%

      wraps.forEach((w, i) => {
        // the wrapper takes the *scaled* height, so the slide fits the screen
        w.style.height = `${inners[i].offsetHeight * z}px`;
        inners[i].style.transformOrigin = "top center";
        inners[i].style.transform = `scale(${z})`;
      });
    };

    fit();
    document.fonts.ready.then(() => {
      fit();
      ScrollTrigger.refresh();
    });
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);



  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

        slides.forEach((slide, i) => {
          // 1. content of each project glides in, piece by piece
          gsap.from(slide.querySelectorAll("[data-reveal]"), {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: slide,
              start: i === 0 ? "top 75%" : "top 90%",
              toggleActions: "play none none reset",
            },
          });

          // 2. as the NEXT project slides over this one, this one shrinks + fades back
          const next = slides[i + 1];
          if (next) {
            gsap.to(slide.querySelector(".project-inner"), {
              scale: 0.92,
              opacity: 0.4,
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            });
          }
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="relative overflow-clip bg-cobalt ">
      {/* ---- heading ---- */}
      <div className="relative pb-6 pt-20">
        <StarOutline className="absolute left-[92px] top-[78px] size-12 text-pink/60" />
        <Container>
          <SectionHeading
            text="Work"
            className="text-center font-display text-[140px] font-black leading-none text-white"
          />
        </Container>
      </div>

      {/* ---- stacked projects ---- */}
      <div className="relative">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-slide sticky top-[83px] flex min-h-[calc(100vh-83px)] items-center overflow-clip bg-cobalt py-6 ${i > 0 ? "rounded-t-[48px] shadow-[0_-24px_60px_rgba(0,0,0,0.25)]" : ""
              }`}
            style={{ zIndex: i + 1 }}
          >
            <SlideDecor index={i} />
            <Container className="project-inner relative z-10 origin-top">
              <div className="project-fit">
                <div>
                  <ProjectCard project={p} />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}