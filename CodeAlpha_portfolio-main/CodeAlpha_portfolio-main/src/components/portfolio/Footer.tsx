import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "./data";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-extrabold">
              <span className="text-gradient">{profile.name.split(" ")[0]}</span>
              <span>.dev</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Aspiring full stack developer building thoughtful web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}