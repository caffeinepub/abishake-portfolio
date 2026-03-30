import data from "@/data/portfolio.json";
import { SiFacebook, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const SOCIAL_LINKS = [
  { label: "GitHub", href: data.links.github, icon: SiGithub },
  { label: "LinkedIn", href: data.links.linkedin, icon: SiLinkedin },
  { label: "Facebook", href: data.links.facebook, icon: SiFacebook },
  { label: "WhatsApp", href: data.links.whatsapp, icon: SiWhatsapp },
];

const NAV_COLS = [
  {
    title: "Sections",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between mb-10">
          {/* Left: brand + social */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                }}
              >
                {data.basics.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="font-bold text-foreground">
                {data.basics.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs">
              {data.basics.label}
            </p>
            {/* Social row */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                    style={{ border: "1px solid var(--glass-border)" }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="flex gap-12">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(34,211,238,0.4), transparent)",
          }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            &copy; {currentYear} {data.basics.name}. All rights reserved.
          </span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
