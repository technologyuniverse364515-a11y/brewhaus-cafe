import { useState, useEffect } from "react";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "cafe-nav-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#hero"
          className={`font-serif text-xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {text.cafeName}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {text.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buttons.callNow.link}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-cafe-brown-light"
          >
            {buttons.callNow.text}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="cafe-nav-blur border-t border-border px-5 py-4 md:hidden">
          {text.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buttons.callNow.link}
            className="mt-3 block rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            {buttons.callNow.text}
          </a>
        </div>
      )}
    </nav>
  );
}
