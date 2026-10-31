
import Container from "../ui/Container";
import useActiveSection from "../../hooks/useActiveSection";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "artroom", label: "Art Room" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Get In Touch" },
];
const ids = links.map((l) => l.id); // outside the component so it stays the same array
export default function Navbar() {
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-50 h-[83px] bg-cobalt-deep">
      <Container className="flex h-full items-center justify-between">
        <a href="#home" className="font-display text-[28px] font-bold text-white">
          rumi
        </a>

        <nav>
          <ul className="flex items-center gap-14">
            {links.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative block py-2 text-base font-medium transition-colors ${
                      isActive ? "text-pink" : "text-white hover:text-pink"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-[57px] -translate-x-1/2 rounded-full bg-pink" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}