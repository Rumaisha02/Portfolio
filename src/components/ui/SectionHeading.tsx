import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

type Props = { text: string; className?: string };

export default function SectionHeading({ text, className = "" }: Props) {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".char", {
          yPercent: 110,
          rotate: 12,
          opacity: 0,
          duration: 0.9,
          ease: "back.out(1.7)",
          stagger: 0.06,
         scrollTrigger: { trigger: root.current, start: "top 85%", toggleActions: "play none none reset" },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <h2 ref={root} aria-label={text} className={className}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom"
        >
          <span className="char inline-block origin-bottom-left">
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </h2>
  );
}