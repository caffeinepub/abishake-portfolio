import data from "@/data/portfolio.json";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const initials = data.basics.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          data-ocid="nav.link"
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #a855f7)",
              boxShadow: "var(--neon-cyan-shadow)",
            }}
          >
            {initials}
          </span>
          <span className="hidden sm:block font-semibold text-foreground group-hover:text-accent transition-colors">
            {data.basics.name.split(" ")[0]}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #22d3ee, #a855f7)",
                        boxShadow: "0 0 8px rgba(34,211,238,0.6)",
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hire Me button */}
        <a
          href={`mailto:${data.basics.email}`}
          data-ocid="nav.primary_button"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105"
          style={{
            border: "1px solid rgba(34,211,238,0.5)",
            boxShadow: "0 0 10px rgba(34,211,238,0.2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 20px rgba(34,211,238,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 10px rgba(34,211,238,0.2)";
          }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md text-foreground"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t px-4 py-4">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${data.basics.email}`}
                data-ocid="nav.primary_button"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-full text-sm font-semibold text-center mt-1"
                style={{ border: "1px solid rgba(34,211,238,0.5)" }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
