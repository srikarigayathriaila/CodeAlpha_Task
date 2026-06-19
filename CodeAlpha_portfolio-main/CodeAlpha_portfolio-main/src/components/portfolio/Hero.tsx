import { ArrowRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";
import { profile } from "./data";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* Decorative animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/25 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-[fade-in_0.8s_ease-out] text-center md:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" /> Available for internships
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary align-middle text-transparent">
              |
            </span>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button asChild variant="hero" size="xl">
              <a href={profile.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="glow" size="xl">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-fit animate-float-slow">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-brand blur-2xl opacity-60" />
          <img
            src={profileImg}
            alt={`${profile.name}, Computer Science student`}
            width={768}
            height={768}
            className="h-56 w-56 rounded-full border-4 border-border object-cover shadow-glow sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}