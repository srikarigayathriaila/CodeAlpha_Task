import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recent work" title="Featured Projects" />
        <div className="grid gap-7 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 100}
              className="glass group overflow-hidden rounded-2xl transition-all hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <Button asChild variant="glow" size="sm">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github /> Code
                    </a>
                  </Button>
                  <Button asChild variant="hero" size="sm">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}