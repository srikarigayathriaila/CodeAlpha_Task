import { Award, BadgeCheck, Briefcase, Code2, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { achievements } from "./data";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  badge: BadgeCheck,
  briefcase: Briefcase,
  code: Code2,
};

export function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Milestones" title="Achievements & Certifications" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug">{item.title}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{item.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}