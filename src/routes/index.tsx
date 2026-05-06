import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brewhaus Cafe — Crafted Coffee. Cozy Vibes." },
      { name: "description", content: "A cozy neighborhood cafe — crafted coffee, warm vibes, live music & events." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#F5F1EA",
        color: "#2B2B2B",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>Brewhaus Cafe</h1>
        <p style={{ marginBottom: 16, color: "#6B6258" }}>Loading cafe website…</p>
        <a
          href="/index.html"
          style={{
            color: "#8B5E3C",
            fontWeight: 600,
            border: "1.5px solid #8B5E3C",
            padding: "10px 22px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Open Cafe Website →
        </a>
      </div>
    </div>
  );
}
