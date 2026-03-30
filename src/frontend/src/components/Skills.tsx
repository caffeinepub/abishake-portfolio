import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PILL_COLORS = [
  "rgba(168,85,247,",
  "rgba(34,211,238,",
  "rgba(99,102,241,",
  "rgba(59,130,246,",
];

export default function Skills() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            What I Know
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Skills
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        {/* Skill groups */}
        {data.skills.map((group, gi) => {
          const colorBase = PILL_COLORS[gi % PILL_COLORS.length];
          return (
            <SkillGroup
              key={group.name}
              group={group}
              colorBase={colorBase}
              delay={gi * 100}
            />
          );
        })}
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  colorBase,
  delay,
}: {
  group: { name: string; keywords: string[] };
  colorBase: string;
  delay: number;
}) {
  const ref = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <div ref={ref} className="mb-10" style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-3">
        <span
          className="block h-px flex-1"
          style={{
            background: `linear-gradient(90deg, ${colorBase}0.5), transparent)`,
          }}
        />
        {group.name}
        <span
          className="block h-px flex-1"
          style={{
            background: `linear-gradient(270deg, ${colorBase}0.5), transparent)`,
          }}
        />
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {group.keywords.map((kw) => (
          <span
            key={kw}
            className="skill-pill text-foreground"
            style={{
              borderColor: `${colorBase}0.35)`,
            }}
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
