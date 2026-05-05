import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cafe/Navbar";
import { Hero } from "@/components/cafe/Hero";
import { Menu } from "@/components/cafe/Menu";
import { Gallery } from "@/components/cafe/Gallery";
import { About } from "@/components/cafe/About";
import { Contact } from "@/components/cafe/Contact";
import { Footer } from "@/components/cafe/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brewhaus Cafe — Fresh Coffee & Cozy Vibes" },
      {
        name: "description",
        content:
          "Visit Brewhaus Cafe for handcrafted coffee, fresh pastries, and a warm atmosphere.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
