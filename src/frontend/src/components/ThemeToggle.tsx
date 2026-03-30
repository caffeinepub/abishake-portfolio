interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export default function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      data-ocid="theme.toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ boxShadow: "var(--neon-purple-shadow)" }}
    >
      <span
        style={{
          display: "inline-block",
          transition: "transform 0.4s ease, opacity 0.3s ease",
          transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
        }}
      >
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
