import Container from "../ui/Container";
import { resume, email, socials } from "../../data/resume";

const icons: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  behance: <span className="text-lg font-bold leading-none tracking-tight">Bē</span>,
};

export default function Footer() {
  return (
    <footer  className="bg-cobalt-deep py-12 text-white">
      <Container className="grid grid-cols-[460px_1fr_auto] items-start text-sm tracking-[0.15em]">
        {/* left */}
        <div>
          <p className="font-bold">rumaisha qadeer</p>
          <p className="mt-3 font-light">@{new Date().getFullYear()}</p>
        </div>

        {/* middle */}
        <div>
          <a href={`mailto:${email}`} className="font-bold transition-opacity hover:opacity-80">
            {email}
          </a>
          <a
            href={resume.pdf}
            download="Rumaisha_Qadeer_Resume.pdf"
            className="mt-3 block w-fit font-light underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            resume(pdf) →
          </a>
        </div>

        {/* right */}
        <ul className="space-y-4 font-light tracking-[0.12em]">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <span className="flex w-5 justify-center">{icons[s.name]}</span>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}