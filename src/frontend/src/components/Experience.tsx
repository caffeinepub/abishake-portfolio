import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const d = new Date(Number.parseInt(year), Number.parseInt(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function TimelineCard({
  job,
  index,
}: {
  job: (typeof data.work)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(isLeft ? "reveal-left" : "reveal-right");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isLeft]);

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 neon-border-purple transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Company & role */}
      <div className="mb-3">
        <h3 className="text-base font-bold text-foreground leading-snug">
          {job.name}
        </h3>
        <p className="text-sm font-semibold gradient-text mt-0.5">
          {job.position}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {formatDate(job.startDate)} — {formatDate(job.endDate)}
        </p>
      </div>
      {/* Divider */}
      <div
        className="h-px w-full mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(34,211,238,0.2), transparent)",
        }}
      />
      {/* Highlights */}
      <ul className="space-y-2">
        {job.highlights.map((hl) => (
          <li key={hl} className="flex gap-2 text-sm text-muted-foreground">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #a855f7)",
              }}
            />
            <span>{hl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Work Experience
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-line"
            aria-hidden="true"
          />
          {/* Mobile line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:hidden timeline-line"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {data.work.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={job.name} className="relative">
                  {/* Desktop dot */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full hidden md:block timeline-dot"
                    style={{
                      background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                      border: "2px solid rgba(34,211,238,0.5)",
                    }}
                  />
                  {/* Mobile dot */}
                  <div
                    aria-hidden="true"
                    className="absolute left-4 -translate-x-1/2 top-8 w-3 h-3 rounded-full md:hidden timeline-dot"
                    style={{
                      background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                      border: "2px solid rgba(34,211,238,0.5)",
                    }}
                  />

                  {/* Desktop: alternating layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                    {isLeft ? (
                      <>
                        <TimelineCard job={job} index={i} />
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <TimelineCard job={job} index={i} />
                      </>
                    )}
                  </div>

                  {/* Mobile: single column */}
                  <div className="md:hidden pl-10">
                    <TimelineCard job={job} index={i} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
