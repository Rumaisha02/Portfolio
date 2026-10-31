import Container from "../ui/Container";
import Pill from "../ui/Pill";
import { Sparkle, StarOutline } from "../ui/Decor";

import Cat from "../about/Cat";




const skills = [
  { label: "Figma", variant: "blue" },
  { label: "Canva", variant: "blue" },
  { label: "Adobe XD", variant: "blue" },
  { label: "Illustrator", variant: "blue" },
  { label: "Prototyping", variant: "pink" },
  { label: "Design Systems", variant: "pink" },
  { label: "User Testing", variant: "blue-outline" },
  { label: "Interaction Design", variant: "blue-outline" },
  { label: "Visual Design", variant: "blue-outline" },
  { label: "UI Design", variant: "blue-outline" },
  { label: "UX Research", variant: "blue-outline" },
  { label: "HTML", variant: "pink-outline" },
  { label: "CSS", variant: "pink-outline" },
  { label: "Javascript", variant: "pink-outline" },
  { label: "React", variant: "pink-outline" },
] as const;

const Divider = () => <div className="h-1 w-full bg-blue-soft" />;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-[100px] ">
      {/* ---- background decor ---- */}
      <div className="absolute -right-[60px] -top-[100px] size-[360px] rounded-full bg-pink-soft" />
      <div className="absolute -bottom-[120px] -left-[80px] size-[300px] rounded-full bg-blue-soft/60" />
      <div className="absolute -left-[180px] top-[160px] size-[520px] rounded-full border border-dashed border-pink/40" />
      {/* TODO: export the pink squiggly lines from Figma as SVG and place here */}

      <StarOutline className="absolute left-[60px] top-[118px] size-12 text-pink/70" />
      <Sparkle className="absolute left-[840px] top-[72px] size-7 text-pink/60" />

      {/* ---- cat sticker ---- */}
      <div className="absolute right-[100px] top-[290px] z-20 hidden lg:block">
        <Cat />
      </div>

      {/* ---- block 1: intro ---- */}
      <Container className="relative z-10">
        <Pill variant="pink" className="h-8 gap-2 text-xs font-medium text-navy">
          <Sparkle className="size-4 text-navy" />
          About Me
        </Pill>

        <h2 className="mt-14 font-display text-5xl font-bold text-navy">UI/UX Designer</h2>
        <p className="mt-6 max-w-[600px] text-base leading-[26px] text-ink">
          Hello I'm Rumaisha Qadeer, a self-taught UI/UX designer pursuing B.Tech in
          Computer Science &amp; Engineering. I build design experiences through lots of
          research and brainstorming and a lot of late-night Figma sessions. I care deeply
          about creating clean, intuitive, and just a little bit quirky digital experiences
          that feel human.
        </p>
      </Container>

      <div className="my-6"><Divider /></div>

      {/* ---- block 2: bookholic ---- */}
      <Container className="relative z-10">
        <div className="ml-auto max-w-[620px] text-right lg:mr-[300px]">
          <h2 className="font-display text-5xl font-bold text-navy">Part time bookholic</h2>
          <p className="mt-6 text-base leading-[26px] text-ink">
            I like to explore different books, books that get most of my emotions out, makes
            me an empath and allow me to imagine everything that is going on in it. Won’t call
            myself an all time book bug but I try to incorporate that in life by sometimes
            reading “The Design of Everyday Things” and other time “The Kite Runner”.
          </p>
        </div>
      </Container>

      <div className="my-6"><Divider /></div>

      {/* ---- block 3: skills ---- */}
      <Container className="relative z-10">
        <h2 className="font-display text-5xl font-bold text-navy">Skills</h2>
        <ul className="mt-6 flex max-w-[900px] flex-wrap gap-3">
          {skills.map((s) => (
            <li key={s.label}>
              <Pill variant={s.variant}>{s.label}</Pill>
            </li>
          ))}
        </ul>
      </Container>

      <div className="mt-8 w-[85%]"><Divider /></div>
    </section>
  );
}