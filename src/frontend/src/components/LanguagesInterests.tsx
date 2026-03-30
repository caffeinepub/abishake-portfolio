import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function LanguagesInterests() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");
  const langRef = useScrollAnimation<HTMLDivElement>("reveal");
  const intRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="languages" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            More About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Languages &amp; Interests
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Languages */}
          <div ref={langRef} className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-5 flex items-center gap-2">
              <span>🌐</span> Languages
            </h3>
            <div className="flex flex-col gap-3">
              {data.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between"
                >
                  <span className="font-semibold text-foreground text-sm">
                    {lang.language}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(168,85,247,0.12)",
                      border: "1px solid rgba(168,85,247,0.35)",
                      color: "rgba(168,85,247,1)",
                    }}
                  >
                    {lang.fluency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div
            ref={intRef}
            className="glass-card rounded-2xl p-6"
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-5 flex items-center gap-2">
              <span>✨</span> Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.interests.map((interest) => (
                <span
                  key={interest.name}
                  className="skill-pill text-foreground"
                  style={{ borderColor: "rgba(34,211,238,0.35)" }}
                >
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
