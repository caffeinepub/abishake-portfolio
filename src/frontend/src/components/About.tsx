import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");
  const textRef = useScrollAnimation<HTMLParagraphElement>("reveal");

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div ref={titleRef} className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            About Me
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        {/* Summary */}
        <p
          ref={textRef}
          className="text-base sm:text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto"
          style={{ transitionDelay: "0.15s" }}
        >
          {data.basics.summary}
        </p>

        {/* Info badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {(
            [
              { label: "Email", value: data.basics.email },
              { label: "Phone", value: data.basics.phone },
              {
                label: "Location",
                value: `${data.basics.location.city}, ${data.basics.location.region}`,
              },
            ] as const
          ).map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-xl px-5 py-3 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
