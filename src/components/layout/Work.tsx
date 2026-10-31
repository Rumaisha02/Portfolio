import Container from "../ui/Container";
import { Sparkle, StarOutline } from "../ui/Decor";
import ProjectCard from "../work/ProjectCard";
import { projects } from "../../data/projects";

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-cobalt py-20">
      {/* ---- background decor ---- */}
      <div className="absolute -right-[40px] -top-[160px] size-[420px] rounded-full bg-white/10" />
      <div className="absolute -left-[360px] top-[360px] size-[560px] rounded-full bg-lavender/60" />
      <div className="absolute -right-[200px] bottom-[120px] size-[560px] rounded-full bg-lavender/50" />

      <StarOutline className="absolute left-[92px] top-[78px] size-12 text-pink/60" />
      <StarOutline className="absolute bottom-[460px] left-[50px] size-12 text-pink/60" />
      <Sparkle className="absolute right-[64px] top-[500px] size-8 text-white/50" />
      <Sparkle className="absolute left-[62px] top-[880px] size-7 text-white/50" />

      <Container className="relative z-10">
        <h2 className="work-heading text-center font-display text-[100px] font-black leading-none text-white">
          Work
        </h2>

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((p) => (
            <div key={p.id} className="project-slide">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}