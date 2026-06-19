import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { education } from "./data";

export function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal className="space-y-5 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science undergraduate driven by curiosity and a love for building things
              that live on the web. My journey started with simple HTML pages and grew into full
              stack applications powered by{" "}
              <span className="font-semibold text-foreground">React, Node.js, and Python</span>.
            </p>
            <p className="leading-relaxed">
              I'm passionate about clean code, intuitive interfaces, and strong fundamentals in{" "}
              <span className="font-semibold text-foreground">data structures & algorithms</span>. My
              goal is to grow into a versatile full stack engineer who ships products that genuinely
              help people.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { n: "10+", l: "Projects" },
                { n: "500+", l: "DSA Problems" },
                { n: "3.8", l: "GPA" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <p className="text-gradient font-display text-2xl font-extrabold">{s.n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <ul className="space-y-8">
              {education.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 120} className="relative pl-12">
                  <span className="absolute left-[7px] top-1 grid h-5 w-5 place-items-center rounded-full bg-gradient-brand shadow-glow">
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <div className="glass rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{item.place}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}