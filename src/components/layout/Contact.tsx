import { useRef } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Sparkle, StarOutline } from "../ui/Decor";
import ContactForm from "../contact/ContactForm";
import { email, socials } from "../../data/resume";
import { gsap, useGSAP } from "../../lib/gsap";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rise = (sel: string, delay = 0) =>
          gsap.from(sel, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: sel, start: "top 85%", toggleActions: "play none none reset" },
          });
        rise(".contact-left");
        rise(".contact-card", 0.15);
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="contact" ref={root} className="relative overflow-hidden bg-cobalt py-24">
      {/* ---- background decor ---- */}
      <div className="absolute -right-10 -top-40 size-[420px] rounded-full bg-white/10" />
      <div className="absolute -left-[320px] bottom-[-120px] size-[560px] rounded-full bg-lavender/60" />
      <StarOutline className="absolute left-[92px] top-[78px] size-12 text-pink/60" />
      <Sparkle className="absolute bottom-[120px] right-[64px] size-8 text-white/50" />
      <Sparkle className="absolute left-[60px] top-[52%] size-7 text-white/50" />

      <Container className="relative z-10">
        <SectionHeading
          text="Get In Touch"
          className="text-center font-display text-[140px] font-black leading-none text-white"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_540px] lg:gap-16">
          {/* ---- left: words + direct links ---- */}
          <div className="contact-left">
            <h3 className="font-body text-[40px] font-bold leading-tight text-white">
              Got a project, an opening, or just want to say hi?
            </h3>
            <p className="mt-5 text-[22px] leading-8 text-white">
              My inbox is always open. Drop me a message and let's make something that feels
              as good as it looks.
            </p>

            <p className="mt-10 font-body text-xl font-bold text-white">Or email me directly:</p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block break-all text-2xl font-bold text-pink underline underline-offset-4 transition-colors hover:text-white"
            >
              {email}
            </a>

            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-full border-2 border-white/70 px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-cobalt"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- right: the form card ---- */}
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}