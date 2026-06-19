import { Download, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

export function Resume() {
  return (
    <section id="resume" className="bg-gradient-soft px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="My experience" title="Resume" />
        <Reveal className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
            <FileText className="h-9 w-9" />
          </span>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold">{profile.name} — Curriculum Vitae</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A one-page summary of my education, projects, skills, and achievements. Download the
              latest version below.
            </p>
          </div>
          <Button asChild variant="hero" size="xl">
            <a href={profile.resumeUrl} download>
              <Download /> Download Resume
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}