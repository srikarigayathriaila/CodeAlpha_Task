import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Full-screen loading animation shown briefly on first paint. */
export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1100);
    const t2 = setTimeout(() => setHidden(true), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500",
        done && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <span className="absolute inset-2 animate-spin rounded-full border-4 border-muted border-b-secondary [animation-direction:reverse]" />
        </div>
        <p className="font-display text-sm font-semibold tracking-[0.3em] text-muted-foreground">
          LOADING
        </p>
      </div>
    </div>
  );
}