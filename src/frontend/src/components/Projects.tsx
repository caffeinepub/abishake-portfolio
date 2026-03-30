import data from "@/data/portfolio.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROJECT_ICONS = ["🚀", "📊", "💡", "⚡"];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof data.projects)[number];
  index: number;
}) {
  const ref = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <div
      ref={ref}
      data-ocid={`projects.item.${index + 1}`}
      className="glass-card rounded-2xl p-6 group cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{
        transitionDelay: `${index * 100}ms`,
        border: "1px solid rgba(168,85,247,0.25)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 30px rgba(168,85,247,0.45), 0 0 60px rgba(168,85,247,0.15), 0 20px 40px rgba(0,0,0,0.3)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(168,85,247,0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(168,85,247,0.25)";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(34,211,238,0.15))",
          border: "1px solid rgba(168,85,247,0.3)",
        }}
      >
        {PROJECT_ICONS[index % PROJECT_ICONS.length]}
      </div>

      <h3 className="text-base font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
        {project.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
      />
    </div>
  );
}

export default function Projects() {
  const titleRef = useScrollAnimation<HTMLDivElement>("reveal");

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            What I've Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text uppercase tracking-wide">
            Projects
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
