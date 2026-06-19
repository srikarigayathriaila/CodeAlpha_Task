import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Explore Stunning Image Collections" },
      { name: "description", content: "A modern, responsive image gallery showcasing nature, animals, cities, technology, space and abstract photography." },
      { property: "og:title", content: "Lumen — Explore Stunning Image Collections" },
      { property: "og:description", content: "A modern, responsive image gallery with category filters, lightbox view and smooth animations." },
    ],
  }),
  component: Index,
});

function Index() {
  // The gallery is a vanilla HTML/CSS/JS app served from /public.
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0a0a14", color: "#f3f4f6" }}>
      <p>Loading gallery…</p>
    </div>
  );
}
