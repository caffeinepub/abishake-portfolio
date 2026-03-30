import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone } from "lucide-react";
import { SiFacebook, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: data.links.github,
    icon: SiGithub,
    color: "rgba(255,255,255,0.8)",
    glow: "0 0 20px rgba(255,255,255,0.3)",
  },
  {
    label: "LinkedIn",
    href: data.links.linkedin,
    icon: SiLinkedin,
    color: "#0077b5",
    glow: "0 0 20px rgba(0,119,181,0.5)",
  },
  {
    label: "Facebook",
    href: data.links.facebook,
    icon: SiFacebook,
    color: "#1877f2",
    glow: "0 0 20px rgba(24,119,242,0.5)",
  },
  {
    label: "WhatsApp",
    href: data.links.whatsapp,
    icon: SiWhatsapp,
    color: "#25d366",
    glow: "0 0 20px rgba(37,211,102,0.5)",
  },
];

export default function Contact() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");
  const linksRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Contact
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a
            href={`mailto:${data.basics.email}`}
            data-ocid="contact.button"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{ border: "1px solid rgba(168,85,247,0.25)" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(34,211,238,0.1))",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                Email
              </p>
              <p className="text-sm font-medium text-foreground break-all">
                {data.basics.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${data.basics.phone}`}
            data-ocid="contact.button"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{ border: "1px solid rgba(34,211,238,0.25)" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.1))",
                border: "1px solid rgba(34,211,238,0.3)",
              }}
            >
              <Phone size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                Phone
              </p>
              <p className="text-sm font-medium text-foreground">
                +91 {data.basics.phone}
              </p>
            </div>
          </a>
        </div>

        {/* Social icons */}
        <div
          ref={linksRef}
          className="flex flex-wrap justify-center gap-6"
          style={{ transitionDelay: "0.15s" }}
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                data-ocid="contact.button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group w-14 h-14 rounded-2xl glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    social.glow;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    social.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <Icon
                  size={24}
                  style={{ color: social.color, transition: "transform 0.2s" }}
                  className="group-hover:scale-110"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
