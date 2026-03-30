import data from "@/data/portfolio.json";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typewritten, setTypewritten] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const roleText = data.basics.label;

  useEffect(() => {
    let i = 0;
    setTypewritten("");
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setTypewritten(roleText.slice(0, i));
        if (i >= roleText.length) {
          clearInterval(timer);
          // Blink cursor after done
          let blinks = 0;
          const blink = setInterval(() => {
            setShowCursor((p) => !p);
            blinks++;
            if (blinks > 10) clearInterval(blink);
          }, 500);
        }
      }, 75);
      return () => clearInterval(timer);
    }, 600);
    return () => clearTimeout(delay);
  }, [roleText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic orb blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Large purple orb */}
        <div
          className="absolute animate-blob"
          style={{
            width: "600px",
            height: "600px",
            top: "-150px",
            left: "-200px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Cyan orb */}
        <div
          className="absolute animate-blob-delayed"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-100px",
            right: "-150px",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(59,130,246,0.07) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Center deep blue orb */}
        <div
          className="absolute animate-blob-slow"
          style={{
            width: "400px",
            height: "400px",
            top: "40%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(79,125,255,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Star dots (dark mode only) */}
        <div className="absolute inset-0 dark:star-bg opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Geometric glowing avatar */}
        <div className="flex justify-center mb-8">
          <div
            className="animate-float"
            style={{ filter: "drop-shadow(0 0 30px rgba(168,85,247,0.4))" }}
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(168,85,247,0.2) 100%)",
                border: "2px solid rgba(168,85,247,0.4)",
                boxShadow:
                  "0 0 30px rgba(168,85,247,0.3), inset 0 0 30px rgba(34,211,238,0.05)",
              }}
            >
              <span className="gradient-text-hero text-4xl font-black select-none">
                {data.basics.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>

        {/* Name with glitch effect */}
        <h1
          className="glitch gradient-text-hero text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight"
          data-text={data.basics.name}
          style={{
            textShadow:
              "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(168,85,247,0.15)",
          }}
        >
          {data.basics.name}
        </h1>

        {/* Typewriter role */}
        <div className="h-8 flex items-center justify-center mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-muted-foreground tracking-widest uppercase">
            {typewritten}
            <span
              className="inline-block w-0.5 h-5 ml-0.5 bg-accent align-middle"
              style={{
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            />
          </h2>
        </div>

        {/* Location badge */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-accent text-lg">📍</span>
          <span className="text-sm text-muted-foreground font-medium">
            {data.basics.location.city}, {data.basics.location.region},{" "}
            {data.basics.location.countryCode}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            data-ocid="hero.primary_button"
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
              boxShadow:
                "0 0 20px rgba(34,211,238,0.35), 0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            data-ocid="hero.secondary_button"
            className="px-8 py-3 rounded-full font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              border: "1.5px solid rgba(34,211,238,0.55)",
              boxShadow: "0 0 12px rgba(34,211,238,0.15)",
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="animate-bounce text-lg">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
