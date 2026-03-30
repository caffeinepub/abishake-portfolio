import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function formatYear(dateStr: string) {
  return dateStr.split("-")[0];
}

function EduCard({
  edu,
  index,
}: {
  edu: (typeof data.education)[number];
  index: number;
}) {
  const cardRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
      style={{
        border: "1px solid rgba(34,211,238,0.25)",
        boxShadow: "var(--neon-cyan-shadow)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(168,85,247,0.15))",
          border: "1px solid rgba(34,211,238,0.3)",
        }}
      >
        🎓
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="text-base font-bold text-foreground">
          {edu.institution}
        </h3>
        <p className="text-sm font-semibold gradient-text mt-0.5">
          {edu.studyType} — {edu.area}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {formatYear(edu.startDate)} — {formatYear(edu.endDate)}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Education
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        <div className="grid gap-6">
          {data.education.map((edu, i) => (
            <EduCard key={edu.institution} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
