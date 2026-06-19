import { Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";
import { skillGroups } from "./data";

const iconByCategory: Record<string, LucideIcon> = {
  Frontend: LayoutTemplate,
  Backend: Server,
  Programming: Code2,
  Database: Database,
  Tools: Wrench,
};

function SkillCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = iconByCategory[group.category] ?? Code2;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? "reveal-visible" : ""} glass group rounded-2xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow`}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold">{group.category}</h3>
      </div>
      <ul className="space-y-4">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000 ease-out"
                style={{ width: visible ? `${skill.level}%` : "0%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-gradient-soft px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I work with" title="Skills & Technologies" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}