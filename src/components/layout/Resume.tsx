import type { ReactNode } from "react";
import Container from "../ui/Container";
import { Sparkle, StarOutline } from "../ui/Decor";
import { resume } from "../../data/resume";

const linkCls = "underline decoration-ink/40 underline-offset-2 transition-colors hover:text-cobalt";

/* **bold** markers in the data become <strong> */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-navy">{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </>
  );
}

/* label above a divider line, content below it */
function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-10">
      <h3 className="px-[74px] text-[11px] uppercase tracking-wide text-ink">{label}</h3>
      <div className="mt-2 border-t border-black/10 px-[74px] pt-6">{children}</div>
    </div>
  );
}

const bullets = "mt-3 list-disc space-y-0 pl-6 text-[15px] leading-[26px] text-ink marker:text-ink";
const strongBullets = "list-disc pl-6 text-[15px] leading-[26px] text-ink marker:text-navy";

export default function Resume() {
  const r = resume;

  return (
    <section id="resume" className="relative overflow-hidden bg-white pb-24 pt-[14px]">
      {/* ---- background decor ---- */}
      <div className="absolute -left-[140px] top-[1000px] size-[360px] rounded-full bg-blue-soft/60" />
      <div className="absolute left-[540px] top-[1080px] size-[180px] rounded-full bg-pink-soft/60" />
      <div className="absolute -left-[240px] top-[400px] size-[390px] rounded-full border border-dashed border-pink/40" />
      {/* TODO: export the big pink squiggle from Figma as SVG and place it on the right, behind the content */}

      <StarOutline className="absolute left-[60px] top-[342px] size-12 text-pink/70" />
      <Sparkle className="absolute left-[840px] top-[296px] size-7 text-pink/60" />

      {/* ---- heading ---- */}
      <div className="relative z-10 mx-auto flex h-[208px] w-[893px] items-center justify-center rounded-t-[50%/100%] bg-blue-soft">
        <h2 className="resume-heading font-display text-[140px] font-black leading-none text-cobalt">
          Resume
        </h2>
      </div>

      <Container className="relative z-10 mt-[70px]">
        {/* ---- header ---- */}
        <div className="px-[74px]">
          <h3 className="text-[30px] font-semibold text-navy">{r.name}</h3>
          <p className="mt-3 text-base font-medium text-navy">{r.role}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink">
            {r.contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className={linkCls}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-black/10 px-[74px] pt-4">
          <a
            href={r.pdf}
            download="Rumaisha_Qadeer_Resume.pdf"
            className="inline-flex h-[52px] items-center gap-3 rounded-full border border-pink px-6 text-xs font-medium text-navy transition-colors hover:bg-pink-soft"
          >
            Download resume
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
        </div>

        {/* ---- education ---- */}
        <Block label="Education">
          {r.education.map((e) => (
            <div key={e.school}>
              <div className="flex items-baseline justify-between gap-6">
                <h4 className="text-lg font-medium text-navy">{e.school}</h4>
                <span className="text-xs text-ink">{e.meta}</span>
              </div>
              <p className="mt-1 text-[15px] text-ink">{e.detail}</p>
            </div>
          ))}
        </Block>

        {/* ---- experience ---- */}
        <Block label="Experience">
          {r.experience.map((e) => (
            <div key={e.title}>
              <div className="flex items-baseline justify-between gap-6">
                <h4 className="text-lg font-medium text-navy">{e.title}</h4>
                <span className="text-xs text-ink">{e.dates}</span>
              </div>
              <p className="mt-1 text-[15px] text-ink">{e.org}</p>
              <ul className={bullets}>
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Block>

        {/* ---- projects ---- */}
        <Block label="Project">
          <div className="space-y-8">
            {r.projects.map((p) => (
              <div key={p.title}>
                <div className="flex items-baseline justify-between gap-6">
                  <h4 className="text-lg font-medium text-navy">{p.title}</h4>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs text-navy ${linkCls}`}
                  >
                    {p.linkLabel}
                  </a>
                </div>
                <ul className={bullets}>
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        {/* ---- achievements ---- */}
        <Block label="Achievements">
          <ul className={`${strongBullets} space-y-0`}>
            {r.achievements.map((a) => (
              <li key={a}><Rich text={a} /></li>
            ))}
          </ul>
        </Block>

        {/* ---- skills ---- */}
        <Block label="Skills">
          <ul className={`${strongBullets} space-y-0`}>
            {r.skills.map((s) => (
              <li key={s}><Rich text={s} /></li>
            ))}
          </ul>
        </Block>
      </Container>
    </section>
  );
}