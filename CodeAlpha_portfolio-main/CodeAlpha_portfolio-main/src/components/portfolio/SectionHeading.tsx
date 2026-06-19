import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-brand" />
    </Reveal>
  );
}