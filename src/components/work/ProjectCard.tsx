import Pill from "../ui/Pill";
import ToolTile from "../ui/ToolTile";
import { Sparkle } from "../ui/Decor";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { tag, tagVariant, title, description, cover, designTools, aiTools, href } = project;

  return (
    <article>
      <div data-reveal className="w-fit">
        <Pill variant={tagVariant} className="gap-2 text-xs font-medium text-navy">
          <Sparkle className="size-4 text-navy" />
          {tag}
        </Pill>
        </div>

      <h3 data-reveal className="mt-5 text-[28px] font-bold text-white">{title}</h3>
      <p data-reveal className="mt-4 text-[22px] leading-7 text-white">{description}</p>

      <div data-reveal className="mt-10 grid grid-cols-[615px_1fr] gap-12 rounded-[32px] bg-white p-8">
        {/* cover */}
        <div className="h-[417px] overflow-hidden rounded-2xl bg-blue-soft">
          {cover ? (
            <img src={cover} alt={`${title} cover`} className="size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center text-navy/40">
              cover goes here
            </div>
          )}
        </div>

        {/* tools + CTA */}
        <div className="flex flex-col">
          <h4 className="font-body text-xl font-bold text-navy">Design Tools:</h4>
          <ul className="mt-3 flex gap-5">
            {designTools.map((t) => (
              <li key={t.name}><ToolTile {...t} /></li>
            ))}
          </ul>

          <h4 className="mt-6 font-body text-xl font-bold text-navy">Incorporating AI</h4>
          <ul className="mt-3 flex gap-5">
            {aiTools.map((t) => (
              <li key={t.name}><ToolTile {...t} /></li>
            ))}
          </ul>

          <a
            href={href}
            className="mt-auto inline-flex h-[52px] w-fit items-center rounded-full bg-pink px-6 font-body text-l font-bold text-navy  transition-transform hover:scale-105"
          >
            Complete Case Study →
          </a>
        </div>
      </div>
    </article>
  );
}